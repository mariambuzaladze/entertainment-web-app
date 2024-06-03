import { DataContext } from "../../App";
import SearchBar from "../../components/SearchBar";
import { useContext } from "react";
import BookmarkLogoEmpty from "/assets/icon-bookmark-empty.svg";
import BookmarkLogoFull from "/assets/icon-bookmark-full.svg";
import MoviesIcon from "/assets/icon-category-movie.svg";
import TVSeriesIcon from "/assets/icon-category-tv.svg";

export default function Home() {
  const data = useContext(DataContext);

  const trending = data.data?.filter((e) => e.isTrending === true);

  return (
    <div className="px-4 py-6">
      <SearchBar placeholder="Search for movies or TV series" />
      <div>
        <p>Trending</p>
        <div>
          {trending?.map((e) => (
            <div key={e.title}>
              <div>
                <img
                  src={e.isBookmarked ? BookmarkLogoFull : BookmarkLogoEmpty}
                  alt="Bookmarked icon"
                />
              </div>
              <div>
                <div>
                  <p>{e.year}</p>
                  <div></div>
                  <img
                    src={e.category === "Movie" ? MoviesIcon : TVSeriesIcon}
                    alt="category icon"
                  />
                  <p>{e.category}</p>
                  <div></div>
                  <p>{e.rating}</p>
                </div>
                <p>{e.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
