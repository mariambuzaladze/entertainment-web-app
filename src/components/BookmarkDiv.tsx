import BookmarkLogoEmpty from "/assets/icon-bookmark-empty.svg";
import BookmarkLogoFull from "/assets/icon-bookmark-full.svg";

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

export default function BookmarkDiv({
  onClick,
  e,
}: {
  onClick: void;
  e: IData;
}) {
  return (
    <div
      className="rounded-full bg-gray-800 p-2 w-fit self-end"
      onClick={() => onClick}
    >
      <img
        src={e.isBookmarked ? BookmarkLogoFull : BookmarkLogoEmpty}
        alt="Bookmarked icon"
      />
    </div>
  );
}
