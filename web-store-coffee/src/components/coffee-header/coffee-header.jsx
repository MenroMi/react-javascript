import { Component } from "react";

// Icons
import logo from "../../assets/icons/Logo.svg";
import divider from "../../assets/icons/Beans-logo.svg";

// Styles
import "./coffee-header.scss";

class CoffeeHeader extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <nav className="header__menu">
                        <a tabIndex="0" className="header__menu-logo" href="#top" >
                            <img src={logo} alt="Company Logo - 'Coffee House'"></img>
                        </a>
                        <a className="header__menu-link" href="#top">Our coffee</a>
                        <a className="header__menu-link" href="#top">For your pleasure</a>
                    </nav>
                    <div className="header__wrapper">
                        <h1 className="header__title">Everything You Love About Coffee</h1>
                        <img className="header__divider" src={divider} alt="Divider between title and subtitle" />
                        <h2 className="header__subtitle">We makes every day full of energy and taste</h2>
                        <h2 className="header__subtitle">Want to try our beans?</h2>
                        <button className="header__btn-more" type="submit">
                            More
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default CoffeeHeader;