import "./app-info.css";


function AppInfo({value, increase}) {


    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании EMPLO</h1>
            <h2>Общее кол-во сотрудников: {value}</h2>
            <h2>Премию получат: {increase}</h2>
        </div>
    )
}

export default AppInfo; 

