import { Component } from "react";
import "./app-employees-add-form.css";


class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: "",
            nameValid: false,
            salaryValid: false,
            formValid: false
        }
    }

    validateFrom() {
        this.setState({ formValid: this.state.nameValid && this.state.salaryValid });
    }

    onValidateForm = (field, value) => {

        let nameField = this.state.nameValid;
        let salaryField = this.state.salaryValid;

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

        this.setState({
            nameValid: nameField,
            salaryValid: salaryField
        }, this.validateFrom);
    }

    resetInputs = () => {
        return this.setState({ name: "", salary: "" });
    }

    onValueChange = (e) => {
        const name = e.target.name,
            value = e.target.value;
        this.setState({ [name]: value }, () => { this.onValidateForm(name, value) })
    }


    render() {
        const { onSubmitItem } = this.props;
        const { name, salary, formValid } = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => new Promise(resolve => {
                        onSubmitItem(e, name, salary);
                        resolve();
                    }).then(this.resetInputs)}
                >
                    <input
                        required
                        type="text"
                        onChange={this.onValueChange}
                        className="form-control new-post-label"
                        placeholder="What's name?"
                        name="name"
                        value={name}
                    />
                    <input
                        required
                        type="number"
                        onChange={this.onValueChange}
                        className="form-control new-post-label"
                        placeholder="Salary in $?"
                        name="salary"
                        value={salary}
                    />

                    <button
                        type="submit"
                        className="btn btn-outline-light"
                        disabled={!formValid}

                    >Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;