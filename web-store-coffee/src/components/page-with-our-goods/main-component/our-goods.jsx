// Imports libraries, features... 
import { Component } from 'react';

// plugins
import { v4 as uuidv4 } from 'uuid';


// Components
import HeaderCoffeeHouse from '../../reusability-components/header-coffee-house/header-coffee-house';
import About from '../../reusability-components/about/about';
import CoffeeFooter from '../../reusability-components/coffee-footer/coffee-footer';
import ProductsList from '../../reusability-components/products-list/products-list';

// image
import headerImage from "../../../assets/imgs/our-goods/header-coffee-our-goods.png";
import cupOfPicture from "../../../assets/imgs/our-goods/cup-of-coffee.png";

// Styles
import './our-goods.scss';

class OurGoods extends Component {
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
        }
    }

    render() {

        const { products } = this.state;
        const head = "For your pleasure";
        const title = "About our goods";
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
        const altText = "White cup of coffee on the table";

        return (
            <div>
                <HeaderCoffeeHouse bgImage={headerImage} headerTitle={head} />
                <About
                    title={title}
                    descr={descr}
                    image={cupOfPicture}
                    alt={altText}
                />
                <ProductsList data={products} />
                <CoffeeFooter />
            </div>
        )
    }
}

export default OurGoods;
