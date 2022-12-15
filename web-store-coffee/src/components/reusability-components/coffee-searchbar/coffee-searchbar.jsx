// Imports libraries, features... 
import { Component } from 'react';

// plugins
import { v4 as uuidv4 } from 'uuid';


// Components

// Styles
import './coffee-searchbar.scss';

class SearchBarCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                { name: "Brazil", label: "Brazil", id: uuidv4() },
                { name: "Kenya", label: "Kenya", id: uuidv4() },
                { name: "Columbia", label: "Columbia", id: uuidv4() },
            ],
            search: "",
            filter: ""
        }
    }

    controlledSearch = (e) => {
        let value = e.target.value;
        this.setState({ search: value });
        this.props.funcSearch(value);
    }

    onUpdateFilter = (e) => {
        let filter = e.target.name;
        this.setState({ filter });
        this.props.funcFilter(filter);
    }

    btnsFilter = (btns, funcFilter) => {
        return btns.map(({ name, label, id }) => {
            return (
                <button
                    className='searchbar__btn'
                    name={name}
                    type="button"
                    key={id}
                    onClick={funcFilter}
                >{label}</button>
            )
        })
    }

    render() {

        const { search, filter, buttons } = this.state;
        const btnsList = this.btnsFilter(buttons, this.onUpdateFilter);
        return (
            <div className="container">
                <div className="searchbar">
                    <div className="searchbar__search">
                        <label htmlFor="coffeeName">Looking for: </label>
                        <input
                            id='coffeeName'
                            name='name'
                            value={search}
                            onChange={this.controlledSearch}
                            type="text"
                            placeholder='start typing here...' />
                    </div>
                    <div className="searchbar__filters">
                        <label htmlFor="buttons">Or filter: </label>
                        <div
                            id="buttons" className="searchbar__btns"
                        >
                            {btnsList}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBarCoffee;
