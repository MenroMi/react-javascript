// basics
import { Component } from 'react';
// services
import { Anime } from "../../services/AnimeResources";
// Components
import AnimeItem from '../animeItem/AnimeItem';
import DetailInformation from '../../reusabilityComponents/detailInformation/DetailInformation';
import ErrorMessage from '../../reusabilityComponents/errorValidate/ErrorValidate';
import Spinner from '../../reusabilityComponents/spinnerLoading/Spinner';
// styles
import './AnimeList.scss';


class AnimeList extends Component {

    anime = new Anime();

    state = {
        data: [],
        loading: true,
        error: false,
        numb: '1',
    }

    componentDidMount() {
        this.giveAllAnime();
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

    onLoadedAnime = (data) => {
        this.setState({ data, loading: false });
    }

    onLoadingAnime = () => {
        this.setState({ loading: true });
    }

    onErrorLoad = () => {
        this.setState({ loading: false, error: true });
    }

    giveAllAnime = async () => {
        await this.anime.getAllAnime()  // request for list of anime
            .then(this.onLoadedAnime)
            .catch(this.onErrorLoad)
    }

    detailsInfo = (loading, error, visibleDetails) => {
        if (!loading && !error) {
            return (<DetailInformation data={visibleDetails} onChangeVisible={this.onChangeVisibleDetails} />)
        } else if (loading && !error) {
            return <Spinner />;
        } else {
            return <ErrorMessage />
        }
    }

    render() {
        const { data, loading, error, numb } = this.state;

        const styleSpinner = {
            gridColumn: "1/4",
        }

        const items = this.iterationItems(data, loading, error);
        const visibleDetails = data.filter(item => item.id === numb);


        const errorMessage = error && !loading ? <ErrorMessage /> : null;
        const load = loading ? <Spinner styles={styleSpinner} /> : null;
        const details = this.detailsInfo(loading, error, visibleDetails)
        return (
            <div className="cards-with-info">
                <ul className='list'>
                    {load}
                    {errorMessage}
                    {items}
                    <li>
                        <button className='button button_load'>Load more</button>
                    </li>
                </ul>
                {details}
            </div>
        );
    }
}

export default AnimeList;