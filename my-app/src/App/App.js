// import {Component} from 'react';
import {Component} from "react";
import BoilingVerdict from "../boiling-verdict/BoilingVerdict";


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

// const scaleNames = {
//     c: 'по Цельсия',
//     f: 'по Фаренгейту'
// }

class Temperature extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature: ''};  }
  
    handleChange(e) {
      this.setState({temperature: e.target.value});  }
  
    render() {
      const temperature = this.state.temperature;    
      return (
        <fieldset>
          <legend>Введите температуру в градусах Цельсия:</legend>
          <input value={temperature} onChange={this.handleChange}/>        
          <BoilingVerdict celsius={parseFloat(temperature)}/>      
          </fieldset>
      );
    }
  }

export default Temperature;

  

