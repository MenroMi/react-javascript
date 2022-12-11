import { Component } from "react";

import cn from "classnames";

import "./employees-list-item.css";

class EmployeesItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: this.props.salary,
            salaryLength: true
        }
    }

    onChangeSalary = (e) => {
        let value = e.target.value;
        if (value.length < 3) {
            this.setState({ salaryLength: false });
        } else {
            this.setState({ salary: value, salaryLength: true });
            this.props.onUpdateSalary(value);
        }

    }

    render() {
        const { name,
            onDelete,
            onToggleIncrease,
            onToggleLike,
            increase,
            like
        } = this.props;

        const { salary, salaryLength } = this.state;

        const classComponent = cn({
            "list-group-item": true,
            "d-flex": true,
            "justify-content-between": true,
            increase,
            like
        });

        return (
            <li className={classComponent}>
                <span className="list-group-item-label" onClick={onToggleLike}>{name}</span>
                <input
                    type="text"
                    className={`${salaryLength ? 'list-group-item-input' : 'list-group-item-input error'}`}
                    defaultValue={salary + "$"}
                    onChange={this.onChangeSalary}
                />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li >
        )
    }

}

export default EmployeesItem;