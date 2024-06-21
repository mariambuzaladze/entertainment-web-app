import { useEffect } from "react";

export default function SignUp({
  setShowHeader,
}: {
  setShowHeader: (show: boolean) => void;
}) {
  useEffect(() => {
    setShowHeader(false);
  });
  return <p>signup</p>;
}
