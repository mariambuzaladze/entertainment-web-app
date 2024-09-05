import { MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookmarkDiv from "./BookmarkDiv";
import InfoContainer from "./InfoContainer";
import PlayIcon from "/assets/icon-play.svg";

interface IData {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export default function Item({
  e,
  onClick,
}: {
  e: IData;
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  const [hover, setHover] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-2 cursor-pointer"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => {
        navigate("/play");
      }}
    >
      <div
        className={`flex relative flex-col rounded-md pt-2 pr-2 pb-[70px] pl-[124px] lg:pb-[130px] ${
          hover ? "opacity-60" : ""
        }`}
        style={{
          backgroundImage: `url(${e.thumbnail.regular.small})`,
          backgroundSize: "cover",
        }}
      >
        <BookmarkDiv onClick={onClick} e={e} />
        {hover ? (
          <div className="flex gap-4 p-2 pl-3 pr-3 items-center text-white absolute left-[40%] top-[45%] rounded-2xl bg-gray-800 cursor-pointer">
            <img src={PlayIcon} alt="play icon" />
            <p>PLAY</p>
          </div>
        ) : (
          ""
        )}
      </div>

      <InfoContainer item={e} />
    </div>
  );
}
