import { Component } from "react";
import Btn from "./components/btn-component/btn";

function Smile({name, style}) {
    return <p style={style}>If you see this text - smile, {name}! c:</p>
}

class Txt extends Component {
    constructor(props) {
        super(props)
        this.styles = {textShadow: "0 0 7px blue"}
        this.state = {birthday: 1999}
    }

    plusOne = () => {
        console.log(1999);
        this.setState({birthday: this.state.birthday + 1})
    }
 
    render() {
        const users = this.props.data.map((user, i) => {
            const {name} = user;
            return (
                <div key={i}>
                    <Smile key={this.props.key} style={this.styles} name={name}/>
                    <button onClick={this.plusOne}>Click Me!</button>
                    {/* <Btn key={name}/> */}
                    <p>{this.state.birthday}</p>
                </div>
            )
        })
        return (
            <ul>
                {users}
            </ul>
        )
    }

}

export default Txt;