import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./AuthForm.module.css";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function AuthForm({ title, onSubmit, initialValues, type, validationSchema }) {
  return (
    <div>
      <Toaster />
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            {type === "register" && (
              <Field type="text" name="name" placeholder="Enter your name" />
            )}
            <label>
              Email
              <Field type="text" name="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component={"p"} />
            </label>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">{title}</button>
            <p>
              {type === "register"
                ? "already have an account?"
                : "don't have an account?"}
              <Link to={type === "register" ? "/login" : "/register"}>
                {" "}
                {type === "register" ? "Login" : "Register"}
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AuthForm;
