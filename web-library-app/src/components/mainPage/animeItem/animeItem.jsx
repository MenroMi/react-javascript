// basics
import React, { Component } from 'react';

// styles
import './AnimeItem.scss';

class AnimeItem extends Component {

    state = {
        loading: true,
        error: false,
    }

    componentDidMount() {
        this.changeStateLoadingError();
    }

    changeStateLoadingError = () => {
        let loadStatus = this.props.loading;
        let errorStatus = this.props.error;
        this.setState({ loading: loadStatus, error: errorStatus });
    }

    render() {

        const { loading, error } = this.state;
        const { title, posterImage, id, homepage, onVisible } = this.props;


        const content = !(loading || error) ? <ViewAnimeItem image={posterImage} title={title} homepage={homepage} /> : null;

        return (
            <li className="card" tabIndex='0' onFocus={() => onVisible(id)}>
                {content}
            </li>

        );
    }
}

const ViewAnimeItem = ({ image, title, homepage }) => { // rendering component without logic
    return (
        <>
            <img src={image} alt={title} className="card__image" />
            <div className="title title_card" >{title}
                <a href={homepage} target="_blank" rel='noreferrer'>More Info</a>
            </div>
        </>
    )
}

export default AnimeItem;