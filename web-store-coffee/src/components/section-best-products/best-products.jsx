import { Component } from "react";
import Product from "../product/product";

// images
import avatarSolimo from "../../assets/icons/product-icons/solimo-coffee-2kg.png";
import avatarPresto from "../../assets/icons/product-icons/presto-coffee-1kg.png";
import avatarAromistico from "../../assets/icons/product-icons/aromistico-coffee-1kg.png";

// Styles
import "./best-products.scss";

// libraries

import { v4 as uuidv4 } from 'uuid';


class BestProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Solimo Coffee Beans - 2kg", price: "10.73", icon: `${avatarSolimo}`, id: uuidv4() },
                { name: "Presto Coffee Beans - 1kg", price: "15.99", icon: `${avatarPresto}`, id: uuidv4() },
                { name: "AROMISTICO Coffee - 1kg", price: "6.99", icon: `${avatarAromistico}`, id: uuidv4() },
            ]
        }
    }

    listOfProducts = (data) => {
        return data.map(({ id, ...item }) => {
            return <Product
                {...item}
                key={id}
            />

        })
    }

    render() {
        const { data } = this.state;
        const componentOfProduct = this.listOfProducts(data);
        return (
            <div className="products">
                <div className="container">
                    <h3 className="title">Our best</h3>
                    <ul className="products__list">
                        {componentOfProduct}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BestProducts;