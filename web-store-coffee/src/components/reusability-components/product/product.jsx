import { Component } from "react";

// Styles
import "./product.scss";

class Product extends Component {
    render() {

        const { name, price, icon, country } = this.props;

        return (
            <li className="productItem">
                <img className="avatar" src={icon} alt="Solimo Coffee Beans 2kg" />
                <div className="productItem__wrapper">
                    <div className="productItem__title">{name}</div>
                    <div className="productItem__country">{country}</div>
                    <div className="productItem__price">{price}$</div>
                </div>
                <button className="detail">More</button>
            </li>
        )
    }
}

export default Product;