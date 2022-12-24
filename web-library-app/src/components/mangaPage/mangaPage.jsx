// basics
import { Component } from 'react';

// Components
import NavManga from '../mangaPage/headerMangaPage/headerMangaPage';
import MangaList from '../mangaPage/mangaList/mangaList';
import SearchPanelManga from './searchManga/searchManga';

// images 
import onePiece from "../../assets/imgs/cards/one-piece.jpg";
import spyFamily from "../../assets/imgs/cards/spy-family.jpeg";
import chainsawMan from "../../assets/imgs/cards/chaisaw-man.jpeg";

// styles
import './mangaPage.scss';

class MangaPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { title: "One Piece", image: onePiece, available: "9.99$" },
                { title: "Spy Family", image: spyFamily, available: "NOT AVAILABLE" },
                { title: "Chainsaw Man", image: chainsawMan, available: "9.99$" },
                { title: "One Piece", image: onePiece, available: "9.99$" },
                { title: "Spy Family", image: spyFamily, available: "9.99$" },
                { title: "Chainsaw Man", image: chainsawMan, available: "9.99$" },
                { title: "One Piece", image: onePiece, available: "NOT AVAILABLE" },
                { title: "Spy Family", image: spyFamily, available: "9.99$" },
                { title: "Chainsaw Man", image: chainsawMan, available: "9.99$" },

            ]
        }
    }

    render() {
        const { data } = this.state;
        return (
            <div className="mangaPage">
                <NavManga />
                <SearchPanelManga />
                <MangaList data={data} />
            </div>
        );
    }
}

export default MangaPage;
