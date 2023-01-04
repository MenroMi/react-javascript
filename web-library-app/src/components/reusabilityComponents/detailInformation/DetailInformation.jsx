// basics
import { Component } from 'react';

// services
import { Anime } from "../../services/AnimeResources";

// plugins
import Skeleton from "@mui/material/Skeleton";

// components
import Spinner from '../spinnerLoading/Spinner';
import ErrorMessage from '../errorValidate/ErrorValidate';

// styles
import './DetailInformation.scss';

class DetailInformation extends Component {

    anime = new Anime();

    state = {
        loading: true,
        error: false,
        visible: false,
        series: null,
        numb: "1",
    }

    componentDidMount() {
        this.checkRelation();
    }

    // componentDidUpdate(prevProps, prevState) {

    //     let numb = this.state.numb,
    //         visible = this.state.visible;

    //     if (this.state.visible !== prevState.visible) {
    //         this.props.onChangeVisible(numb, visible)
    //     }
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     const { numb } = this.state;
    //     console.log("update");
    //     if (numb !== prevState.numb) {
    //         this.checkRelation();
    //     }
    // }

    onLoadingAnime = () => {
        this.setState({ loading: true });
    }

    lengthSeries = (arr) => {
        if (arr.length <= 0) {
            return "This title doesn't have more anime or manga."
        }

        return arr.map((item, i) => {
            return <li key={i} className="title-details__manga-item">{item.title}</li>
        })

    }

    onErrorMessage = () => {
        this.setState({ error: true });
    }

    checkRelation = async () => {
        const { numb } = this.state;
        this.onLoadingAnime();
        let series = await this.anime.getAnimeRelationship(numb).then(data => data.included).catch(() => this.onErrorMessage());
        if (series === undefined || series.length === 0 || !series) {
            this.setState({ series: [], visible: true });
        } else {
            let arrSeries = series.map(item => {
                return item.type === "anime" || item.type === "manga" ? { title: item.attributes.canonicalTitle, type: item.type } : null
            }).filter(item => item !== null);

            this.setState({ series: arrSeries, visible: true, loading: false });
        }

    }

    render() {
        const { loading, error, series, visible } = this.state;
        const { data } = this.props;
        let moreFromSeries = series === null ? null : this.lengthSeries(series);
        let shortDescr = data[0].description.length >= 800 ? `${data[0].description.slice(0, 800)}...` : data[0].description;


        // let skeleton = !(loading || error || visible) ? <Skeleton variant="circular"><ViewDetails data={data[0]} series={moreFromSeries} descr={shortDescr} /></Skeleton> : null;
        let load = loading ? <Spinner /> : null;
        let errorMessage = error ? <ErrorMessage /> : null;
        let details = !(loading || error || !visible) ? <ViewDetails data={data[0]} series={moreFromSeries} descr={shortDescr} /> : null;

        // let loaded = loading ? <Spinner /> : null;
        // let errorMessage = error ? <ErrorMessage /> : null;

        return (
            <div className="title-details">
                {/* {skeleton} */}
                {load}
                {errorMessage}
                {details}
            </div>
        );
    }
}


const ViewDetails = ({ data, series, descr }) => {

    const { title, posterImage, homepage, wiki } = data;

    return (
        <>
            <div className="title-details__container">
                <img src={posterImage} alt={title} className="title-details__img" />
                <h2 className="title">{title}</h2>
                <a className='title-details__links' href={homepage}><button className='button button_main'>Homepage</button></a>
                <a className='title-details__links' href={wiki}><button className='button button_submain'>WIKI</button></a>
                <div className="title-details__descr">{descr}</div>
            </div>
            <div className="title-details__manga">
                <h3 className="title-details__manga-subtitle">More from series:</h3>
                <ul className="title-details__manga-list">
                    {series}
                </ul>
            </div>
        </>
    )
}

export default DetailInformation;
