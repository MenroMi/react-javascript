import { Component } from "react";

import "./app-search-panel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch(term)
    }    
    
    render() {

        const {term} = this.state;

        return (
            <input 
            type="text" 
            className="form-control search-input"
            placeholder="Найти сотрудника..."
            value={term}
            onChange={this.onUpdateSearch}/>
        )
    }
}


export default SearchPanel;