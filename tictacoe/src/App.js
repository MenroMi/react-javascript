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

class Clock extends Component {
    constructor(props) {
        super(props);
        this.styles = {display: "inline", padding: "10px", textShadow: "0 0 7px blue", border: "2px solid blue", borderRadius: "4px", boxShadow: "0 0 20px rgba(0, 0, 255, 0.3)"}
        this.styleDiv = {
            width: "200px",
            margin: "25px auto",
            padding: "10px",
            textShadow: "0 0 7px blue",
            border: "2px solid blue",
            borderRadius: "4px",
            boxShadow: "0 0 20px rgba(0, 0, 255, 0.3)"
        }
        this.btn = {
            height: "50px",
            width: "100px",
            border: "2px solid green",

        }

        this.state = {
            date: new Date(),
            time: 'Day',
            position: ""
        }

        this.checkDayOrNight = this.checkDayOrNight.bind(this);

    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }

    checkDayOrNight = (txt) => {
        console.log(txt);
        if (this.state.time === 'Day') {
            this.setState({
                time: 'Night'
            })
        } else {
            this.setState({
                time: 'Day'
            })
        }
    }

    commitInputChanges = (e) => {
        this.setState({position: e.target.value})
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {

        const {date, time, position} = this.state;

        return (
            <div>
                <div style={this.styleDiv}>{position}</div>
                <h2 style={this.styles}>{date.toLocaleTimeString()}</h2>
                <div style={this.styleDiv}>{time}</div>
                <button style={this.btn} onClick={() => this.checkDayOrNight('some text')}>Check</button>
                <form style={this.styleDiv}>
                    <span>Введите должность:</span>
                    <input  type="text" onChange={this.commitInputChanges}/>
                </form>
            </div>
        )
    }

}


class Txt extends Clock {
    constructor(props) {
        super(props);
        this.stylesTxt = {margin: "30px auto", width: "143px", padding: "10px", textShadow: "0 0 7px red", border: "2px solid red", borderRadius: "4px", boxShadow: "0 0 20px rgba(255, 0, 0, 0.3)"};

    }

    render() {
        return (
            <div>
                <h1 style={this.stylesTxt}>Hello!</h1>
            </div>
        )
    }
}

export {Txt};
export default Clock;