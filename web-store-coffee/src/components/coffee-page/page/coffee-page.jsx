// Imports libraries, features... 
import { Component } from 'react';

// Components
import HeaderCoffeeHouse from '../header-coffee-house/header-coffee-house';
import AboutBeans from '../about-beans/about-beans';
import SearchBarCoffee from '../coffee-searchbar/coffee-searchbar';
import CoffeeFooter from '../../reusability-components/coffee-footer/coffee-footer';

// Styles
import './coffee-page.scss';

class CoffeePage extends Component {


  render() {
    return (
      <div>
        <HeaderCoffeeHouse />
        <AboutBeans />
        <SearchBarCoffee />
        <CoffeeFooter />
      </div>
    )
  }
}

export default CoffeePage;
