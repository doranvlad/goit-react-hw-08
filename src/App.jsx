import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/slice";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { refreshUserThunk } from "./redux/auth/operations";

import Layout from "./components/Layout";
import PrivateRoute from "./components/routes/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/routes/RestrictedRoute/RestrictedRoute";
import Loader from "./components/Loader/Loader";

import "./App.css";

const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log(isRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={null}>
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
