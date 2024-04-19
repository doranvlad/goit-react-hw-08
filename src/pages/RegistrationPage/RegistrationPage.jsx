import { useDispatch } from "react-redux";
import AuthForm from "../../components/AuthForm/AuthForm";
import s from "./RegistrationPage.module.css";
import toast, { Toaster } from "react-hot-toast";
import { registerThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function RegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSumbit = (values) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then((data) => {
        toast.success(`Welcome ${data.user.name}`);
        navigate("/");
      })
      .catch(() => {
        toast.error("Invalid data");
      });
  };
  // unwrap(); очікує поки завершиться запит
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(7, "Too Short!")
      .required("Password is required"),
  });

  return (
    <>
      <Toaster />
      <AuthForm
        title="registration"
        onSubmit={handleSumbit}
        initialValues={initialValues}
        type="register"
        validationSchema={SignupSchema}
      />
    </>
  );
}

export default RegistrationPage;
