// Imports libraries, features... 
import { Component } from 'react';

// plugins


// Components

// Styles
import './coffee-searchbar.scss';

class SearchBarCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            filter: ""
        }
    }

    controlledSearch = (e) => {
        let value = e.target.value;
        this.setState({ search: value });
        this.props.funcSearch(value);
    }

    render() {

        const { search, filter } = this.state;

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
                            <button className='searchbar__btn'>Brazil</button>
                            <button className='searchbar__btn'>Kenya</button>
                            <button className='searchbar__btn'>Columbia</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBarCoffee;
