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
                { title: "One Piece", image: onePiece, available: "9.99$", category: "fantasy" },
                { title: "Spy Family", image: spyFamily, available: "NOT AVAILABLE", category: "drama" },
                { title: "Chainsaw Man", image: chainsawMan, available: "9.99$", category: "drama" },
                { title: "One Piece", image: onePiece, available: "9.99$", category: "adventure" },
                { title: "Spy Family", image: spyFamily, available: "9.99$", category: "everyday" },
                { title: "Chainsaw Man", image: chainsawMan, available: "9.99$", category: "fantasy" },
                { title: "One Piece", image: onePiece, available: "NOT AVAILABLE", category: "comedy" },
                { title: "Spy Family", image: spyFamily, available: "9.99$", category: "comedy" },
                { title: "Chainsaw Man", image: chainsawMan, available: "9.99$", category: "romantic" },

            ],
            valueCategory: "",
            search: ""
        }
    }

    onChangeValueCategory = (res) => {
        this.setState(({ valueCategory: res }))
    }

    onChangeSearchValue = (search) => {
        this.setState({ search });
    }

    onResetValue = () => {
        this.setState(({ search: '' }))
    }

    onSearchByCategory = (category, items) => {
        if (category === "all" || Object.keys(category).length === 0) {
            return items;
        } else {
            return items.filter(item => {
                return Object.values(item).some(value => value.includes(category));
            })
        }
    }

    onSearchByWords = (term, items) => {
        if (term.length === 0) {
            return items
        } else {
            return items.filter(item => item.title.toLowerCase().startsWith(term.toLowerCase()));
        }

    }

    render() {
        const { data, valueCategory, search } = this.state;
        const filterCategory = this.onSearchByWords(search, this.onSearchByCategory(valueCategory, data));
        return (
            <div className="mangaPage">
                <NavManga />
                <SearchPanelManga
                    onResetValue={this.onResetValue}
                    onChangeValueCategory={this.onChangeValueCategory}
                    chooseCategory={this.onSearchByCategory}
                    onChangeSearchValue={this.onChangeSearchValue}
                />
                <MangaList data={filterCategory} />
            </div>
        );
    }
}

export default MangaPage;
