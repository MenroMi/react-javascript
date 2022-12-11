import { Component } from "react";
import styled from "styled-components";

import "./searchPanel.css";

const SearchData = styled.div`
    margin: 20px auto;
    box-shadow: 5px 5px 10px rgba(0,0,0.1);
    width: 400px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    label {
        margin-right: 5px;
    }
    input {
        outline: 2px solid papayawhip;
    }
`;

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
        this.props.onUpdateTerm(e.target.value);
    }

    render() {

        const { term } = this.state;
        // const {onUpdateTerm} = this.props;
        // const 

        return (
            <SearchData className="search-bar">
                <label htmlFor="search" className="search-bar__name">Fruits: </label>
                <input
                    id="search"
                    type="text"
                    className="search-bar__input"
                    value={term}
                    placeholder="type a name..."
                    onChange={this.onInputChange}
                ></input>
            </SearchData>
        )
    }
}

export default SearchPanel;