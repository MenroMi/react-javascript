// basics
import { Component } from 'react';

// plugins

// Components
import NavManga from '../../mangasPage/headerMangaPage/headerMangaPage';
// images 
import ChaisawMan from "../../../assets/imgs/cards/chaisaw-man.jpeg";
// styles
import './mangaPage.scss';


class MangaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <div className='chosenMangaPage'>
                <NavManga />
                <div className="manga-container">
                    <div className="wrapper">
                        <img src={ChaisawMan} alt="Title: Chaisaw Man" className="wrapper__img" />
                        <div className="descr-wrapper">
                            <div className="descr-wrapper__title">Chainsaw Man</div>
                            <div className="descr-wrapper__descr">Denji is a teenage boy living with a Chainsaw Devil named Pochita. Due to the debt his father left behind, he has been living a rock-bottom life while repaying his debt by harvesting devil corpses with Pochita. <br />
                                One day, Denji is betrayed and killed. As his consciousness fades, he makes a contract with Pochita and gets revived as "Chainsaw Man" — a man with a devil's heart.</div>
                            <div className="descr-wrapper__lang">Language: en-us</div>
                            <div className="descr-wrapper__price">9.99$</div>
                        </div>
                    </div>
                    <a href='#top' className="manga-container__btn-back">Back to all</a>
                </div>
            </div>
        );
    }
}

export default MangaPage;
