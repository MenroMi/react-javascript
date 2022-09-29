import { Component } from "react";  

import "./App.css"

class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: ''
        }
    
        this.changeColor = this.changeColor.bind(this)
        this.alertColor = this.alertColor.bind(this)
    
    }

    
    changeColor(e) {

        this.setState({
            color: e.target.value
        })
    
    }

    alertColor(e) {

        if (this.state.color === '') {
            e.preventDefault();
            return;
        } else {
            alert(`Выбранный тобою цвет: ${this.state.color}`)
            this.setState({
                color: ''
            })
            e.preventDefault();
        }
        
    }
    
    
    render() {

        const {color} = this.state;


        return (

            <div className="App">
                <form>
                    <label>
                        Цвет: 
                        <input type="text" value={color} onChange={this.changeColor} />
                        <button type='submit' onClick={this.alertColor}>Submit</button>
                    </label>
                </form>  
            </div>
            
        )
    }

}

export default Forms;