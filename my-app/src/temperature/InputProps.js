import { Component } from "react";


class InputProps extends Component {

    render() {

        const {name, temperature, changeTemp} = this.props;

        return (
            <div style={{margin: "5px"}}>
                <label>
                    {name}:{"\t"}
                    <input type="text" value={temperature} onChange={changeTemp} />
                </label>
            </div>
        )
    }
}

export default InputProps;