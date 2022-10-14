import { Component } from "react";
import Notifications from "../notifications-on-page/notifications";

import angelaGray from "../images/avatar-angela-gray.webp";
import annaKim from "../images/avatar-anna-kim.webp";
import jacobT from "../images/avatar-jacob-thompson.webp";
import kimberlyS from "../images/avatar-kimberly-smith.webp";
import markW from "../images/avatar-mark-webber.webp";
import nathanP from "../images/avatar-nathan-peterson.webp";
import rizkyH from "../images/avatar-rizky-hasanuddin.webp"

import "./background-window.css";

class WindowNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {name: "Mark Webber", avatar: markW, descr: "reacted to your recent post My first tournament today!"},
                {name: "Angela Gray", avatar: angelaGray, descr: "followed you"},
                {name: "Jacob Thompson", avatar: jacobT, descr: "has joined your group..."},
                {name: "Rizky Hasanuddin", avatar: rizkyH, descr: "sent you a private message"},
                {name: "Kimberly Smith", avatar: kimberlyS, descr: "commented on your picture"},
                {name: "Nathan Peterson", avatar: nathanP, descr: " reacted to your recent post 5 end-game strategies to increase your win rate"},
                {name: "Anna Kim", avatar: annaKim, descr: "left the group..."},
            ]
        }
    }

    render() {

        const {contacts} = this.state;

        return (
            <div className="window-not">
                <div className="header-not">
                    <p className="name-not">Notifications</p>
                    <p className="mark">Marks all as read</p>
                </div>
                <Notifications data={contacts}/>
            </div>
        )
    }
}

export default WindowNotification;