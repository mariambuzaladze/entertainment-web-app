import { useEffect } from "react";
import Form from "../../components/TheForm";

export default function SignUp({
  setShowHeader,
}: {
  setShowHeader: (show: boolean) => void;
}) {
  useEffect(() => {
    setShowHeader(false);
  });
  return (
    <Form
      title="Sign Up"
      repeatPassword={true}
      buttonText="Create an account"
      accountText="Alread have an account?"
      address="Login"
    />
  );
}
