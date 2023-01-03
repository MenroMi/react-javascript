// basics
import React, { Component } from 'react';

// components
import Spinner from '../../reusabilityComponents/spinnerLoading/Spinner';
import ErrorMessage from '../../reusabilityComponents/errorValidate/ErrorValidate';

// styles
import './AnimeItem.scss';

class AnimeItem extends Component {

    state = {
        loading: true,
        error: false,
    }

    componentDidMount() {
        this.changeState();
    }

    changeState = () => {
        let loadStatus = this.props.loading;
        let errorStatus = this.props.error;
        this.setState({ loading: loadStatus, error: errorStatus });
    }

    render() {

        const { loading, error } = this.state;
        const { posterImage, title, onVisible, ID, homepage } = this.props;

        const styleSpinner = {
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
        }

        const errMessage = error ? <ErrorMessage /> : null;
        const load = loading ? <Spinner styles={styleSpinner} /> : null;
        const content = !(load || errMessage) ? <ViewAnimeItem image={posterImage} title={title} homepage={homepage} /> : null;

        return (
            <li className="card" tabIndex='0' onClick={() => onVisible(ID)} >
                {errMessage}
                {load}
                {content}
            </li>

        );
    }
}

const ViewAnimeItem = ({ image, title, homepage }) => { // rendering component without logic
    return (
        <React.Fragment>
            <img src={image} alt={title} className="card__image" />
            <div className="title title_card" >{title}
                <a href={homepage} target="_blank" rel='noreferrer'>More Info</a>
            </div>
        </React.Fragment>
    )
}

export default AnimeItem;

