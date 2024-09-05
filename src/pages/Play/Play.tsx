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
      <div className="absolute md:top-[45px] md:left-[48px]  top-[20px] left-[10px] cursor-pointer">
        <GoBack />
      </div>
      <p className="md:text-3xl text-xl">
        Oops, this movie is currently unavailable! <br />
        <span className="italic md:text-lg font-medium text-sm">
          (It seems like all movies are currently unavailable, but you can still
          browse their posters on the home page!)
        </span>
      </p>
    </div>
  );
}
