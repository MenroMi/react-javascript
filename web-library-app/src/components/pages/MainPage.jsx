// components
import HeaderRandomManga from "../mainPage/headerRandomManga/HeaderRandomManga";
import AnimeList from "../mainPage/animeList/AnimeList";

// images
import girlBackground from "../../assets/imgs/girlBackground.png";

export default function MainPage() {
  return (
    <>
      <HeaderRandomManga />
      <AnimeList />
      <img
        className="girl-bg"
        src={girlBackground}
        alt="Anime girl on background"
      />
    </>
  );
}
