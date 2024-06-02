import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/assets/logo.svg";
import Temporary from "/vite.svg";
import HomeIcon from "/assets/icon-nav-home.svg";
import HomeIconPicked from "/assets/icon-nav-home.svg";
import MoviesIcon from "/assets/icon-nav-movies.svg";
import MoviesIconPicked from "/assets/icon-category-movie.svg";
import TVSeriesIcon from "/assets/icon-nav-tv-series.svg";
import TVSeriesIconPicked from "/assets/icon-category-tv.svg";
import BookmarkedIcon from "/assets/icon-nav-bookmark.svg";
import BookmarkedIconPicked from "/assets/icon-nav-bookmark.svg";

export default function Header() {
  const [picked, setPicked] = useState("home");

  return (
    <header className="flex p-4 justify-between items-center bg-[#161D2F]">
      <img src={Logo} alt="icon logo" />
      <div className="flex gap-6">
        <Link to="/">
          <img
            src={picked === "home" ? HomeIconPicked : HomeIcon}
            alt="Home page icon"
            onClick={() => setPicked("home")}
          />
        </Link>

        <Link to="/movies">
          <img
            className="w-[20px] h-[20px]"
            src={picked === "movies" ? MoviesIconPicked : MoviesIcon}
            alt="Movies icon"
            onClick={() => setPicked("movies")}
          />
        </Link>

        <Link to="/TVSeries">
          <img
            className="w-[20px] h-[20px]"
            src={picked === "tv" ? TVSeriesIconPicked : TVSeriesIcon}
            alt="TV Series icon"
            onClick={() => setPicked("tv")}
          />
        </Link>

        <Link to="/Bookmarked">
          <img
            src={
              picked === "bookmarked" ? BookmarkedIconPicked : BookmarkedIcon
            }
            alt="Bookmarked icon"
            onClick={() => setPicked("bookmarked")}
          />
        </Link>
      </div>
      <img src={Temporary} alt="" />
    </header>
  );
}
