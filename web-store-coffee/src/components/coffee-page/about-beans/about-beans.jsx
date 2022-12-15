// Imports libraries, features... 
import { Component } from 'react';

// Components
import girlBeans from "../../../assets/imgs/our-coffee-page/gitl-with-beans.png";
import beansLogo from "../../../assets/icons/Beans-logo-black.svg";
// Styles
import './about-beans.scss';

class AboutBeans extends Component {


    render() {
        return (
            <section className='about-beans'>
                <div className="container">
                    <div className='about-beans__wrapper-flex'>
                        <img className="about-beans__img" src={girlBeans} alt="Woman with cup of coffee" />
                        <div className="about-beans__wrapper-txt">
                            <div className="title">About our beans</div>
                            <img src={beansLogo} alt="Divider between title and description" />
                            <div className="about-beans__descr">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br /><br />
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions.
                                <br />
                                As greatly removed calling pleased improve an. <br />
                                Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutBeans;
