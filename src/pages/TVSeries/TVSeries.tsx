import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../App";
import SearchBar from "../../components/SearchBar";
import Item from "../../components/Item";

export default function TVSeries() {
  const data = useContext(DataContext);
  const tvSeries = data.data?.filter((e) => e.category === "TV Series") || [];

  const [searchResults, setSearchResults] = useState<IData[]>(tvSeries);

  useEffect(() => {
    setSearchResults(tvSeries);
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
    setSearchResults(
      tvSeries.filter((e) =>
        e.title.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  return (
    <main className="px-4 py-6 flex flex-col gap-6 lg:ml-[100px]">
      <SearchBar
        placeholder="Search for TV series"
        onChange={(e) => handleInput(e.target.value)}
      />
      <div className="flex flex-col gap-4">
        <p className="text-white text-2xl">TV Series</p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {searchResults.map((e) => (
            <Item key={e.title} e={e} onClick={() => handleBookmarkClick(e)} />
          ))}
        </div>
      </div>
    </main>
  );
}
