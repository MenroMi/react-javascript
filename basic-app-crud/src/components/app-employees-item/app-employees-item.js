import "./app-employees-item.css";

function EmployeesListItem({name, salary, increase, rise, onDelete, onToggleRise, onToggleIncrease, onUpdateSalary}) {

    return (
        <li className={`list-group-item d-flex justify-content-between${increase ? " increase" : ''}${rise ? " like" : ''}`
        }>
            <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
            <input type="text" className="list-group-item-input" onChange={onUpdateSalary} defaultValue={salary + "$"} /> 
            {/* //field with salary our employees */}
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-cookie btn-sm" onClick={onToggleIncrease}>
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

export default EmployeesListItem;