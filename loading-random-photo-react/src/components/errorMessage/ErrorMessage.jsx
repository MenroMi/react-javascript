// basic
import { PureComponent } from "react";

// styles

import "./ErrorMessage.scss";

export default class ErrorMessage extends PureComponent {
  render() {
    const { errorMessage, error } = this.props;

    return (
      <div className={`error-box ${error ? " error-box_on" : ""}`}>
        <h3 className="error-msg">{errorMessage}</h3>
      </div>
    );
  }
}
