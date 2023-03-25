// basics
import Nav from "../reusabilityComponents/navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Pages */
import { MainPage, MangaPage, Page404 } from "../pages/index";

/* Choosen Manga Page */
// import MangaPage from '../reusabilityComponents/mangaPage/MangaPage';

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
          <Route path="*" element={<Page404 />} />
          {/* Page with choosen manga */}
          {/* <MangaPage /> */}
        </Routes>
      </div>
    </Router>
  );
}
