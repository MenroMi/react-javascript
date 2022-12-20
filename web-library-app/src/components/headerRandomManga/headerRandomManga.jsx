// basics
import { Component } from 'react';

//Components
import Nav from '../navigation/navigation';

// images 
import plugPic from "../../assets/icons/icons8-kuromi.svg";
import girlRandom from "../../assets/imgs/girlRandomManga.png";

// styles
import './headerRandomManga.scss';

class HeaderRandomManga extends Component {
    render() {
        return (
            <header>
                <Nav />
                <div className="random">
                    <div className="random-manga">
                        <img className='random-manga__img' src={plugPic} alt='Random manga' />
                        <div className="random-manga__info">
                            <div className="title">Chainsaw Man</div>
                            <div className="random-manga__descr">Denji is a teenage boy living with a Chainsaw Devil named Pochita. Due to the debt his father left behind, he has been living a rock-bottom life while repaying his debt by harvesting devil corpses with Pochita.</div>
                            <div className="random-manga__btns">
                                <button type="button" className="button button_main">Homepage</button><button type="button" className="button button_submain">wiki</button></div>
                        </div>
                    </div>
                    <div className="choose-random-manga">
                        <div className="choose-random-manga__subdescr">Random manga today! <br />
                            Do you want to read special title for you? <br /> <br /> Or choose another one</div>
                        <button className="button button_main">Try it</button>
                    </div>
                    <img className='choose-random-manga__img-random' src={girlRandom} alt="School girl" />
                </div>
            </header>
        );
    }
}

export default HeaderRandomManga;
