import Logo from "/assets/logo.svg";
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
    <main>
      <img src={Logo} alt="icon logo" />
      <div>
        <h1>Login</h1>
      </div>
    </main>
  );
}
