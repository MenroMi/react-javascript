// basics
import { useState, useEffect, useMemo } from "react";

// plugins
import PropTypes from "prop-types";

// services
import { Anime } from "../../services/AnimeResources";

// components
import Spinner from "../spinnerLoading/Spinner";
import ErrorMessage from "../errorValidate/ErrorValidate";

// styles
import "./DetailInformation.scss";

const DetailInformation = ({ data }) => {
  const anime = new Anime();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [series, setSeries] = useState(null);

  const onLoadingAnime = () => {
    setLoading(true);
  };

  const onErrorMessage = () => {
    setError(true);
  };

  const checkLengthSeries = (arr) => {
    if (arr.length <= 0) {
      return "This title doesn't have more anime or manga.";
    }

    return arr
      .map((item, i) => {
        if (i >= 15) {
          return null;
        }

        return (
          <li key={i} className="title-details__manga-item">
            {item.title}
          </li>
        );
      })
      .filter((item) => item !== null);
  };

  const checkLengthDescription = (arr) => {
    if (arr.length === 0) return;

    return arr[0].description.length >= 800
      ? `${arr[0].description.slice(0, 800)}...`
      : arr[0].description;
  };

  const information = useMemo(() => data[0], [data]);

  useEffect(() => {
    checkRelation();
  }, [information]);

  async function checkRelation() {
    const [{ id }] = data;

    onLoadingAnime();
    let series = await anime
      .getAnimeRelationship(id)
      .then((data) => data.included)
      .catch(() => onErrorMessage);
    if (series === undefined || series.length === 0 || !series) {
      setSeries([]);
      setLoading(false);
    } else {
      let arrSeries = series
        .map((item) => {
          return item.type === "anime" || item.type === "manga"
            ? { title: item.attributes.canonicalTitle, type: item.type }
            : null;
        })
        .filter((item) => item !== null);

      setSeries(arrSeries);
      setLoading(false);
    }
  }

  let moreFromSeries = series === null ? null : checkLengthSeries(series);
  let shortDescr = checkLengthDescription(data);

  // let skeleton = !(loading || error || visible) ? <Skeleton variant="circular"><ViewDetails data={data[0]} series={moreFromSeries} descr={shortDescr} /></Skeleton> : null;
  let load = loading ? <Spinner /> : null;
  let errorMessage = error ? <ErrorMessage /> : null;
  let details = !(loading || error) ? (
    <ViewDetails
      data={data.length === 0 ? [{ title: "unknowed" }] : data[0]}
      series={moreFromSeries}
      descr={shortDescr}
    />
  ) : null;

  return (
    <div className="title-details">
      {errorMessage}
      {load}
      {details}
    </div>
  );
};

const ViewDetails = ({ data, series, descr }) => {
  const { title, posterImage, homepage, wiki } = data;
  return (
    <>
      <div className="title-details__container">
        <img src={posterImage} alt={title} className="title-details__img" />
        <h2 className="title">{title}</h2>
        <a className="title-details__links" href={homepage}>
          <button tabIndex="-1" className="button button_main">
            Homepage
          </button>
        </a>
        <a className="title-details__links" href={wiki}>
          <button tabIndex="-1" className="button button_submain">
            WIKI
          </button>
        </a>
        <div className="title-details__descr">{descr}</div>
      </div>
      <div className="title-details__manga">
        <h3 className="title-details__manga-subtitle">More from series:</h3>
        <ul className="title-details__manga-list">{series}</ul>
      </div>
    </>
  );
};

DetailInformation.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired),
  onChangeVisible: PropTypes.func.isRequired,
};

export default DetailInformation;
