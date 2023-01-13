// basics
import { Component } from 'react';
// services
import { Anime } from "../../services/AnimeResources";
// Components
import AnimeItem from '../animeItem/AnimeItem';
import DetailInformation from '../../reusabilityComponents/detailInformation/DetailInformation';
import ErrorMessage from '../../reusabilityComponents/errorValidate/ErrorValidate';
import Spinner from '../../reusabilityComponents/spinnerLoading/Spinner';
import ErrorBoundary from '../../errorBoundary/ErrorBoundary';

// icons
import loadingSVG from "../../../assets/icons/loadingMorePage.svg";
// styles
import './AnimeList.scss';


class AnimeList extends Component {

    anime = new Anime();

    state = {
        data: [],
        loading: true,
        loadingMore: false,
        error: false,
        numb: 1,
        offset: 0,
        endedOffset: false,
    }

    autoScroll = () => {
        if (parseInt(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight + 10) {
            return;
        }

        this.onRequestAnime(this.state.offset);
    }

    componentDidMount() {
        this.onRequestAnime();
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.autoScroll)
    }

    onChangeVisibleDetails = (numb) => {
        this.setState({ numb });
    }

    iterationItems = (data, loading, error) => {
        return data.map(({ id, ...info }) => {
            return <AnimeItem {...info}
                loading={loading}
                error={error}
                key={id}
                id={id}
                onVisible={(id) => this.onChangeVisibleDetails(id)}
            />
        })
    }

    onLoadedAnime = (newItems) => {
        window.addEventListener("scroll", this.autoScroll);

        let end = false;
        if (newItems.length < 9) {
            end = true;
        }
        this.setState(({ offset, data }) => ({
            data: [...data, ...newItems],
            loading: false,
            offset: offset + 9,
            endedOffset: end,
            loadingMore: false,
        }));
    }

    onLoadingAnime = () => {
        this.setState({ loading: true });
    }

    onErrorLoad = () => {
        this.setState({ loading: false, error: true });
    }

    onRequestAnime = async (offset = null) => {
        this.onAnimeListLoading();
        await this.anime.getAllAnime(offset)  // request for list of anime
            .then(this.onLoadedAnime)
            .catch(this.onErrorLoad);
    }

    onAnimeListLoading = () => {
        this.setState({ loadingMore: true });
    }

    detailsInfo = (loading, error, visibleDetails) => {
        if (!(loading || error)) {
            return (<DetailInformation
                data={visibleDetails}
                onChangeVisible={this.onChangeVisibleDetails}
            />)
        } else if (loading && !error) {
            return <Spinner />;
        } else {
            return <ErrorMessage />
        }
    }

    render() {
        const { data, loading, error, numb, offset, endedOffset, loadingMore } = this.state;
        const styleSpinner = {
            gridColumn: "1/4",
        }
        const items = this.iterationItems(data, loading, error);
        const visibleDetails = data.filter(item => item.id === numb);

        const load = loading ? <Spinner styles={styleSpinner} /> : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const details = this.detailsInfo(loading, error, visibleDetails);
        return (
            <div className="cards-with-info">
                <ul className='list'>
                    {load}
                    {errorMessage}
                    {items}
                    <li>
                        <button
                            className='button button_load'
                            disabled={loadingMore}
                            style={{ display: endedOffset ? "none" : 'block' }}
                            onClick={() => this.onRequestAnime(offset)}
                        >{loadingMore ? <img
                            src={loadingSVG}
                            alt="loading"
                            style={{
                                position: "relative",
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: "50px",
                            }} /> : "load more"}</button>
                    </li>
                </ul>
                <ErrorBoundary>
                    {details}
                </ErrorBoundary>
            </div>
        );
    }
}

export default AnimeList;