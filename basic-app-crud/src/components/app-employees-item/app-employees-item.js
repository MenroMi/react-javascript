import "./app-employees-item.css";

function EmployeesListItem({name, salary, increase}) {

    let classIncrease = increase ? ' increase' : '';

    
    return (
        <li className={"list-group-item d-flex justify-content-between" + classIncrease
        }>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"} /> 
            {/* //field with salary our employees */}
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button> 
                {/* button which responsible for rise */}
            
            <button type='button'className="btn-trash btn-sm">
                <i className="fas fa-trash"></i>
                {/* button which responsible for delete employees from list */}
            </button>
            <i className="fas fa-star"></i> 
            {/* icon which is displayed when our employee will rise */}
            </div>
        </li>
    )
}

export default EmployeesListItem;