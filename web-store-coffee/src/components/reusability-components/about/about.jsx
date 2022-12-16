// Imports libraries, features... 
import { Component } from 'react';

// Components
import beansLogo from "../../../assets/icons/Beans-logo-black.svg";
// Styles
import './about.scss';

class About extends Component {


    render() {

        const { title, descr, image, alt } = this.props;

        return (
            <section className='about'>
                <div className="container">
                    <div className='about__wrapper-flex'>
                        <img className="about__img" src={image} alt={alt} />
                        <div className="about__wrapper-txt">
                            <div className="title">{title}</div>
                            <img src={beansLogo} alt="Divider between title and description" />
                            {descr}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;
