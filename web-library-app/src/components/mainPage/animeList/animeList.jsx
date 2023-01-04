// basics
import { Component } from 'react';

// plugins
import { v4 as uuid4 } from 'uuid';

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
        data: this.props.arr.map(obj => {

            obj = {
                title: null,
                description: null,
                posterImage: null,
                homepage: null,
                wiki: null,
                alt: null,
                id: uuid4(),
            };

            return obj;
        }),
        loading: true,
        error: false,
        visible: false,
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

    giveAllAnime = async () => {
        const list = await this.anime.getAllAnime();  // request for list of anime
        this.setState({ data: list, loading: false, error: false, visible: true });
    }


    render() {
        const { data, loading, error, visible, numb, series } = this.state;

        const items = this.iterationItems(data, loading, error);
        const visibleDetails = data.filter(item => item.id === numb);

        const errorMessage = error ? <ErrorMessage /> : null;
        const details = visible ? <DetailInformation data={visibleDetails} onChangeVisible={this.onChangeVisibleDetails} /> : null
        return (
            <div className="cards-with-info">
                <ul className='list'>
                    {items}
                    <li>
                        <button className='button button_load'>Load more</button>
                    </li>
                </ul>
                {errorMessage}
                {details}
            </div>
        );
    }
}

export default AnimeList;