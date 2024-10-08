import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState, Dispatch, SetStateAction } from "react";
import DataJson from "./data.json";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TVSeries from "./pages/TVSeries/TVSeries";
import Bookmarked from "./pages/Bookmarked/Bookmarked";
import Header from "./components/Header";
import Login from "./pages/Forms/Login";
import SignUp from "./pages/Forms/SignUp";
import Play from "./pages/Play/Play";

interface IDataContext {
  data: IData[] | null;
  setData: Dispatch<SetStateAction<IData[]>>;
}

export const DataContext = createContext<IDataContext>({
  data: null,
  setData: () => null,
});

function App() {
  const [data, setData] = useState<IData[]>(DataJson);
  const [showHeader, setShowHeader] = useState<boolean>(true);

  const handleBookmarkClick = (clickedItem: IData) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.title === clickedItem.title) {
          return { ...item, isBookmarked: !item.isBookmarked };
        }
        return item;
      });
    });
  };

  return (
    <BrowserRouter>
      {showHeader && <Header />}
      <DataContext.Provider value={{ data, setData }}>
        <Routes>
          <Route path="/" element={<Login setShowHeader={setShowHeader} />} />
          <Route
            path="/signup"
            element={<SignUp setShowHeader={setShowHeader} />}
          />
          <Route
            path="/home"
            element={
              <Home
                setShowHeader={setShowHeader}
                handleBookmarkClick={handleBookmarkClick}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <Movies
                setShowHeader={setShowHeader}
                handleBookmarkClick={handleBookmarkClick}
              />
            }
          />
          <Route
            path="/tvseries"
            element={
              <TVSeries
                setShowHeader={setShowHeader}
                handleBookmarkClick={handleBookmarkClick}
              />
            }
          />
          <Route
            path="/bookmarked"
            element={
              <Bookmarked
                setShowHeader={setShowHeader}
                handleBookmarkClick={handleBookmarkClick}
              />
            }
          />
          <Route
            path="/play"
            element={<Play setShowHeader={setShowHeader} />}
          />
        </Routes>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
