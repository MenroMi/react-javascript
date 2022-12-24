// basics
import { Component } from 'react';

// Components
/* Main Page */
// import HeaderRandomManga from '../mainPage/headerRandomManga/headerRandomManga';
// import AnimeList from '../mainPage/animeList/animeList';

/* Manga Page */
import MangaPage from '../mangaPage/mangaPage';

// images 
import girlBackground from "../../assets/imgs/girlBackground.png";

// styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Main page */}
        {/* <HeaderRandomManga />
        <AnimeList />
        <img className="girl-bg" src={girlBackground} alt="Anime girl on background" /> */}
        {/* Manga page */}
        <MangaPage />
      </div>
    );
  }
}

export default App;
