// basics
import { Component } from 'react';

// Components
// images 

// styles
import './informationAboutTitle.scss';

class DetailInformation extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="title-details">
                <div className="title-details__container">
                    <img src={data[1].image} alt={data[1].title} className="title-details__img" />
                    <h2 className="title">SPY×FAMILY</h2>
                    <button className="button button_main">Homepage</button>
                    <button className="button button_submain">WIKI</button>
                    <div className="title-details__descr">At a time when all nations of the world were involved in a fierce war of information happening behind closed doors, Ostania and Westalis had been in a state of cold war against one another for decades. The Westalis Intelligence Services' Eastern-Focused Division (WISE) sends their most talented spy, "Twilight," on a top-secret mission to investigate the movements of Donovan Desmond, the chairman of Ostania's National Unity Party, who is threatening peace efforts between the two nations.</div>
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
