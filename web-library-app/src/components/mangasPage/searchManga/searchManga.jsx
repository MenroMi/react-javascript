// basics
import { Component } from 'react';
import Select from "react-select";

// styles
import './SearchManga.scss';


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

    scrollMenu = (e) => {
        console.log(e);
    }

    changeSelectValue = (e) => {
        let res = e.value;
        this.setState({ valueCategory: res });
        this.props.onChangeValueCategory(res);
    }

    changeSearchValue = (e) => {
        let value = e.target.value,
            crossForReset = e.target.nextElementSibling;

        if (value.length > 0) {
            crossForReset.classList.add("cross_active");
        } else {
            crossForReset.classList.remove("cross_active");
        }

        this.setState(({ search: value }));
        this.props.onChangeSearchValue(value);
    }
    onResetValue = (e) => {
        this.setState(({ search: '' }));
        this.props.onResetValue();
        e.target.classList.remove('cross_active');
    }

    render() {
        const { search, category, valueCategory } = this.state;
        return (
            <div className="searchManga">
                <Select
                    styles={{
                        control: (provided, state) => ({
                            ...provided,
                            outline: state.isFocused ? '2px solid #48CAE4' : null
                        })
                    }}
                    onChange={this.changeSelectValue}
                    value={valueCategory}
                    options={category}
                    className="searchManga__categories"
                    placeholder="Choose category..."
                    isSearchable={true}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary: "#48CAE4",
                            primary25: "#90E0EF",
                            neutral10: "#CAF0F8",
                            neutral20: "black"
                        }
                    })}
                />

                <input
                    onChange={this.changeSearchValue}
                    type="search"
                    className="searchManga__search"
                    value={search}
                    placeholder="Search title..."
                />

                <div
                    className="cross"
                    onClick={this.onResetValue}
                ></div>

            </div>
        );
    }
}

export default SearchPanelManga;
