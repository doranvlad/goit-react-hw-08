import { useSelector } from "react-redux";
import s from "./RestrictedRoute.module.css";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsLoggedIn } from "../../../redux/auth/slice";

function RestrictedRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  if (!isLoggedIn) {
    return children;
  }
  return <Navigate to={location.state?.from || "/contacts"} />;
}

export default RestrictedRoute;
