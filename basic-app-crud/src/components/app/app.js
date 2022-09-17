import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../app-search-panel/app-search-panel";
import EmployeesList from "../app-emloyees-list/app-employees-list";
import EmployeesAddForm from "../app-employees-add-form/app-employees-add-form";
import "./app.css";

function App() {
    return (
        <div className="app">
            <AppInfo/>

            <div className="app-search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList/>
            <EmployeesAddForm/>

        </div>
    )
}

export default App;