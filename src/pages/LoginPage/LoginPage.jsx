import AuthForm from "../../components/AuthForm/AuthForm";
import s from "./LoginPage.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import * as Yup from "yup";

function LoginPage() {
  const dispatch = useDispatch();
  const handleSumbit = (values) => {
    dispatch(loginThunk(values));
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(7, "Too Short!")
      .required("Password is required"),
  });

  return (
    <div>
      <Toaster />
      <AuthForm
        title="login"
        onSubmit={handleSumbit}
        initialValues={initialValues}
        type="login"
        validationSchema={SignupSchema}
      />
    </div>
  );
}

export default LoginPage;
