import { Component } from "react";
import Notifications from "../notifications-on-page/notifications";

import "./background-window.css";

class WindowNotification extends Component {
    render() {
        return (
            <div className="window-not">
                <div className="header-not">
                    <p className="name-not">Notifications</p>
                    <p className="mark">Marks all as read</p>
                </div>
                <Notifications/>
            </div>
        )
    }
}

export default WindowNotification;