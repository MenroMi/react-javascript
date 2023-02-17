import { useState } from "react";
import "./app-employees-add-form.css";

const EmployeesAddForm = ({ onSubmitItem }) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [salaryValid, setSalaryValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const validateFrom = () => {
    console.log(formValid);
    setFormValid(() => (nameValid && salaryValid ? true : false));
  };

  const onValidateForm = (field, value) => {
    let nameField = nameValid;
    let salaryField = salaryValid;

    switch (field) {
      case "name":
        nameField = value.length <= 3 ? false : true;
        break;
      case "salary":
        salaryField = value.length <= 2 ? false : true;
        break;
      default:
        break;
    }
    setNameValid(nameField);
    setSalaryValid(salaryField);
    validateFrom();
  };

  const resetInputs = () => {
    setName("");
    setSalary("");
  };

  const onValueChange = (e) => {
    const name = e.target.name,
      value = e.target.value;

    if (name === "name") {
      setName(value);
    } else {
      setSalary(value);
    }

    onValidateForm(name, value);
  };

  return (
    <div className="app-add-form">
      <h3>Add new employee</h3>
      <form
        className="add-form d-flex"
        onSubmit={(e) =>
          new Promise((resolve) => {
            onSubmitItem(e, name, salary);
            resolve();
          }).then(resetInputs)
        }
      >
        <input
          required
          type="text"
          onChange={onValueChange}
          className="form-control new-post-label"
          placeholder="What's name?"
          name="name"
          value={name}
        />
        <input
          required
          type="number"
          onChange={onValueChange}
          className="form-control new-post-label"
          placeholder="Salary in $?"
          name="salary"
          value={salary}
        />

        <button
          type="submit"
          className="btn btn-outline-light"
          disabled={!formValid}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
