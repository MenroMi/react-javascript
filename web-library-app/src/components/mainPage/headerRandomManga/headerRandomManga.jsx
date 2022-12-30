// basics
import { Component } from 'react';

//Components
import Nav from '../../reusabilityComponents/navigation/Navigation';
import Spinner from '../../reusabilityComponents/spinnerLoading/Spinner';
import ErrorMessage from '../../reusabilityComponents/errorValidate/ErrorValidate';

// Services
import { Anime } from '../../services/AnimeResources';

// images 
// import plugPic from "../../../assets/icons/icons8-kuromi.svg";
import girlRandom from "../../../assets/imgs/girlRandomManga.png";

// styles
import './HeaderRandomManga.scss';

// const instance = new Anime();
// instance.getAnimeCategory(5).then(data => data.data.map(item => {
//     let title = item.attributes.title;
//     let catID = item.id;
//     return [title, catID];
// })).then(data => console.log(data));

class HeaderRandomManga extends Component {

    constructor(props) {
        super(props);
        this.updateState();
    }

    anime = new Anime();

    state = {
        character: {
            title: null,
            description: null,
            posterImage: null,
            homepage: null,
            wiki: null,
            alt: "random manga",
        },
        loading: true,
        error: false,
        statusCode: 200
    }

    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    onLoadedAnime = (anime) => {
        this.setState({ character: anime, loading: false, statusCode: 200 });

    }

    onErrorLoad = (error) => {
        this.setState({
            error: true,
            loading: false,
            statusCode: Number(error.status)
        });
    }

    updateState = async () => {

        // let maxCount = await this.anime.getCountAllAnime();
        const id = await this.getRandomNumber(0, 10000);
        await this.anime.getAnime(id)
            .then(data => {
                if ("status" in data) {
                    return this.onErrorLoad(data);
                } else {
                    return this.onLoadedAnime(data);
                }
            }) // == .then(data => this.onChangeAnime(data))
    }

    render() {

        const { character, loading, error, statusCode } = this.state;
        const errorMessage = error !== false && statusCode !== 200 ? <ErrorMessage replyReq={this.updateState} /> : console.log(null);
        const load = loading ? <Spinner /> : null;
        const content = !(errorMessage || load) ? <ViewRandomManga character={character} /> : null;


        return (
            <header>
                <Nav />
                <div className="random">
                    {errorMessage}
                    {load}
                    {content}
                    <div className="choose-random-manga">
                        <div className="choose-random-manga__subdescr">Random manga today! <br />
                            Do you want to read special title for you? <br /> <br /> Or choose another one</div>
                        <div className="choose-random-manga__subdescr-992px">
                            Random manga for you
                        </div>
                        <button className="button button_main">Try it</button>
                        <img className='choose-random-manga__img-random' src={girlRandom} alt="School girl" />
                    </div>

                </div>
            </header>
        );
    }
}


const ViewRandomManga = ({ character }) => { // Render component without logic

    const { title, description, posterImage, homepage, wiki, alt } = character;

    return (
        <div className="random-manga">
            <img className='random-manga__img' src={posterImage} alt={alt} />
            <div className="random-manga__info">
                <div className="title" >{title}</div>
                <div className="random-manga__descr">{description}</div>
                <div className="random-manga__btns">
                    <a href={homepage} target="_blank" rel='noreferrer'> <button type="button" className="button button_main">Homepage</button> </a>
                    <a href={wiki} target="_blank" rel='noreferrer'> <button type="button" className="button button_submain">WIKI</button> </a></div>
            </div>
        </div>
    )
}

export default HeaderRandomManga;
