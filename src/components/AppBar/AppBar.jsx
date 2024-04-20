import { Link, NavLink } from "react-router-dom";
import s from "./AppBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/slice";
import { logoutThunk } from "../../redux/auth/operations";
import clsx from "clsx";

function AppBar() {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <div className={clsx(s.container)}>
      <Link to="/" className={s.home}>
        Home
      </Link>
      {isLoggedIn && (
        <h2>
          Hello - {user.name}, {user.email}
        </h2>
      )}

      <ul>
        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li> */}
        {isLoggedIn && (
          <li>
            <NavLink to="contacts">Contacts</NavLink>
          </li>
        )}

        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
            <li>
              <NavLink to="register">Register</NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <>
            <button
              onClick={() => {
                dispatch(logoutThunk());
              }}
            >
              Loguot
            </button>
          </>
        )}
      </ul>
    </div>
  );
}

export default AppBar;
