import EmployeesListItem from "../app-employees-item/app-employees-item"
import "./app-employees-list.css";

function EmployeesList() {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    )
}

export default EmployeesList;