// Imports libraries, features... 
import { Component } from 'react';

// Components
import CoffeeHeader from "../coffee-header/coffee-header";
import AboutUs from '../section-about-us/section-about-us';
import BestProducts from '../section-best-products/best-products';
import CoffeeFooter from '../coffee-footer/coffee-footer';

// Styles
import './app.scss';



class App extends Component {


  render() {
    return (
      <div className='app'>
        <CoffeeHeader />
        <AboutUs />
        <BestProducts />
        <CoffeeFooter />
      </div>
    )
  }
}

export default App;
