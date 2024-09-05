import { useEffect } from "react";
import GoBack from "../../components/GoBack";

export default function Play({
  setShowHeader,
}: {
  setShowHeader: (show: boolean) => void;
}) {
  useEffect(() => {
    setShowHeader(false);
  });

  return (
    <div className="flex min-h-screen text-white items-center justify-center font-bold">
      <div className="absolute top-[45px] left-[48px] cursor-pointer">
        <GoBack />
      </div>
      <p className="text-3xl">
        Oops, this movie is currently unavailable! <br />
        <span className="italic text-lg font-medium">
          (It seems like all movies are currently unavailable, but you can still
          browse their posters on the home page!)
        </span>
      </p>
    </div>
  );
}
