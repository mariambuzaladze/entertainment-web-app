import Logo from "/assets/logo.svg";

import Temporary from "/vite.svg";

import HomeIcon from "/assets/icon-nav-home.svg";
import HomeIconPicked from "/assets/icon-category-home.svg";

import MoviesIcon from "/assets/icon-nav-movies.svg";
import MoviesIconPicked from "/assets/icon-category-movies.svg";

import TVSeriesIcon from "/assets/icon-nav-tv-series.svg";
import TVSeriesIconPicked from "/assets/icon-category-tv.svg";

import BookmarkedIcon from "/assets/icon-nav-bookmark.svg";
import BookmarkedIconPicked from "/assets/icon-category-bookmark.svg";

export default function Header() {
  return (
    <header className="flex p-4 justify-between items-center bg-[#161D2F]">
      <img src={Logo} alt="icon logo" />
      <div className="flex gap-6">
        <img src={HomeIcon} alt="Home page icon" />
        <img src={MoviesIcon} alt="Movies icon" />
        <img src={TVSeriesIcon} alt="TV Series icon" />
        <img src={BookmarkedIcon} alt="Bookmarked icon" />
      </div>
      <img src={Temporary} alt="" />
    </header>
  );
}
