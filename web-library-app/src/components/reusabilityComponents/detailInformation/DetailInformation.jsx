// basics
import { Component } from 'react';

// plugins
import PropTypes from "prop-types";

// services
import { Anime } from "../../services/AnimeResources";

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
        series: null,
    }

    componentDidMount() {
        this.checkRelation();
    }

    componentDidUpdate(prevProps) {
        const { data: [{ id }] } = this.props;
        if (id !== prevProps.data[0].id) {
            this.checkRelation();
        }
    }

    onLoadingAnime = () => {
        this.setState({ loading: true });
    }

    lengthSeries = (arr) => {
        if (arr.length <= 0) {
            return "This title doesn't have more anime or manga."
        }

        return arr.map((item, i) => {

            if (i >= 15) {
                return null;
            }

            return <li key={i} className="title-details__manga-item">{item.title}</li>
        }).filter(item => item !== null);

    }

    lengthDescription = (arr) => {
        if (arr.length === 0) return;

        return arr[0].description.length >= 800 ? `${arr[0].description.slice(0, 800)}...` : arr[0].description;

    }

    onErrorMessage = () => {
        this.setState({ error: true });
    }

    checkRelation = async () => {
        const { data: [{ id }] } = this.props;

        this.onLoadingAnime();
        let series = await this.anime.getAnimeRelationship(id)
            .then(data => data.included)
            .catch(() => this.onErrorMessage());

        if (series === undefined || series.length === 0 || !series) {
            this.setState({ series: [], loading: false });
        } else {
            let arrSeries = series.map(item => {
                return item.type === "anime" || item.type === "manga" ? { title: item.attributes.canonicalTitle, type: item.type } : null
            }).filter(item => item !== null);

            this.setState({ series: arrSeries, loading: false });
        }

    }

    render() {
        const { loading, error, series } = this.state;
        const { data } = this.props;
        let moreFromSeries = series === null ? null : this.lengthSeries(series);
        let shortDescr = this.lengthDescription(data);

        console.log(moreFromSeries);
        // let skeleton = !(loading || error || visible) ? <Skeleton variant="circular"><ViewDetails data={data[0]} series={moreFromSeries} descr={shortDescr} /></Skeleton> : null;
        let load = loading ? <Spinner /> : null;
        let errorMessage = error ? <ErrorMessage /> : null;
        let details = !(loading || error) ? <ViewDetails data={data.length === 0 ? [{ title: "unknowed" }] : data[0]} series={moreFromSeries} descr={shortDescr} /> : null;

        return (
            <div className="title-details">
                {errorMessage}
                {load}

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
                <a className='title-details__links' href={homepage}><button tabIndex="-1" className='button button_main'>Homepage</button></a>
                <a className='title-details__links' href={wiki}><button tabIndex="-1" className='button button_submain'>WIKI</button></a>
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

DetailInformation.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object.isRequired),
    onChangeVisible: PropTypes.func.isRequired
}

export default DetailInformation;
