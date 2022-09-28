import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../app-search-panel/app-search-panel";
import EmployeesList from "../app-emloyees-list/app-employees-list";
import EmployeesAddForm from "../app-employees-add-form/app-employees-add-form";
import "./app.css";

class App extends Component {
    

    
    constructor(props) {
        super(props);
        this.addNewEmployee = this.addNewEmployee.bind(this);
        this.state = {
            employees: [
                {name: "John S.", salary: 800, increase: false, id: 1}, // 0
                {name: "Brett H.", salary: 5000, increase: false, id: 2}, // 1
                {name: "Kyle W.", salary: 1500, increase: false, id: 3}, // 2
            ]
        }
    }

    deleteElem = (id) => {
        this.setState(({employees}) => {
            // const index = employees.findIndex(elem => elem.id === id);
            
            const deleteItem = employees.filter(emplo => emplo.id !== id) // 1

            return {
                employees: deleteItem
            }


        })
    }

    addNewEmployee(n, s, id, inc = false) {

        if ((n && s) === '' || (n && s) === undefined) {
            return
        } else {
            this.setState(({employees}) => {
                let newEmployee = [{name: n, salary: s, increase: inc, id: id }]
                let arrEmplos = [...employees, ...newEmployee]
    
                return {
                    employees: arrEmplos
                }
    
            })
        
        }
        
        

    }

    render() {        
    
        const {employees} = this.state;

        return (
            <div className="app">
                <AppInfo/>
    
                <div className="app-search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList data={employees} onDelete={this.deleteElem}/>
                <EmployeesAddForm addEmplo={this.addNewEmployee}/>
    
            </div>
        )
    }
}

export default App;