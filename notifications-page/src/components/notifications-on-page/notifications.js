import { Component } from "react";
import Notification from "../template-notification/template-notification";

import "./notifications.css";

class Notifications extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    

    render() {

        const {data} = this.props;

        return (
            <div className='list-of-notifications'>
                {data.map(contact => {
                    const {name, avatar, descr, time} = contact;
                    return <Notification name={name} avatar={avatar} descr={descr} time={time} key={name}/>
                })}
            </div>
        )
    }
}


export default Notifications;