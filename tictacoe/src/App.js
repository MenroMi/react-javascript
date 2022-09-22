import { Component } from "react";

// function Smile({name, style}) {
//     return <p style={style}>If you see this text - smile, {name}! c:</p>
// }

// class Txt extends Component {
//     constructor(props) {
//         super(props)
//         this.styles = {textShadow: "0 0 7px blue"}
//         this.state = {birthday: 1999}
//     }

//     plusOne = () => {
//         console.log(1999);
//         this.setState({birthday: this.state.birthday + 1})
//     }
 
//     render() {
//         const users = this.props.data.map((user, i) => {
//             const {name} = user;
//             return (
//                 <div key={i}>
//                     <Smile key={this.props.key} style={this.styles} name={name}/>
//                     <button onClick={this.plusOne}>Click Me!</button>
//                     {/* <Btn key={name}/> */}
//                     <p>{this.state.birthday}</p>
//                 </div>
//             )
//         })
//         return (
//             <ul>
//                 {users}
//             </ul>
//         )
//     }

// }

// export default Txt;

// ================================

class Txt extends Component {
    constructor(props) {
        super(props);
        this.styles = {margin: "30px auto", width: "143px", padding: "10px", textShadow: "0 0 7px red", border: "2px solid red", borderRadius: "4px", boxShadow: "0 0 20px rgba(255, 0, 0, 0.3)"}
    }

    render() {
        return (
            <h1 style={this.styles}>Hello!</h1>
        )
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.styles = {display: "inline", padding: "10px", textShadow: "0 0 7px blue", border: "2px solid blue", borderRadius: "4px", boxShadow: "0 0 20px rgba(0, 0, 255, 0.3)"}
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <h2 style={this.styles}>{this.state.date.toLocaleTimeString()}</h2>
        )
    }

}

export {Txt};
export default Clock;