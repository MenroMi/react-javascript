// Imports libraries, features... 
import { Component } from 'react';

// plugins
import { v4 as uuidv4 } from 'uuid';

// Components
import HeaderCoffeeHouse from '../../reusability-components/header-coffee-house/header-coffee-house';
import About from '../../reusability-components/about/about';
import SearchBarCoffee from '../../reusability-components/coffee-searchbar/coffee-searchbar';
import CoffeeFooter from '../../reusability-components/coffee-footer/coffee-footer';
import ProductsList from '../../reusability-components/products-list/products-list';

// image 
import headerImage from "../../../assets/imgs/our-coffee-page/header-bg.png";
import girlBeans from "../../../assets/imgs/our-coffee-page/gitl-with-beans.png";



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
            filter: "",
        }
    }

    onSearchItem = (products, search) => {
        if (search === '') {
            return products;
        }
        return products.filter(product => product.name.toLowerCase().startsWith(search.toLowerCase()));
    }

    checkFilter = (products, filter) => {
        switch (filter) {
            case "Brazil":
                return products.filter(product => product.country === filter);
            case "Kenya":
                return products.filter(product => product.country === filter);
            case "Columbia":
                return products.filter(product => product.country === filter);
            default:
                return products;
        }
    }

    onSetInputValue = (search) => {
        this.setState({ search });
    }

    onSetFilter = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { search, filter, products } = this.state;
        const visibleProducts = this.checkFilter(this.onSearchItem(products, search), filter);
        const head = "Our coffee";
        const title = "About our beans";
        const descr = <div className="about__descr">
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
        const altText = "Woman with cup of coffee";
        return (
            <div>
                <HeaderCoffeeHouse bgImage={headerImage} headerTitle={head} />
                <About
                    title={title}
                    descr={descr}
                    image={girlBeans}
                    alt={altText}
                />
                <SearchBarCoffee
                    funcSearch={this.onSetInputValue}
                    funcFilter={this.onSetFilter}
                />
                <ProductsList data={visibleProducts} />
                <CoffeeFooter />
            </div>
        )
    }
}

export default CoffeePage;
