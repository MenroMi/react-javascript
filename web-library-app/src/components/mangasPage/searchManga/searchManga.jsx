// basics
import { useState } from "react";
import Select from "react-select";

// styles
import "./SearchManga.scss";

const SearchPanelManga = (props) => {
  const [search, setSearch] = useState("");
  const [valueCategory, setValueCategory] = useState("");
  const [category, setCategory] = useState([
    { value: "all", label: "all" },
    { value: "drama", label: "Drama" },
    { value: "romantic", label: "Romantic" },
    { value: "fantasy", label: "Fantasy" },
    { value: "adventure", label: "Adventure" },
    { value: "everyday", label: "Everyday" },
    { value: "comedy", label: "Comedy" },
  ]);

  const changeSelectValue = (e) => {
    let res = e.value;
    setCategory(res);
    props.onChangeValueCategory(res);
  };

  const changeSearchValue = (e) => {
    let value = e.target.value,
      crossForReset = e.target.nextElementSibling;

    if (value.length > 0) {
      crossForReset.classList.add("cross_active");
    } else {
      crossForReset.classList.remove("cross_active");
    }

    setSearch(value);
    props.onChangeSearchValue(value);
  };
  const onResetValue = (e) => {
    this.setState({ search: "" });
    props.onResetValue();
    e.target.classList.remove("cross_active");
  };

  return (
    <div className="searchManga">
      <Select
        styles={{
          control: (provided, state) => ({
            ...provided,
            outline: state.isFocused ? "2px solid #48CAE4" : null,
          }),
        }}
        onChange={changeSelectValue}
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
            neutral20: "black",
          },
        })}
      />

      <input
        onChange={changeSearchValue}
        type="search"
        className="searchManga__search"
        value={search}
        placeholder="Search title..."
      />

      <div className="cross" onClick={onResetValue}></div>
    </div>
  );
};

export default SearchPanelManga;
