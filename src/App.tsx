import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState, Dispatch, SetStateAction } from "react";
import DataJson from "./data.json";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TVSeries from "./pages/TVSeries/TVSeries";
import Bookmarked from "./pages/Bookmarked/Bookmarked";
import Header from "./components/Header";

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

  return (
    <BrowserRouter>
      <Header />
      <DataContext.Provider value={{ data, setData }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvseries" element={<TVSeries />} />
          <Route path="/bookmarked" element={<Bookmarked />} />
        </Routes>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
