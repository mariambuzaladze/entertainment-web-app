import Form from "../../components/Form";
import { useEffect } from "react";

export default function Login({
  setShowHeader,
}: {
  setShowHeader: (show: boolean) => void;
}) {
  useEffect(() => {
    setShowHeader(false);
  });

  return (
    <Form
      title="Login"
      repeatPassword={false}
      buttonText="Login to your account"
      accountText="Don’t have an account?"
      address="Sign Up"
    />
  );
}
