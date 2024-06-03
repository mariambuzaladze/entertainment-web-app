import { useContext } from "react";
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

export default function TVSeries() {
  const data = useContext(DataContext);
  const movies = data.data?.filter((e) => e.isBookmarked);

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

  return (
    <main className="px-4 py-6 flex flex-col gap-6">
      <SearchBar placeholder="Search for movies" />
      <div className="flex flex-col gap-4">
        <p className="text-white text-lg">Bookmarked Movies</p>

        <div className="grid grid-cols-2 gap-4">
          {movies?.map((e) => (
            <Item key={e.title} e={e} onClick={() => handleBookmarkClick(e)} />
          ))}
        </div>
      </div>
    </main>
  );
}
