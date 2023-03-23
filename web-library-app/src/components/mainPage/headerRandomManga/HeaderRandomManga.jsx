// basics
import { useState, useEffect } from "react";

//Components
import Spinner from "../../reusabilityComponents/spinnerLoading/Spinner";
import ErrorMessage from "../../reusabilityComponents/errorValidate/ErrorValidate";

// Services
import useAnimeResources from "../../services/AnimeResources";

// images
import girlRandom from "../../../assets/imgs/girlRandomManga.png";

// styles
import "./HeaderRandomManga.scss";

const HeaderRandomManga = () => {
  // states
  const [manga, setManga] = useState({});
  const { loading, error, getAnime } = useAnimeResources();

  const styleSpinner = {
    margin: "0 auto",
    display: "block",
    shapeRendering: "auto",
  };

  const onLoadedAnime = (manga) => {
    setManga(manga);
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const onErrorLoad = (status) => {
    switch (status) {
      case "404":
        updateState();
        break;
      case status >= "500":
        alert("problems with server");
        break;
      case "400":
        alert("Bad Request - malformed request");
        break;
      case "401":
        alert("Unauthorized - invalid or no authentication details provided");
        break;
      default:
        break;
    }
  };

  async function updateState() {
    // let maxCount = await this.anime.getCountAllAnime();
    const id = getRandomNumber(0, 18500);
    await getAnime(id)
      .then((data) => {
        if (parseInt(data)) {
          onErrorLoad(data);
        } else {
          onLoadedAnime(data);
        }
      })
      .catch(onErrorLoad); // == .then(data => onErrorLoad(data))
  }

  useEffect(() => {
    updateState();
  }, []);

  const checkDescriptionLength = (descr) => {
    if (descr.length > 200) {
      return `${descr.slice(0, 200)}...`;
    }
    return descr;
  };

  const checkTitleLength = (title) => {
    if (title.length > 27) {
      return `${title.slice(0, 27)}...`;
    }
    return title;
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const load = loading ? <Spinner styles={styleSpinner} /> : null;
  const content = !(errorMessage || load) ? (
    <ViewRandomManga
      manga={manga}
      checkTitleLength={checkTitleLength}
      checkDescriptionLength={checkDescriptionLength}
    />
  ) : null;

  return (
    <section className="random">
      {errorMessage}
      {load}
      {content}
      <div className="choose-random-manga">
        <div className="choose-random-manga__subdescr">
          Random manga today! <br />
          Do you want to read special title for you? <br /> <br /> Or choose
          another one
        </div>
        <div className="choose-random-manga__subdescr-992px">
          Random manga for you
        </div>
        <button className="button button_main" onClick={updateState}>
          Try it
        </button>
        <img
          className="choose-random-manga__img-random"
          src={girlRandom}
          alt="School girl"
        />
      </div>
    </section>
  );
};

const ViewRandomManga = ({
  manga,
  checkDescriptionLength,
  checkTitleLength,
}) => {
  // Render component without logic

  const { title, description, posterImage, homepage, wiki, alt } = manga;

  return (
    <div className="random-manga">
      <img className="random-manga__img" src={posterImage} alt={alt} />
      <div className="random-manga__info">
        <div className="title">{!title ? null : checkTitleLength(title)}</div>
        <div className="random-manga__descr">
          {!description ? null : checkDescriptionLength(description)}
        </div>
        <div className="random-manga__btns">
          <a href={homepage} target="_blank" rel="noreferrer">
            <button type="button" className="button button_main">
              Homepage
            </button>
          </a>
          <a href={wiki} target="_blank" rel="noreferrer">
            <button type="button" className="button button_submain">
              WIKI
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderRandomManga;
