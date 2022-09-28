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
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    // cancelCourse = () => {
    //     this.setState({
    //         name: '',
    //         salary: ''
    //     })
    // }    

    render() {

        const {name, salary} = this.state;
        const {addEmplo} = this.props;
        return (
            <div className="app-add-form" >
                <h3>Add new employee</h3>
                <form className="add-form d-flex" onSubmit={this.handleSubmit}>
                    <input type="text"
                    className="form-control new-post label"
                    placeholder="What is his name?" name="name" value={name} onChange={this.onValueChange}/>
                    
                    <input type="number" className="form-control new-post-label"
                    placeholder="Salary in USD?" name="salary" value={salary} onChange={this.onValueChange}/>

                    <button type="submit" className="btn btn-outline-light" onClick={() => {
                        addEmplo(name, salary)
                        // this.cancelCourse()
                    }}>Add</button>
                
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