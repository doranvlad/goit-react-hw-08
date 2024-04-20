import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./AuthForm.module.css";
import { Link } from "react-router-dom";
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";

function AuthForm({ title, onSubmit, initialValues, type, validationSchema }) {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passFieldId = useId();
  return (
    <div>
      <Toaster />
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            {type === "register" && (
              <>
                <label htmlFor={nameFieldId}>Name</label>
                <Field
                  className={s.input}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  id={nameFieldId}
                />
                <ErrorMessage name="name" component={"pdd"} />
              </>
            )}
            <label htmlFor={emailFieldId}>Email</label>
            <Field
              className={s.input}
              type="text"
              name="email"
              placeholder="Enter your email"
              id={emailFieldId}
            />
            <ErrorMessage name="email" component={"pdd"} />
            <label htmlFor={passFieldId}>Password</label>
            <Field
              className={s.input}
              type="password"
              name="password"
              placeholder="Enter your password"
              id={passFieldId}
            />
            {errors.password && touched.password ? (
              <pdd>{errors.password}</pdd>
            ) : null}
            <button className={s.btn} type="submit">
              {title}
            </button>
            <p className={s.bottom_link}>
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
