import EmployeesListItem from "../app-employees-item/app-employees-item"
import "./app-employees-list.css";

function EmployeesList({data}) {

    const elements = data.map((item) => {

        return <EmployeesListItem key={item.name} {...item} />

    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;