import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ERROR</h1>
      <Link style={{ fontSize: "30px" }} to="/">
        Back to Main Page
      </Link>
    </div>
  );
}
