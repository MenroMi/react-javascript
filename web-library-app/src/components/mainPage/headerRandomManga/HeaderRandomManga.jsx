// basics
import { useState, useEffect } from "react";

//Components
import Nav from "../../reusabilityComponents/navigation/Navigation";
import Spinner from "../../reusabilityComponents/spinnerLoading/Spinner";
import ErrorMessage from "../../reusabilityComponents/errorValidate/ErrorValidate";

// Services
import { Anime } from "../../services/AnimeResources";

// images
import girlRandom from "../../../assets/imgs/girlRandomManga.png";

// styles
import "./HeaderRandomManga.scss";

const HeaderRandomManga = () => {
  const anime = new Anime();

  // states
  const [manga, setManga] = useState({
    title: null,
    description: null,
    posterImage: null,
    homepage: null,
    wiki: null,
    alt: "random manga",
    id: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const styleSpinner = {
    margin: "0 auto",
    display: "block",
    shapeRendering: "auto",
  };

  const onLoadedAnime = (manga) => {
    setManga(manga);
    setLoading(false);
  };

  const onLoadingAnime = () => {
    setLoading(true);
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
        setLoading(false);
        setError(true);
        break;
      case "400":
        alert("Bad Request - malformed request");
        setLoading(false);
        setError(true);
        break;
      case "401":
        alert("Unauthorized - invalid or no authentication details provided");
        setLoading(false);
        setError(true);
        break;
      default:
        setLoading(false);
        setError(true);
        break;
    }
  };

  async function updateState() {
    // let maxCount = await this.anime.getCountAllAnime();
    onLoadingAnime();
    const id = getRandomNumber(0, 18500);
    await anime
      .getAnime(id)
      .then((data) => {
        if ("status" in data) {
          onErrorLoad(data.status);
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
    if (title.length > 30) {
      return `${title.slice(0, 30)}...`;
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
        <div className="title">{checkTitleLength(title)}</div>
        <div className="random-manga__descr">
          {checkDescriptionLength(description)}
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
