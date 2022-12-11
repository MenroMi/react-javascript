import { Component } from "react";

// Styles
import "./product.scss";

class Product extends Component {
    render() {

        const { name, price, icon } = this.props;

        return (
            <div className="productItem">
                <img className="avatar" src={icon} alt="Solimo Coffee Beans 2kg" />
                <div className="productItem__wrapper">
                    <div className="productItem__title">{name}</div>
                    <div className="productItem__price">{price}$</div>
                </div>
            </div>
        )
    }
}

export default Product;