import {Component} from "react";
import "./app-employees-item.css";

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rise: '',
            increase: this.props.increase,
            like: false,
        }
    }

    acceptIncrease = () => {
        this.setState(({increase}) => ({increase: !increase}))
    }

    addStarIncreaseEmplo = () => {
        this.setState(({like}) => ({like: !like}))
    }
    
    render() {

        const {name, salary, onDelete} = this.props;
        const {increase, like} = this.state;

        return (
            <li className={`list-group-item d-flex justify-content-between${increase ? " increase" : ''}${like ? " like" : ''}`
            }>
                <span className="list-group-item-label" onClick={this.addStarIncreaseEmplo}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"} /> 
                {/* //field with salary our employees */}
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-cookie btn-sm" onClick={this.acceptIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button> 
                    {/* button which responsible for rise */}
                
                <button type='button'className="btn-trash btn-sm" onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                    {/* button which responsible for delete employees from list */}
                </button>
                <i className="fas fa-star"></i> 
                {/* icon which is displayed when our employee will rise */}
                </div>
                {/* <div>{this.props}</div> */}
            </li>
        )
    }
}

export default EmployeesListItem;