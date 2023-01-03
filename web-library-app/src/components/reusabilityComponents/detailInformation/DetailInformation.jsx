// basics
import { Component } from 'react';

// Components
// images 

// styles
import './DetailInformation.scss';

class DetailInformation extends Component {
    render() {
        const { data: [{ title, description, posterImage, homepage, wiki }] } = this.props;
        return (
            <div className="title-details">
                <div className="title-details__container">
                    <img src={posterImage} alt={title} className="title-details__img" />
                    <h2 className="title">{title}</h2>
                    <a className='title-details__links' href={homepage}><button className='button button_main'>Homepage</button></a>
                    <a className='title-details__links' href={wiki}><button className='button button_submain'>WIKI</button></a>
                    <div className="title-details__descr">{description}</div>
                </div>
                <div className="title-details__manga">
                    <h3 className="title-details__manga-subtitle">More from series:</h3>
                    <ul className="title-details__manga-list">
                        <li className="title-details__manga-item">1</li>
                        <li className="title-details__manga-item">2</li>
                        <li className="title-details__manga-item">3</li>
                        <li className="title-details__manga-item">4</li>
                        <li className="title-details__manga-item">5</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default DetailInformation;
