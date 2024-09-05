import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../App";
import SearchBar from "../../components/SearchBar";
import InfoContainer from "../../components/InfoContainer";
import BookmarkDiv from "../../components/BookmarkDiv";
import Item from "../../components/Item";
import PlayIcon from "/assets/icon-play.svg";

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

  const navigate = useNavigate();
  const [hover, setHover] = useState("");

  const data = useContext(DataContext);
  const [searchResults, setSearchResults] = useState<IData[]>(data.data || []);

  const trending = searchResults.filter((e) => e.isTrending);

  useEffect(() => {
    setSearchResults(data.data || []);
  }, [data.data]);

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
              onMouseEnter={() => {
                setHover(e.title);
              }}
              onMouseLeave={() => {
                setHover("false");
              }}
              onClick={() => {
                navigate("/play");
              }}
              key={e.title}
              className={`flex flex-col relative gap-10 rounded-md p-4 md:gap-[90px] md:p-6 cursor-pointer ${
                hover === e.title ? "opacity-60" : ""
              }`}
              style={{
                backgroundImage: `url(${e.thumbnail.trending?.small})`,
                backgroundSize: "cover",
              }}
            >
              <BookmarkDiv onClick={() => handleBookmarkClick(e)} e={e} />

              {hover === e.title ? (
                <div className="flex gap-4 p-2 pl-3 pr-3 items-center text-white absolute left-[40%] top-[45%] rounded-2xl bg-gray-800 cursor-pointer">
                  <img src={PlayIcon} alt="play icon" />
                  <p>PLAY</p>
                </div>
              ) : (
                ""
              )}

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
