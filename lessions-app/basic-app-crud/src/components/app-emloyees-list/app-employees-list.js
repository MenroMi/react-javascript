import { Component } from "react";
import EmployeesListItem from "../app-employees-item/app-employees-item"
import "./app-employees-list.css";


class EmployeesList extends Component {

    render() {
        const {data, onDelete, onToggleRise, onToggleIncrease, onUpdateSalary} = this.props;
        return (
            <ul className="app-list list-group">
                {data.map(item => {
                    const {id, ...itemProps} = item;
                    return <EmployeesListItem key={id} {...itemProps} onDelete={() => onDelete(id)}
                    onToggleIncrease={() => onToggleIncrease(id)}
                    onToggleRise={() => onToggleRise(id)}
                    onUpdateSalary={(e) => onUpdateSalary(e.target.value, id)}/>
                })}
            </ul>
        )
    }
}



// function EmployeesList({data}) {


//     const elements = data.map((item) => {

//         const {id, ...itemProps} = item;

//         return <EmployeesListItem key={id} {...itemProps} />

//     })

//     return (
//         <ul className="app-list list-group">
//             {elements}
//         </ul>
//     )
// }

export default EmployeesList;