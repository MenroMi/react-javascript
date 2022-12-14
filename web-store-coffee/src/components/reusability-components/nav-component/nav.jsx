import { Component } from "react";

// images
import logo from "../../../assets/icons/Logo.svg";

// styles
import "./nav.scss";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    activeBtn = (active) => {
        this.setState({ active: !active });
    }

    render() {

        const { active } = this.state;
        const backgroundColor = active ? "bgc bgc_active" : "bgc";
        const toggleBtn = active ? "menu-burger menu-burger_active" : "menu-burger";
        const menu = active ? "nav-menu nav-menu_active" : "nav-menu";

        return (
            <>
                <div className={backgroundColor}>
                    <div
                        className={toggleBtn}
                        aria-label="Menu"
                        onClick={() => this.activeBtn(active)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <nav className={menu}>
                    <a tabIndex="0" className="nav-menu__logo" href="#top" >
                        <img src={logo} alt="Company Logo - 'Coffee House'"></img>
                    </a>
                    <a className="nav-menu__link" href="#top">Our coffee</a>
                    <a className="nav-menu__link" href="#top">For your pleasure</a>
                    <div className="nav-menu__recommender">Our Recommender: </div>
                </nav>
            </>
        )
    }
}

export default NavBar;