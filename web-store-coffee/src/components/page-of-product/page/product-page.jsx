// Imports libraries, features... 
import { Component } from 'react';

// plugins

// Components
import HeaderCoffeeHouse from '../../reusability-components/header-coffee-house/header-coffee-house';
import About from '../../reusability-components/about/about';
import CoffeeFooter from '../../reusability-components/coffee-footer/coffee-footer';

// image 
import headerImage from "../../../assets/imgs/our-coffee-page/header-bg.png";
import picProduct from "../../../assets/imgs/page-product/pic-product.png";


// Styles
import './product-page.scss';

class ProductPage extends Component {
    render() {

        const head = "Our coffee";
        const title = "About it";
        const descr = <ul className="about-it__descr">
            <li className="about-it__descr-item"><span>Country:</span> Brasil</li>
            <li className="about-it__descr-item"><span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li className="about-it__descr-item"><span>Price:</span> 6.99$</li>
        </ul>
        const altText = "Picture with coffee package";


        return (
            <div>
                <HeaderCoffeeHouse bgImage={headerImage} headerTitle={head} />
                <About
                    title={title}
                    descr={descr}
                    image={picProduct}
                    alt={altText}
                />
                <CoffeeFooter />
            </div>
        )
    }
}

export default ProductPage;
