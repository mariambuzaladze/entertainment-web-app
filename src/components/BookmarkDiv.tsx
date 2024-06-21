import BookmarkLogoEmpty from "/assets/icon-bookmark-empty.svg";
import BookmarkLogoFull from "/assets/icon-bookmark-full.svg";
import { MouseEventHandler } from "react";

export default function BookmarkDiv({
  onClick,
  e,
}: {
  onClick: MouseEventHandler<HTMLDivElement>;
  e: IData;
}) {
  return (
    <div
      className="rounded-full bg-gray-800 p-2 w-fit self-end md:p-3  cursor-pointer"
      onClick={onClick}
    >
      <img
        src={e.isBookmarked ? BookmarkLogoFull : BookmarkLogoEmpty}
        alt="Bookmarked icon"
      />
    </div>
  );
}
