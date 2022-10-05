import { Component } from "react";
import "./app-filter.css";


class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propFilter: [
                {btnProp: false, id: 1},
                {btnProp: false, id: 2},
                {btnProp: false, id: 3}
            ]
        }

        this.onChangePropFilter = this.onChangePropFilter.bind(this);
    }
    

    resetSettings = () => {
        this.setState(({propFilter}) => ({
                propFilter: propFilter.map(btnSet => {
                    return {...btnSet, btnProp: false}
                })
        }))
    }

    async onChangePropFilter(e, callback) {
        await callback()

        const numBtn = e.target.getAttribute("data-num");
        const property = this.state.propFilter;
        // const old = [...this.state.propFilter];

        this.setState(({propFilter}) => {
            const index = property.findIndex(prop => prop.id === +numBtn)
            const older = property[index];
            const newElem = {...older, btnProp: !older.btnProp};
            const newArr = [...propFilter.slice(0, index), newElem, ...propFilter.slice(index+1)];

            // console.log(newElem);

            this.props.onCheckFilter(newArr);

            return {
                propFilter: newArr
            }
        })
    
    } 

    render() {


        return (
            <div className="btn-group">
                <button 
                className="btn btn-light"
                type="button"
                data-num="1" 
                onClick={(e) => this.onChangePropFilter(e, this.resetSettings)}>Все сотрудники</button>
                <button 
                className="btn btn-outline-light"
                type="button"
                data-num="2" 
                onClick={(e) => this.onChangePropFilter(e, this.resetSettings)}>На повышение</button>
                <button 
                className="btn btn-outline-light"
                type="button"
                data-num="3" 
                onClick={(e) => this.onChangePropFilter(e, this.resetSettings)}>З/П больше 1000$</button>
            </div>
        )
    }
}

export default AppFilter;