import { MouseEventHandler } from "react";
import BookmarkDiv from "./BookmarkDiv";
import InfoContainer from "./InfoContainer";

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
  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <div
        className="flex flex-col rounded-md pt-2 pr-2 pb-[70px] pl-[124px] lg:pb-[130px]"
        style={{
          backgroundImage: `url(${e.thumbnail.regular.small})`,
          backgroundSize: "cover",
        }}
      >
        <BookmarkDiv onClick={onClick} e={e} />
      </div>

      <InfoContainer item={e} />
    </div>
  );
}
