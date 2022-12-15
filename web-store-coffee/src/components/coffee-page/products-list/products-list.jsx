// Imports libraries, features... 
import { Component } from 'react';

// Components
import Product from "../../reusability-components/product/product";

// images
import avatarAromistico from "../../../assets/icons/product-icons/aromistico-coffee-1kg.png";

// Styles
import './products-list.scss';

class ProductsList extends Component {

    iterationListItems = (data) => {
        return data.map(({ id, ...items }) => {
            return <Product
                icon={avatarAromistico}
                {...items}
                key={id}
            />
        })
    }

    render() {
        const { data } = this.props;
        const getItems = this.iterationListItems(data);
        return (
            <div className="container">
                <ul className='product-list'>
                    {getItems}
                </ul>
            </div>
        )
    }
}

export default ProductsList;
