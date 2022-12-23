// basics
import { Component } from 'react';

// Components
import HeaderRandomManga from '../mainPage/headerRandomManga/headerRandomManga';
import AnimeList from '../mainPage/animeList/animeList';
// images 
import girlBackground from "../../assets/imgs/girlBackground.png";

// styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderRandomManga />
        <AnimeList />
        <img className="girl-bg" src={girlBackground} alt="Anime girl on background" />
      </div>
    );
  }
}

export default App;
