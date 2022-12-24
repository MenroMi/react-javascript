// basic
import { Component } from "react";

// images
import bannerMan from "../../../assets/imgs/bannerMan.png";
import bannerGirl from "../../../assets/imgs/bannerGirl.png";

// styles
import "./bannerHeader.scss";


class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <img className="banner__image-man" src={bannerMan} alt="Man with headphones seat" />
                <img className="banner__image-girl" src={bannerGirl} alt="Tired girl with blue hear" />
                <div className="banner__title">New manga every day!</div>
                <div className="banner__title">Stay tuned!</div>
            </div>
        )
    }
}

export default Banner;