// import {Component} from 'react';
import {Component} from "react";
import BoilingVerdict from "../boiling-verdict/BoilingVerdict";
import InputProps from "../temperature/InputProps";

import './App.css';

// const Header = () => {
//   return <h2>Hello World!</h2>;
// }

// class Field extends Component {
//   render() {
//     const holder = 'Enter here';
//     const styles = {boxShadow: "0px 0px 5px blue"};
//     return <input placeholder= {holder} type="text" style={styles}/>
//   };
// }

// function Field() {
//   const holder = 'Enter here';
//   const styles = {
//     boxShadow: "0px 0px 5px blue"
//   };
//   return <input placeholder= {holder} type="text" style={styles}/>
// }

const scaleNames = {
    c: 'Цельсия',
    f: 'Фаренгейта'
}

class Temperature extends Component {
    constructor(props){
        super(props);
        this.state = {
            temperature: ''
        }
        this.checkTemp = this.checkTemp.bind(this)
    }

    checkTemp(e) {
        this.setState({
            temperature: e.target.value
        })
    }

    render() {

        const {temperature} = this.state;
        const {c, f} = scaleNames;

        return (
            <div className="App">
                <fieldset>
                <legend>Введите температуру в градусах :</legend>
                    <InputProps key="1" name={c} value={temperature} changeTemp={this.checkTemp}/>
                    <InputProps key="2" name={f} value={temperature} changeTemp={this.checkTemp}/>
                    <BoilingVerdict celsius={temperature}/>
                </fieldset>
            </div>
        )
    }

}

export default Temperature;

  

