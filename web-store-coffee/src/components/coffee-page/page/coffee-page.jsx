// Imports libraries, features... 
import { Component } from 'react';

// plugins
import { v4 as uuidv4 } from 'uuid';

// Components
import HeaderCoffeeHouse from '../header-coffee-house/header-coffee-house';
import AboutBeans from '../about-beans/about-beans';
import SearchBarCoffee from '../../reusability-components/coffee-searchbar/coffee-searchbar';
import CoffeeFooter from '../../reusability-components/coffee-footer/coffee-footer';
import ProductsList from '../products-list/products-list';


// Styles
import './coffee-page.scss';

class CoffeePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99", id: uuidv4() },
                { name: "BROMISTICO Coffee 1 kg", country: "Kenya", price: "6.99", id: uuidv4() },
                { name: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "6.99", id: uuidv4() },
                { name: "DROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99", id: uuidv4() },
                { name: "SROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99", id: uuidv4() },
                { name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99", id: uuidv4() },
            ],
            search: "",
            filter: ""
        }
    }

    onSearchItem = (products, search) => {
        if (search === '') {
            return products;
        }

        return products.filter(product => product.name.toLowerCase().startsWith(search.toLowerCase()));

    }

    onSetInputValue = (search) => {
        this.setState({ search });
    }

    render() {
        const { search, filter, products } = this.state;
        const visibleProducts = this.onSearchItem(products, search);
        console.log(visibleProducts);
        return (
            <div>
                <HeaderCoffeeHouse />
                <AboutBeans />
                <SearchBarCoffee funcSearch={this.onSetInputValue} />
                <ProductsList data={visibleProducts} />
                <CoffeeFooter />
            </div>
        )
    }
}

export default CoffeePage;
