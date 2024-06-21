import Logo from "/assets/logo.svg";
import Line from "./Line";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function TheForm({
  title,
  repeatPassword,
  buttonText,
  accountText,
  address,
}: {
  title: string;
  repeatPassword: boolean;
  buttonText: string;
  accountText: string;
  address: string;
}) {
  const linkTo = address === "Sign Up" ? "/signup" : "/";

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  // Form submit handler
  const handleSubmit = (values: any) => {
    console.log("Form data:", values);
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
