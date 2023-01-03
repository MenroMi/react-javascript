// basics
import { Component } from 'react';

// plugins
import { v4 as uuid4 } from 'uuid';

// services
import { Anime } from "../../services/AnimeResources";
// Components
import AnimeItem from '../animeItem/AnimeItem';
import DetailInformation from '../../reusabilityComponents/detailInformation/DetailInformation';

// styles
import './AnimeList.scss';

// object
const arr = [{}, {}, {}, {}, {}, {}, {}, {}, {}];


class AnimeList extends Component {

    anime = new Anime();

    state = {
        data: arr.map(obj => {

            obj = {
                title: null,
                description: null,
                posterImage: null,
                homepage: null,
                wiki: null,
                alt: null,
                key: uuid4(),
            };

            return obj;
        }),
        loading: true,
        error: false,
        visible: false,
        ID: null,
    }

    componentDidMount() {
        this.giveAllAnime();
    }

    onChangeVisibleDetails = (id) => {
        this.setState({ visible: true, ID: id });
    }

    iterationItems = (data, loading, error) => {

        return data.map(({ key, ...info }) => {
            return <AnimeItem {...info}
                loading={loading}
                error={error}
                key={key}
                ID={key}
                onVisible={(id) => this.onChangeVisibleDetails(id)}
            />
        })
    }

    giveAllAnime = async () => {
        const list = await this.anime.getAllAnime();  // request for list of anime
        return this.setState({ data: list, loading: false, error: false });
    }

    render() {
        const { data, loading, error, visible, ID } = this.state;
        const items = this.iterationItems(data, loading, error);
        const details = data.filter(item => item.key === ID);

        return (
            <div className="cards-with-info">
                <ul className='list'>
                    {items}
                    <li>
                        <button className='button button_load'>Load more</button>
                    </li>
                </ul>
                {visible ? <DetailInformation data={details} id={ID} /> : null}
            </div>
        );
    }
}

export default AnimeList;
