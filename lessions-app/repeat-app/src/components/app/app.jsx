import AppInfo from "../app-info/app-info";
import SearchPanel from "../app-search-panel/app-search-panel";
import EmployeeFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../app-employees-add-form/app-employees-add-form";

// Plugins

import { v4 as uuidv4 } from 'uuid';

// css-styles

import "./app.css";
import { Component } from "react";

// database


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John Klarc", salary: 5000, increase: true, like: false, id: uuidv4() },
                { name: "John Smith", salary: 900, increase: true, like: false, id: uuidv4() },
                { name: "Kiryl Shchasny", salary: 1200, increase: false, like: true, id: uuidv4() },
                { name: "Brett Pitt", salary: 3000, increase: false, like: false, id: uuidv4() },
            ],
            term: "",
            filter: ""
        }

    }

    onUpdateSalary = (value, id) => {
        this.setState(({ data }) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return { ...item, salary: value }
                    }
                    return item;
                })
            }
        })
    }

    onDeleteItem = (uniq) => {
        this.setState(({ data }) => {
            const ind = data.findIndex(({ id }) => id === uniq);
            const before = data.slice(0, ind);
            const after = data.slice(ind + 1);

            const arr = [...before, ...after];

            return {
                data: arr
            }
        })
    }

    onAddNewEmplo = (e, name, salary) => {
        e.preventDefault();
        this.setState(({ data }) => {
            return {
                data: [...data, { name: name, salary: salary, increase: false, like: false, id: uuidv4() }]
            }
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({ data }) => {

            // const ind = data.findIndex((elem) => elem.id === id);
            // const currence = {...data[ind], increase: !data[ind].increase };

            // const before = data.slice(0, ind);
            // const after = data.slice(ind + 1);

            // return {
            //     data: [...before, currence, ...after]
            // }

            return {
                data: data.map((elem) => {
                    if (elem.id === id) {
                        return { ...elem, increase: !elem.increase };
                    }
                    return { ...elem };
                })
            }
        })
    }

    onToggleLike = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.map(el => {
                    if (el.id === id) {
                        return { ...el, like: !el.like }
                    }
                    return el;
                })
            }
        })
    }

    displayTotal = () => {
        return this.state.data.length;
    }

    displayAwards = () => {
        return this.state.data.filter(el => el.increase).length;
    }

    onSearchEmplo = (items, term) => {
        if (term.length === 0) { return items }
        return items.filter(item => item.name.indexOf(term) > -1);
    }

    updateSearchTerm = (term) => {
        this.setState({ term });
    }

    updateFilterTerm = (filter) => {
        this.setState({ filter });
    }

    onEmploFilters = (filter, data) => {

        switch (filter) {
            case "awards":
                return data.filter(item => item.increase);
            case "over":
                return data.filter(item => item.salary > 1000);
            default:
                return data.filter(item => item);
        }

    }

    render() {

        const { data, term, filter } = this.state;
        const visibleData = this.onEmploFilters(filter, this.onSearchEmplo(data, term));

        return (
            <main className="app">

                <section>
                    <AppInfo displayTotal={this.displayTotal} displayAwards={this.displayAwards} />
                </section>

                <section className="app-search-panel">
                    <SearchPanel updateSearchTerm={this.updateSearchTerm} />
                    <EmployeeFilter updateFilterTerm={this.updateFilterTerm} />
                </section>

                <section className="employees-list">
                    <EmployeesList data={visibleData} onDelete={this.onDeleteItem} onToggleIncrease={this.onToggleIncrease} onToggleLike={this.onToggleLike} onUpdateSalary={this.onUpdateSalary} />
                </section>

                <section>
                    <EmployeesAddForm onSubmitItem={this.onAddNewEmplo} />
                </section>

            </main>
        )
    }

};


export default App;