import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TVSeries from "./pages/TVSeries/TVSeries";
import Bookmarked from "./pages/Bookmarked/Bookmarked";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/TVSeries" element={<TVSeries />} />
        <Route path="/Bookmarked" element={<Bookmarked />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
