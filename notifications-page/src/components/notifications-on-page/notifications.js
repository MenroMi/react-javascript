import { Component } from "react";

import angelaGray from "../images/avatar-angela-gray.webp";

import "./notifications.css";

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.nickName = {
            color: "rgba(0, 0, 0)",
            fontWeight: "700"
            
        }

        this.textNot = {
            position: "relative",
            bottom: "10px",
            // left: "700px",
            // top: "150px",
            color: "rgba(71, 71, 71, 0.8)",
            fontSize: "17px"
        }

        this.time = {
            color: "rgba(113, 114, 115, 0.8)",
            position: "relative",
            bottom: "20px",
            right: "235px",
            fontWeight: "500"
        }
        this.action = {
            color: "rgba(0, 0, 0)",
            fontWeight: "600"
        }

    }
    
    
    render() {
                
        return (
            <>
            <div className="not">
                <img src={angelaGray} alt="angela" className="img-avatar"></img>
                <p style={this.textNot}><span style={this.nickName}>Angela Gray</span> reacted to your recent post <span style={this.action}>My first tournament today!</span></p>
                <p style={this.time}>1m ago</p>
            </div>
            </>
        )
    }
}

export default Notifications;