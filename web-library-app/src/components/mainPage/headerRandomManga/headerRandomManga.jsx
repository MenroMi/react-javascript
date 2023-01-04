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

class HeaderRandomManga extends Component {

    anime = new Anime();

    state = {
        manga: {
            title: null,
            description: null,
            posterImage: null,
            homepage: null,
            wiki: null,
            alt: "random manga",
            id: null
        },
        loading: true,
        error: false,
    }

    componentDidMount() {
        this.updateState();
    }


    onLoadedAnime = (manga) => {
        this.setState({ manga, loading: false });
    }

    onLoadingAnime = () => {
        this.setState({ loading: true });
    }

    onErrorLoad = (status) => {

        switch (status) {
            case "404":
                this.updateState();
                break;
            case status >= "500":
                alert("problems with server");
                this.setState({ loading: false, error: true });
                break;
            case "400":
                alert("Bad Request - malformed request");
                this.setState({ loading: false, error: true });
                break;
            case "401":
                alert("Unauthorized - invalid or no authentication details provided");
                this.setState({ loading: false, error: true });
                break;
            default:
                alert("Please contact with administration");
                this.setState({ loading: false, error: true });
                break;
        }
    }


    checkDescriptionLength = (descr) => {
        if (descr.length > 200) {
            return `${descr.slice(0, 200)}...`;
        }
        return descr;
    }

    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    updateState = async () => {
        // let maxCount = await this.anime.getCountAllAnime();
        this.onLoadingAnime();
        const id = this.getRandomNumber(0, 18500);
        await this.anime.getAnime(id)
            .then(data => {
                if ("status" in data) {
                    return this.onErrorLoad(data.status);
                } else {
                    return this.onLoadedAnime(data);
                }
            }) // == .then(data => this.onChangeAnime(data))
    }

    render() {
        const { manga, loading, error, statusCode } = this.state;


        const styleSpinner = {
            margin: "0 auto",
            display: "block",
            shapeRendering: "auto",
        }

        const errorMessage = error ? <ErrorMessage statusCode={statusCode} /> : null;
        const load = loading ? <Spinner styles={styleSpinner} /> : null;
        const content = !(errorMessage || load) ? <ViewRandomManga manga={manga} checkLength={this.checkDescriptionLength} /> : null;


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
                        <button
                            className="button button_main"
                            onClick={this.updateState}
                        >Try it</button>
                        <img className='choose-random-manga__img-random' src={girlRandom} alt="School girl" />
                    </div>
                </div>
            </header>
        );
    }
}


const ViewRandomManga = ({ manga, checkLength }) => { // Render component without logic

    const { title, description, posterImage, homepage, wiki, alt } = manga;

    return (
        <div className="random-manga">
            <img className='random-manga__img' src={posterImage} alt={alt} />
            <div className="random-manga__info">
                <div className="title" >{title}</div>
                <div className="random-manga__descr">{checkLength(description)}</div>
                <div className="random-manga__btns">
                    <a href={homepage} target="_blank" rel='noreferrer'> <button type="button" className="button button_main">Homepage</button> </a>
                    <a href={wiki} target="_blank" rel='noreferrer'> <button type="button" className="button button_submain">WIKI</button> </a></div>
            </div>
        </div>
    )
}

export default HeaderRandomManga;
