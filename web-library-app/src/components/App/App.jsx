// basics
import Nav from "../reusabilityComponents/navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Pages */
import { MainPage, MangaPage, SingleMangaPage, Page404 } from "../pages/index";

// styles
import "./App.scss";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="mangas" element={<MangaPage />} />
          <Route path="mangas/:mangaId" element={<SingleMangaPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}
