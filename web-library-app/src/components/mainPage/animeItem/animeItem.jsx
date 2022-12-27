// basics
import { Component } from 'react';

// Components
// images

// styles
import './AnimeItem.scss';

class AnimeItem extends Component {
    render() {
        const { image, title } = this.props;
        return (
            <li className="card" tabIndex='0'>
                <img src={image} alt={title} className="card__image" />
                <div className="title title_card">{title}
                    <a href='#top'>More Info</a>
                </div>
            </li>
        );
    }
}

export default AnimeItem;

