import { Component } from "react";

// images
import logo from "../../assets/icons/Logo-black.svg"
import divider from "../../assets/icons/Beans-logo-black.svg";

// Styles
import "./coffee-footer.scss";

class CoffeeFooter extends Component {
    render() {
        return (
            <footer className="footer">
                <nav className="footer__menu">
                    <a tabIndex="0" className="footer__menu-logo" href="#top" >
                        <img src={logo} alt="Company Logo - 'Coffee House'"></img>
                    </a>
                    <a className="footer__menu-link" href="#top">Our coffee</a>
                    <a className="footer__menu-link" href="#top">For your pleasure</a>
                </nav>
                <img className="footer__divider" src={divider} alt="Divide bottom navigation" />

            </footer>
        )
    }
}

export default CoffeeFooter;