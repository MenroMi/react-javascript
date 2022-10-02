// import {Component} from 'react';
import {Component} from "react";
// import BoilingVerdict from "../boiling-verdict/BoilingVerdict";
import TemperatureInput from "../temperature/TemperatureInput";


import './App.css';


function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {

  const onFloat = parseFloat(temperature);
  if(Number.isNaN(onFloat)) {
    return ''
  }

  const onTemp = convert(onFloat);
  const rounded = Math.round(onTemp * 1000) / 1000;
  return rounded.toString();

}

class Temperature extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }


    render() {

      return (
        <fieldset>
          <legend>Введите температуру в градусах:</legend>
          <TemperatureInput scale='c'/>
          <TemperatureInput scale='f'/>    
          </fieldset>
      );
    }
  }

export default Temperature;

  

