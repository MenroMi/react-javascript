import { Component } from "react";

// images
import divider from "../../../assets/icons/Beans-logo-black.svg";

// Styles
import "./section-about-us.scss";

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
                <div className="container">
                    <h3 className="title">About Us</h3>
                    <img className="about-us__divider" src={divider} alt="Divide title and description about company" />
                    <p className="about-us__descr">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        <br /><br />
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutUs;