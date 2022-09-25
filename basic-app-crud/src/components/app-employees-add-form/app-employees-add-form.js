import {Component} from "react";
import "./app-employees-add-form.css";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: ""
        }
    }

    onValueChange = (e) => {
        
        e.target.getAttribute("name") === "name" ? this.setState({name: e.target.value}) : this.setState({salary: +e.target.value});
        console.log(this.state);
    }

    handleSubmit = (e) => {
        console.log(this.state.name);
        console.log(this.state.salary);
        
        e.preventDefault();
    }
    
    render() {

        const {name, salary} = this.state;

        return (
            <div className="app-add-form" onSubmit={this.handleSubmit}>
                <h3>Add new employee</h3>
                <form className="add-form d-flex">
                    <input type="text"
                    className="form-control new-post label"
                    placeholder="What is his name?" name="name" value={name} onChange={this.onValueChange}/>
                    
                    <input type="number" className="form-control new-post-label"
                    placeholder="Salary in USD?" name="salary" value={salary} onChange={this.onValueChange}/>

                    <button type="submit" className="btn btn-outline-light">Add</button>
                
                </form>
            </div>
        )
    }
}


// function EmployeesAddForm() {
//     return (
//         <div className="app-add-form">
//             <h3>Add new employee</h3>
//             <form className="add-form d-flex">
//                 <input type="text"
//                  className="form-control new-post label"
//                  placeholder="What is his name?" />
                
//                  <input type="number" className="form-control new-post-label"
//                  placeholder="Salary in USD?" />

//                 <button type="submit" className="btn btn-outline-light">Add</button>
            
//             </form>
//         </div>
//     )
// }

export default EmployeesAddForm;