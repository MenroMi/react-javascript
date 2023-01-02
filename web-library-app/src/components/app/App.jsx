// basics
import { Component } from 'react';

// Components
/* Main Page */
import HeaderRandomManga from '../mainPage/headerRandomManga/HeaderRandomManga';
import AnimeList from '../mainPage/animeList/AnimeList';

/* Manga Page */
// import MangasPage from '../mangasPage/MangasPage';

/* Choosen Manga Page */
// import MangaPage from '../reusabilityComponents/mangaPage/MangaPage';

// services
import { Anime } from '../services/AnimeResources';

// images 
import girlBackground from "../../assets/imgs/girlBackground.png";

// styles
import './App.scss';

// const randonAnime = new Anime();
// randonAnime.getCountAllAnime().then(data => console.log(data));

class App extends Component {


  state = {
    state: false
  }

  render() {

    return (
      <div className="App">
        {/* Main page */}
        <HeaderRandomManga />
        <AnimeList />
        <img className="girl-bg" src={girlBackground} alt="Anime girl on background" />
        {/* Mangas page */}
        {/* <MangasPage /> */}
        {/* Page with choosen manga */}
        {/* <MangaPage /> */}
      </div>
    );
  }
}

export default App;
