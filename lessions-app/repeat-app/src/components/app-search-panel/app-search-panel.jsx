import { Component } from "react";

import "./app-search-panel.css";


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    onUpdateTerm = (e) => {
        let value = e.target.value;

        this.setState({ term: value });
        this.props.updateSearchTerm(value);
    }

    render() {

        const { term } = this.state;

        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Find an employee..."
                value={term}
                onChange={this.onUpdateTerm}
            />
        )
    }

}

export default SearchPanel;