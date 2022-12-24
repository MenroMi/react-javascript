// basics
import { Component } from 'react';
import Select from "react-select";

// styles
import './searchManga.scss';


class SearchPanelManga extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            valueCategory: '',
            category: [
                { value: "all", label: "all" },
                { value: "drama", label: "Drama" },
                { value: "romantic", label: "Romantic" },
                { value: "fantasy", label: "Fantasy" },
                { value: "adventure", label: "Adventure" },
                { value: "everyday", label: 'Everyday' },
                { value: "comedy", label: 'Comedy' },
            ],
        }
    }

    changeSelectValue = (e) => {
        this.setState({ valueCategory: [...e] });
        setTimeout(() => {
            console.log(this.state.valueCategory);

        }, 2000);
    }

    render() {
        const { search, category, valueCategory } = this.state;
        return (
            <div className="searchManga">

                <Select
                    onChange={this.changeSelectValue}
                    value={valueCategory}
                    options={category}
                    className="searchManga__categories"
                    placeholder="Choose category..."
                    isSearchable={true}
                    isMulti
                />
            </div>
        );
    }
}

export default SearchPanelManga;
