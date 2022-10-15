import { Component } from "react";

import "./template-notification.css";

const phrases = ["My first tournament today!", "Chess group", "5 end-game strategies to increase your win rate"];

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.nickName = {
            color: "rgba(0, 0, 0)",
            fontWeight: "700"
            
        }

        this.textNot = {
            // position: "relative",

            // left: "100px",
            // top: "150px",
            color: "rgba(71, 71, 71, 0.8)",
            fontSize: "17px",
            width: "630px",
            
        }

        this.time = {
            color: "rgba(113, 114, 115, 0.8)",
            // position: "relative",
            // bottom: "85px",
            // left: "100px",
            fontWeight: "500",
            width: "630px",
            
        }
        this.action = {
            color: "rgba(0, 0, 0)",
            fontWeight: "600"
        }

        this.info = {

        }

    }
    
    
    render() {

        const {name, avatar, descr, time} = this.props
                
        return (
            <div className="notification">
                <img src={avatar} alt={name} className="img-avatar"></img>
                <div className="text-style">
                    <p style={this.textNot}><span style={this.nickName}>{name}</span> {descr} </p>
                    <p style={this.time}>{time}</p>
                </div>
            </div>
        )
    }
}

export default Notification;