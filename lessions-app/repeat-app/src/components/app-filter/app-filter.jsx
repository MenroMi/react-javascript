import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './app-filter.css';

class EmployeeFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            buttons: [
                { name: "", label: "All workers", key: uuidv4() },
                { name: "awards", label: "For advancement", key: uuidv4() },
                { name: "over", label: "Salary over 1000$", key: uuidv4() },
            ]
        }
    }

    updateFilterTerm = (e) => {
        let filter = e.target.name;
        this.setState({ filter });
        this.props.updateFilterTerm(filter);
    }

    buttonsFilters = (filter, data, funcFilter) => {
        return data.map(({ key, label, name }) => {
            const active = filter === name;
            const clazz = active ? "btn-light" : "btn-outline-light"
            return (
                <button
                    type="button"
                    name={name}
                    className={`btn ${clazz}`}
                    key={key}
                    onClick={funcFilter}
                >{label}</button>
            )
        })
    }

    render() {

        const { buttons, filter } = this.state;
        const btnsFilter = this.buttonsFilters(filter, buttons, this.updateFilterTerm);

        return (
            <div className="btn-group">
                {btnsFilter}
            </div>
        )
    }
}

export default EmployeeFilter;