// Imports libraries, features... 
import { Component } from 'react';

// images
import beansLogo from "../../../assets/icons/Beans-logo-black.svg";
import picProduct from "../../../assets/imgs/page-product/pic-product.png";

// Styles
import './about-it.scss';

class AboutIt extends Component {


    render() {
        return (
            <section className='about-it'>
                <div className="container">
                    <div className='about-it__wrapper-flex'>
                        <img className="about-it__img" src={picProduct} alt="Woman with cup of coffee" />
                        <div className="about-it__wrapper-txt">
                            <div className="title">About it</div>
                            <img src={beansLogo} alt="Divider between title and description" />
                            <ul className="about-it__descr">
                                <li className="about-it__descr-item"><span>Country:</span> Brasil</li>
                                <li className="about-it__descr-item"><span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li className="about-it__descr-item"><span>Price:</span> 6.99$</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutIt;
