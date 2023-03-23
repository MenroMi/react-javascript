// basics
import Nav from "../reusabilityComponents/navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Pages */
import { MainPage, MangaPage } from "../pages";

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
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/mangas/*" element={<MangaPage />} />
          {/* Page with choosen manga */}
          {/* <MangaPage /> */}
        </Routes>
      </div>
    </Router>
  );
}
