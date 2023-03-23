// images
import plugIMG from "./piffle-error.gif";

function ErrorMessage() {
  return (
    <div
      className="container"
      style={{
        width: "550px",
      }}
    >
      <img
        src={plugIMG}
        alt="error"
        style={{
          display: "block",
          margin: "0 auto",
          width: "180px",
          height: "190px",
        }}
      />
    </div>
  );
}

export default ErrorMessage;
