import { Component } from "react";

// Components
import NavBar from "../../reusability-components/nav-component/nav";
// Icons
import divider from "../../../assets/icons/Beans-logo.svg";

// Styles
import "./coffee-header.scss";

class CoffeeHeader extends Component {

    render() {
        return (
            <header className="header">
                <div className="container">
                    <NavBar />
                    <div className="header__wrapper">
                        <h1 className="header__title">Everything You Love About Coffee</h1>
                        <img className="header__divider" src={divider} alt="Divider between title and subtitle" />
                        <h2 className="header__subtitle">We makes every day full of energy and taste</h2>
                        <h2 className="header__subtitle">Want to try our beans?</h2>
                        <button className="header__btn-more" type="button">
                            More
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default CoffeeHeader;