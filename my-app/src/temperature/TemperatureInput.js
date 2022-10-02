import { Component } from "react";
import BoilingVerdict from "../boiling-verdict/BoilingVerdict";


const scaleNames = {
    c: 'по Цельсия',
    f: 'по Фаренгейту'
}

class TemperatureInput extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};  
    }

        
    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {

        const {temperature} = this.state;
        const {scale} = this.props;

        return (
            <label>
                {scaleNames[scale]}:{"\t"}
                <input value={temperature} onChange={this.handleChange}/> 
                <BoilingVerdict celsius={parseFloat(temperature)}/> 
            </label>
        )
    }
}

export default TemperatureInput;