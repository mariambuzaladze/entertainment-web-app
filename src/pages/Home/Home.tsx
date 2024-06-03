import { DataContext } from "../../App";
import SearchBar from "../../components/SearchBar";
import { useContext } from "react";
import InfoContainer from "../../components/InfoContainer";
import BookmarkDiv from "../../components/BookmarkDiv";
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

export default function Home() {
  const data = useContext(DataContext);

  const trending = data.data?.filter((e) => e.isTrending === true);

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
    <div className="px-4 py-6 flex flex-col gap-6">
      <SearchBar placeholder="Search for movies or TV series" />

      <div className="flex flex-col gap-4">
        <p className="text-white text-lg">Trending</p>
        <div className="overflow-x-auto whitespace-nowrap flex gap-4">
          {trending?.map((e) => (
            <div
              key={e.title}
              className="flex flex-col gap-10 rounded-md p-4"
              style={{
                backgroundImage: `url(${e.thumbnail.trending?.small})`,
                backgroundSize: "cover",
              }}
            >
              <BookmarkDiv onClick={() => handleBookmarkClick(e)} e={e} />
              <InfoContainer item={e} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-white text-lg">Recommended for you</p>
        <div className="grid grid-cols-2 gap-4">
          {data.data?.map((e) => (
            <Item key={e.title} e={e} onClick={() => handleBookmarkClick(e)} />
          ))}
        </div>
      </div>
    </div>
  );
}
