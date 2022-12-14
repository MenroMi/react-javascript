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
                {name: "John S.", salary: 800, increase: false, rise: false, id: 1}, // 0
                {name: "Brett H.", salary: 5000, increase: true, rise: false, id: 2}, // 1
                {name: "Kyle W.", salary: 1500, increase: false, rise: false, id: 3}, // 2
            ],
            term: '',
            filter: 'all'
        }

        this.basicId = 4;

        this.onToggleIncrease = this.onToggleIncrease.bind(this);
        this.onToggleRise = this.onToggleRise.bind(this);
        this.searchEmp = this.searchEmp.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    deleteElem = (id) => {
        this.setState(({employees}) => {
            // const index = employees.findIndex(elem => elem.id === id);
            
            const deleteItem = employees.filter(emplo => emplo.id !== id) // 1

            return {
                employees: deleteItem,
            }


        })
    }

    addNewEmployee(n, s, inc = false, rise = false) {

        if ((n && s) === '' || (n && s) === undefined) {
            return false;
        } else {
            this.setState(({employees}) => {
                let newEmployee = {name: n, salary: s, increase: inc, rise: rise, id: this.basicId++ }
                let arrEmplos = [...employees, newEmployee]
    
                return {
                    employees: arrEmplos
                }
            })
        }
    }

    onToggleIncrease(id) {

        this.setState(({employees}) => {
            const index = employees.findIndex(elem => elem.id === id); // we find element which active now
            const old = employees[index]; // we make our data is "older"
            const newObj = {...old, increase: !old.increase}; // we remake active element on new
            const newArr = [...employees.slice(0, index), newObj, ...employees.slice(index+1)]; // and rerender our old data for new data with method slice

            return {
                employees: newArr
            }

        })
        // this.setState(({increase}) => ({increase: !increase}))
    }

    onToggleRise(id) {
        
        this.setState(() => ({
            employees: this.state.employees.map(emplo => {
                if(emplo.id === id) {
                    return {...emplo, rise: !emplo.rise}
                }
                return emplo;
            })
        }))
    }

    searchEmp(items, term) {

        if(term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onUpdateSalary = (salary, id) => {
        this.setState(({employees}) => ({
            employees: employees.map(emplo => {
                if(emplo.id === id) {
                    return {...emplo, salary: salary}
                }
                return emplo
            })
        }))
    }

    onCheckFilter = (emplos, filter) => {

        switch(filter) {
            case "rise":
                return emplos.filter(emplo => emplo.rise)
            case "moreThen1000":
                return emplos.filter(emplo => emplo.salary > 1000)
            default:
                return emplos
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {        
    
        const {employees, term, filter} = this.state;

        const increased = employees.filter(item => item.increase).length;
        const visibleData = this.onCheckFilter(this.searchEmp(employees, term), filter);

        return (
            <div className="app">
                <AppInfo value={employees.length} increase={increased}/>
    
                <div className="app-search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilter={this.onFilterSelect}/>
                </div>
    
                <EmployeesList data={visibleData} onDelete={this.deleteElem} onToggleIncrease={this.onToggleIncrease} onToggleRise={this.onToggleRise} onUpdateSalary={this.onUpdateSalary}/>
                <EmployeesAddForm addEmplo={this.addNewEmployee}/>
    
            </div>
        )
    }
}

export default App;