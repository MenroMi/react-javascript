// Imports libraries, features... 
import { Component } from 'react';

// Components
import NavBar from '../nav-component/nav';
// Styles
import './header-coffee-house.scss';

class HeaderCoffeeHouse extends Component {


    render() {
        return (
            <header className="header">
                <div className="container">
                    <NavBar />
                    <h1 className="header__title">Our Coffee</h1>
                </div>
            </header>
        )
    }
}

export default HeaderCoffeeHouse;
