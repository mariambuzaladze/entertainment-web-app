import Logo from "/assets/logo.svg";
import Line from "./Line";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Accounts from "../accounts.json";

interface IAccount {
  email: string;
  password: string;
}

export default function TheForm({
  title,
  repeatPassword,
  buttonText,
  accountText,
  address,
  isLogin,
}: {
  title: string;
  repeatPassword: boolean;
  buttonText: string;
  accountText: string;
  address: string;
  isLogin: boolean;
}) {
  const linkTo = address === "Sign Up" ? "/signup" : "/";
  const navigate = useNavigate();

  const [accounts, setAccounts] = useState<IAccount[]>(Accounts);

  // Yup validation schema
  const signUpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const validationSchema = isLogin ? loginSchema : signUpSchema;

  // Form submit handler
  const handleSubmit = (values: any, { setFieldError }: any) => {
    console.log("Form data:", values);
    const { email, password } = values;

    if (isLogin) {
      const matchedAccount = accounts.find(
        (account) => account.email === email && account.password === password
      );

      if (matchedAccount) {
        // Successful login
        navigate("/home");
      } else {
        // Failed login
        setFieldError("password", "Invalid email or password");
      }
    } else {
      setAccounts([...accounts, { email: email, password: password }]);
      navigate("/home");
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        repeatPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col justiy-center items-center pt-12 p-6 h-screen gap-14">
          <img src={Logo} alt="icon logo" />
          <div className="flex flex-col rounded-md bg-[#161D2F] p-6 gap-10 md:p-8 md:w-[50%] lg:w-[35%]">
            <h1 className="text-2xl text-white tracking-tight">{title}</h1>

            <div className="flex flex-col gap-4">
              <Field
                type="email"
                name="email"
                placeholder="Email address"
                className={`bg-[#161D2F] text-white ${
                  errors.email && touched.email ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />

              <Line />

              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={`bg-[#161D2F] text-white ${
                  errors.password && touched.password ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />

              <Line />

              {repeatPassword && (
                <>
                  <Field
                    type="password"
                    name="repeatPassword"
                    placeholder="Repeat Password"
                    className={`bg-[#161D2F] text-white ${
                      errors.repeatPassword && touched.repeatPassword
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="repeatPassword"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                  <Line />
                </>
              )}
            </div>

            <button
              type="submit"
              className="text-white p-3 w-full rounded-md bg-[#FC4747]"
            >
              {buttonText}
            </button>

            <p className="text-white md:text-center">
              {accountText}{" "}
              <Link to={linkTo} className="text-[#FC4747]">
                {" "}
                {address}
              </Link>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
}
