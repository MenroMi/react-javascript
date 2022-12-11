import "./employees-list.css";
import EmployeesItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleLike, onUpdateSalary }) => {


    const components = data.map(({ id, ...item }) => {
        return <EmployeesItem
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleLike={() => onToggleLike(id)}
            onUpdateSalary={(value) => onUpdateSalary(value, id)}
            {...item}
            key={id} />
    });

    return (
        <ul className="app-list list-group" >
            {components}
        </ul>
    )
}


export default EmployeesList;