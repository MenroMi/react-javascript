// basics
import { Component } from 'react';

// plugins
import { v4 as uuidv4 } from 'uuid';


// Components
import AnimeItem from '../animeItem/animeItem';
import DetailInformation from '../reusabilityComponents/informationAboutTitle/informationAboutTitle';
// images 
import onePiece from "../../assets/imgs/cards/one-piece.jpg";
import spyFamily from "../../assets/imgs/cards/spy-family.jpeg";
import chainsawMan from "../../assets/imgs/cards/chaisaw-man.jpeg";

// styles
import './animeList.scss';

class AnimeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { title: "One Piece", image: onePiece },
                { title: "Spy Family", image: spyFamily },
                { title: "Chainsaw Man", image: chainsawMan },
                { title: "One Piece", image: onePiece },
                { title: "Spy Family", image: spyFamily },
                { title: "Chainsaw Man", image: chainsawMan },
                { title: "One Piece", image: onePiece },
                { title: "Spy Family", image: spyFamily },
                { title: "Chainsaw Man", image: chainsawMan },
            ]
        }
    }

    iterationItems = (data) => {
        return data.map(({ ...info }) => {
            return <AnimeItem {...info} key={uuidv4()} />
        })
    }

    render() {
        const { data } = this.state;
        const items = this.iterationItems(data);

        return (
            <div className="cards-with-info">
                <ul className='list'>
                    {items}
                    <button className='button button_load'>Load more</button>

                </ul>
                <DetailInformation data={data} />
            </div>
        );
    }
}

export default AnimeList;
