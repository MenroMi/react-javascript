// Imports libraries, features... 
import { Component } from 'react';

// Components
import CoffeeHeader from "../coffee-header/coffee-header";
import AboutUs from '../section-about-us/section-about-us';
import BestProducts from '../section-best-products/best-products';
import CoffeeFooter from '../../reusability-components/coffee-footer/coffee-footer';

// Styles
import './main-page.scss';



class MainPage extends Component {


  render() {
    return (
      <div>
        <CoffeeHeader />
        <AboutUs />
        <BestProducts />
        <CoffeeFooter />
      </div>
    )
  }
}

export default MainPage;
