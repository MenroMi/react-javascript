// basics
import Nav from "../reusabilityComponents/navigation/navigation";

// Components

/* Main Page */
// import HeaderRandomManga from "../mainPage/headerRandomManga/headerRandomManga";
// import AnimeList from "../mainPage/animeList/animeList";

/* Manga Page */
import MangasPage from "../mangasPage/mangasPage";

/* Choosen Manga Page */
// import MangaPage from '../reusabilityComponents/mangaPage/MangaPage';

// images
// import girlBackground from "../../assets/imgs/girlBackground.png";

// styles
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      {/* Main page */}
      {/* <HeaderRandomManga />
      <AnimeList />
      <img
        className="girl-bg"
        src={girlBackground}
        alt="Anime girl on background"
      /> */}
      {/* Mangas page */}
      <MangasPage />
      {/* Page with choosen manga */}
      {/* <MangaPage /> */}
    </div>
  );
};

export default App;
