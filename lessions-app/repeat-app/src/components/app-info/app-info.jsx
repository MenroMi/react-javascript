import "./app-info.css";

const AppInfo = (props) => {

    const { displayTotal, displayAwards } = props;

    return (
        <div className="app-info">
            <h1>Accounting for employees in the company</h1>
            <h2>Total number of employees: {displayTotal()}</h2>
            <h2>The award will be given to: {displayAwards()}</h2>
        </div>
    );

}

export default AppInfo;