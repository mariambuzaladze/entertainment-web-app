import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../App";
import SearchBar from "../../components/SearchBar";
import InfoContainer from "../../components/InfoContainer";
import BookmarkDiv from "../../components/BookmarkDiv";
import Item from "../../components/Item";

export default function Home({
  setShowHeader,
  handleBookmarkClick,
}: {
  setShowHeader: (show: boolean) => void;
  handleBookmarkClick: (e: any) => void;
}) {
  useEffect(() => {
    setShowHeader(true);
  }, []);

  const data = useContext(DataContext);
  const [searchResults, setSearchResults] = useState<IData[]>(data.data || []);

  const trending = searchResults.filter((e) => e.isTrending);

  useEffect(() => {
    setSearchResults(data.data || []);
  }, [data.data]);

  // const handleBookmarkClick = (clickedItem: IData) => {
  //   data.setData((prevData) => {
  //     return prevData.map((item) => {
  //       if (item.title === clickedItem.title) {
  //         return { ...item, isBookmarked: !item.isBookmarked };
  //       }
  //       return item;
  //     });
  //   });
  // };

  const handleInput = (input: string) => {
    setSearchResults(
      data.data?.filter((e) =>
        e.title.toLowerCase().includes(input.toLowerCase())
      ) || []
    );
  };

  return (
    <main className="px-4 py-6 flex flex-col gap-6 flex-grow lg:ml-[100px]">
      <SearchBar
        placeholder="Search for movies or TV series"
        onChange={(e) => handleInput(e.target.value)}
      />

      <div className="flex flex-col gap-4">
        <p className="text-white text-2xl">Trending</p>
        <div className="overflow-x-auto whitespace-nowrap flex gap-4">
          {trending.map((e) => (
            <div
              key={e.title}
              className="flex flex-col gap-10 rounded-md p-4 md:gap-[90px] md:p-6"
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
        <p className="text-white text-2xl">Recommended for you</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {searchResults.map((e) => (
            <Item key={e.title} e={e} onClick={() => handleBookmarkClick(e)} />
          ))}
        </div>
      </div>
    </main>
  );
}
