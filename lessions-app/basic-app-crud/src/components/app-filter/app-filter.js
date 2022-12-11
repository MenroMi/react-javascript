import { Component } from "react";
import "./app-filter.css";


class AppFilter extends Component {
    constructor(props) {
        super(props);

        this.buttonData = [
            {name: "all", label: "Все сотрудники"},
            {name: "rise", label: "На повышение"},
            {name: "moreThen1000", label: "З/П больше 1000$"}
        ]
    
    }

    render() {

        return (
            <div className="btn-group">
                {this.buttonData.map(({name, label}) => {
                    const active = this.props.filter === name;
                    const clazz = active ? "btn-light" : "btn-outline-light"

                    return (
                        <button 
                        className={`btn ${clazz}`}
                        type="button"
                        key={name}
                        onClick={() => this.props.onFilter(name)}
                        >
                            {label}
                        </button>
                    )
                })}
            </div>
        )
    }

}


export default AppFilter;