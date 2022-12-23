// basics
import { Component } from 'react';

// Components
// images

// styles
import './animeItem.scss';

class AnimeItem extends Component {
    render() {
        const { image, title } = this.props;
        return (
            <li className="card" tabIndex='0'>
                <img src={image} alt={title} className="card__image" />
                <h2 className="title title_card">{title}</h2>
                <a href='#top' alt="For more info" className='title title_card'>More Info</a>
            </li>
        );
    }
}

export default AnimeItem;

