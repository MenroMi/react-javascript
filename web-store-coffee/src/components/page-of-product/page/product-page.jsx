// Imports libraries, features... 
import { Component } from 'react';

// plugins

// Components
import HeaderCoffeeHouse from '../../reusability-components/header-coffee-house/header-coffee-house';
import AboutIt from '../about-it/about-it';
import CoffeeFooter from '../../reusability-components/coffee-footer/coffee-footer';

// Styles
import './product-page.scss';

class ProductPage extends Component {
    render() {
        return (
            <div>
                <HeaderCoffeeHouse />
                <AboutIt />
                <CoffeeFooter />
            </div>
        )
    }
}

export default ProductPage;
