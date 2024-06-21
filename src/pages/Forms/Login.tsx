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

  return <Form />;
}
