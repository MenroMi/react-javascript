// Imports libraries, features... 
import { Component } from 'react';

// Components
import NavBar from '../nav-component/nav';
// Styles
import './header-coffee-house.scss';

class HeaderCoffeeHouse extends Component {

    render() {

        const { headerTitle } = this.props;
        const bgImage = {
            backgroundImage: 'url(' + this.props.bgImage + ')',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        };

        return (
            <header className="header" style={bgImage}>
                <div className="container">
                    <NavBar />
                    <h1 className="header__title">{headerTitle}</h1>
                </div>
            </header>
        )
    }
}

export default HeaderCoffeeHouse;
