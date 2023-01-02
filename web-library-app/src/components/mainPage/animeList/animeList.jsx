// basics
import { Component } from 'react';

// services
import { Anime } from "../../services/AnimeResources";
// Components
import AnimeItem from '../animeItem/AnimeItem';
// import DetailInformation from '../../reusabilityComponents/informationAboutTitle/InformationAboutTitle';

// styles
import './AnimeList.scss';

// object
const obj = {
    title: null,
    description: null,
    posterImage: null,
    homepage: null,
    wiki: null,
    alt: null,
};

class AnimeList extends Component {

    anime = new Anime();

    state = {
        data: [obj, obj, obj, obj, obj, obj, obj, obj, obj],
        loading: true,
        error: false,
    }

    componentDidMount() {
        this.giveAllAnime();
    }

    iterationItems = (data, loading, error) => {
        return data.map(({ ...info }) => {
            return <AnimeItem {...info} key={crypto.randomUUID()} loading={loading} error={error} />
        })
    }

    giveAllAnime = async () => {
        const list = await this.anime.getAllAnime(); // request for list of anime
        return this.setState({ data: list, loading: false, error: false });
    }

    render() {
        const { data, loading, error } = this.state;
        const items = this.iterationItems(data, loading, error);


        return (
            <div className="cards-with-info">
                <ul className='list'>
                    {items}
                    <li>
                        <button className='button button_load'>Load more</button>
                    </li>
                </ul>
                {/* <DetailInformation data={data} /> */}
            </div>
        );
    }
}

export default AnimeList;
