import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../App";
import SearchBar from "../../components/SearchBar";
import Item from "../../components/Item";

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

export default function Bookmarked() {
  const data = useContext(DataContext);
  const bookmarkedMovies =
    data.data?.filter((e) => e.isBookmarked && e.category === "Movie") || [];
  const bookmarkedTVSeries =
    data.data?.filter((e) => e.isBookmarked && e.category === "TV Series") ||
    [];

  const [searchMovieResults, setSearchMovieResults] =
    useState<IData[]>(bookmarkedMovies);
  const [searchTVResults, setSearchTVResults] =
    useState<IData[]>(bookmarkedTVSeries);

  useEffect(() => {
    setSearchMovieResults(bookmarkedMovies);
    setSearchTVResults(bookmarkedTVSeries);
  }, [data.data]);

  const handleBookmarkClick = (clickedItem: IData) => {
    data.setData((prevData) => {
      return prevData.map((item) => {
        if (item.title === clickedItem.title) {
          return { ...item, isBookmarked: !item.isBookmarked };
        }
        return item;
      });
    });
  };

  const handleInput = (input: string) => {
    setSearchMovieResults(
      bookmarkedMovies.filter((e) =>
        e.title.toLowerCase().includes(input.toLowerCase())
      )
    );
    setSearchTVResults(
      bookmarkedTVSeries.filter((e) =>
        e.title.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  return (
    <main className="px-4 py-6 flex flex-col gap-6">
      <SearchBar
        placeholder="Search for bookmarked shows"
        onChange={(e) => handleInput(e.target.value)}
      />

      <div className="flex flex-col gap-4">
        <p className="text-white text-2xl">Bookmarked Movies</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {searchMovieResults.map((e) => (
            <Item key={e.title} e={e} onClick={() => handleBookmarkClick(e)} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-white text-2xl">Bookmarked TV Series</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {searchTVResults.map((e) => (
            <Item key={e.title} e={e} onClick={() => handleBookmarkClick(e)} />
          ))}
        </div>
      </div>
    </main>
  );
}
