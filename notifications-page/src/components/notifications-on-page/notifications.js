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
            <ul className='list-of-notifications'>
                {data.map(contact => {
                    const {name, avatar, descr} = contact;
                    return <Notification name={name} avatar={avatar} descr={descr} key={name}/>
                })}
            </ul>
        )
    }
}


export default Notifications;