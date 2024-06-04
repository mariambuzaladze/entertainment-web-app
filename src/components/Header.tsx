import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "/assets/logo.svg";
import Temporary from "/vite.svg";
import MoviesIcon from "/assets/icon-nav-movies.svg";
import MoviesIconPicked from "/assets/icon-category-movie.svg";
import TVSeriesIcon from "/assets/icon-nav-tv-series.svg";
import TVSeriesIconPicked from "/assets/icon-category-tv.svg";

export default function Header() {
  const location = useLocation();
  const [picked, setPicked] = useState("home");

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setPicked("home");
    } else if (path === "/movies") {
      setPicked("movies");
    } else if (path === "/TVSeries") {
      setPicked("tv");
    } else if (path === "/Bookmarked") {
      setPicked("bookmarked");
    }
  }, [location]);

  return (
    <header className="flex p-4 justify-between items-center bg-[#161D2F]">
      <img src={Logo} alt="icon logo" />
      <div className="flex gap-6">
        <Link to="/">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setPicked("home")}
          >
            <path
              d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
              fill={picked === "home" ? "#fff" : "#5A698F"}
            />
          </svg>
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
          <svg
            width="17"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setPicked("bookmarked")}
          >
            <path
              d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
              fill={picked === "bookmarked" ? "#fff" : "#5A698F"}
            />
          </svg>
        </Link>
      </div>
      <img src={Temporary} alt="" />
    </header>
  );
}
