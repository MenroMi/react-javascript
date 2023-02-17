import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./app-filter.css";

const EmployeeFilter = ({ updateFilterTerm }) => {
  const [filter, setFilter] = useState("");
  const [buttons, setButton] = useState([
    { name: "", label: "All workers", key: uuidv4() },
    { name: "awards", label: "For advancement", key: uuidv4() },
    { name: "over", label: "Salary over 1000$", key: uuidv4() },
  ]);
  const updateTerm = (e) => {
    let filter = e.target.name;
    setFilter(filter);
    updateFilterTerm(filter);
  };

  const buttonsFilters = (filter, data, funcFilter) => {
    return data.map(({ key, label, name }) => {
      const active = filter === name;
      const clazz = active ? "btn-light" : "btn-outline-light";
      return (
        <button
          type="button"
          name={name}
          className={`btn ${clazz}`}
          key={key}
          onClick={funcFilter}
        >
          {label}
        </button>
      );
    });
  };

  const btnsFilter = buttonsFilters(filter, buttons, updateTerm);

  return <div className="btn-group">{btnsFilter}</div>;
};

export default EmployeeFilter;
