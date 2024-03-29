import { useState } from "react";

import cn from "classnames";

import "./employees-list-item.css";

const EmployeesItem = ({
  salary,
  name,
  onDelete,
  onToggleIncrease,
  onToggleLike,
  onUpdateSalary,
  increase,
  like,
}) => {
  const [slr, setSalary] = useState(salary);
  const [salaryLength, setSalaryLength] = useState(true);

  const onChangeSalary = (e) => {
    let value = e.target.value;
    if (value.length < 3) {
      setSalaryLength(false);
    } else {
      setSalary(value);
      setSalaryLength(true);
      onUpdateSalary(value);
    }
  };

  const classComponent = cn({
    "list-group-item": true,
    "d-flex": true,
    "justify-content-between": true,
    increase,
    like,
  });

  return (
    <li className={classComponent}>
      <span className="list-group-item-label" onClick={onToggleLike}>
        {name}
      </span>
      <input
        type="text"
        className={`${
          salaryLength ? "list-group-item-input" : "list-group-item-input error"
        }`}
        defaultValue={slr + "$"}
        onChange={onChangeSalary}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleIncrease}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesItem;
