// basics
import { Component } from 'react';

// Components
// images

// styles
import './mangaItem.scss';

class MangaItem extends Component {
    render() {
        const { image, title, available } = this.props;
        return (
            <li className="card" tabIndex='0'>
                <img src={image} alt={title} className="card__image" />
                <div className="title title_card">{title}
                    <a href='#top' className='title title_card'>More Info</a>
                    <h3 className='card__subtitle'>{available}</h3>

                </div>
            </li>
        );
    }
}

export default MangaItem;

