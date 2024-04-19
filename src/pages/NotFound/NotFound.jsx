import s from "./NotFound.module.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <p>Not Found Page</p>
      <Link to="/">Go to Home page!</Link>
    </div>
  );
}

export default NotFound;
