// basics
import React, { Component } from 'react';

// plugins
import PropTypes from 'prop-types';


// styles
import './AnimeItem.scss';

class AnimeItem extends Component {

    itemRef = React.createRef();

    state = {
        loading: true,
        error: false,
    }

    componentDidMount() {
        this.changeStateLoadingError();
    }

    checkTitleLength = (title) => {
        return title.length > 27 ? `${title.slice(0, 27)}...` : title;
    }

    changeStateLoadingError = () => {
        let loadStatus = this.props.loading;
        let errorStatus = this.props.error;
        this.setState({ loading: loadStatus, error: errorStatus, elemRef: this.itemRef });
    }

    render() {

        const { loading, error } = this.state;
        const { title, posterImage, id, homepage, onVisible } = this.props;
        const validTitle = this.checkTitleLength(title);

        const content = !(loading || error) ? <ViewAnimeItem image={posterImage} validTitle={validTitle} title={title} homepage={homepage} /> : null;
        return (
            <li ref={this.itemRef} className="card" tabIndex='0' onFocus={() => onVisible(id)}>
                {content}
            </li>

        );
    }
}

const ViewAnimeItem = ({ image, title, validTitle, homepage }) => { // rendering component without logic
    return (
        <>
            <img src={image} alt={title} className="card__image" />
            <div className="title title_card" >{validTitle}
                <a href={homepage} target="_blank" rel='noreferrer'>More Info</a>
            </div>
        </>
    )
}

AnimeItem.propTypes = {
    id: PropTypes.number
}

export default AnimeItem;