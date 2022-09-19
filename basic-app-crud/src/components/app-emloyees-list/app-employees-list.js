import EmployeesListItem from "../app-employees-item/app-employees-item"
import "./app-employees-list.css";

function EmployeesList({data}) {

    const elements = data.map((item) => {

        const {id, ...itemProps} = item;

        return <EmployeesListItem key={id} {...itemProps} />

    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;