// basics
import { Component } from "react";

// images
import plugIMG from "./piffle-error.gif";



class ErrorMessage extends Component {

    state = {
        loading: false,
        error: false,
        statusCode: null, // status codes
    }


    validateError = () => {
        let statusCode = this.state.statusCode;
        console.log(statusCode);

        switch (statusCode) {
            case 404:
                this.props.updateState();
                break;
            case statusCode >= 500:
                alert("problems with server");
                this.setState({ loading: false });
                break;
            case 400:
                alert("Bad Request - malformed request");
                this.setState({ loading: false });
                break;
            case 401:
                alert("Unauthorized - invalid or no authentication details provided");
                this.setState({ loading: false });
                break;
            default:
                alert("Please contact with administration");
                this.setState({ loading: false });
                break;
        }
    }

    onChangeNewError = (error) => {
    }

    render() {

        const { error, statusCode } = this.state;

        return (
            <div className="container" style={{
                width: "550px"
            }}>
                <img src={plugIMG} alt={statusCode} style={{
                    display: "block",
                    margin: "0 auto",
                    width: "180px",
                    height: "190px"
                }} />
            </div>
        )
    }
}

export default ErrorMessage;