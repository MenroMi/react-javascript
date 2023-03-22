// basics
import { useState, useEffect } from "react";

// plugins
import PropTypes from "prop-types";

// styles
import "./animeItem.scss";

const AnimeItem = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const checkTitleLength = (title) => {
    return title.length > 27 ? `${title.slice(0, 27)}...` : title;
  };

  const changeStateLoadingError = () => {
    setLoading(props.loading);
    setError(props.error);
  };

  useEffect(() => {
    changeStateLoadingError();
  }, []);

  const validTitle = checkTitleLength(props.title);
  const content = !(loading || error) ? (
    <ViewAnimeItem
      image={props.posterImage}
      validTitle={validTitle}
      title={props.title}
      homepage={props.homepage}
    />
  ) : null;
  return (
    <li className="card" tabIndex="0" onFocus={() => props.onVisible(props.id)}>
      {content}
    </li>
  );
};

const ViewAnimeItem = ({ image, title, validTitle, homepage }) => {
  // rendering component without logic
  return (
    <>
      <img src={image} alt={title} className="card__image" />
      <div className="title title_card">
        {validTitle}
        <a href={homepage} target="_blank" rel="noreferrer">
          More Info
        </a>
      </div>
    </>
  );
};

AnimeItem.propTypes = {
  id: PropTypes.number,
};

export default AnimeItem;
