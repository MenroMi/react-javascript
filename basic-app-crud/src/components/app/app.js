import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../app-search-panel/app-search-panel";
import EmployeesList from "../app-emloyees-list/app-employees-list";
import EmployeesAddForm from "../app-employees-add-form/app-employees-add-form";
import "./app.css";

function App() {

    const data = [
        {name: "John S.", salary: 800, increase: false, id: 1},
        {name: "Brett H.", salary: 5000, increase: false, id: 2},
        {name: "Kyle W.", salary: 1500, increase: false, id: 3},
    ];
    

    return (
        <div className="app">
            <AppInfo/>

            <div className="app-search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>

        </div>
    )
}

export default App;