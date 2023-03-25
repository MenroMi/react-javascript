// router
import { Link } from "react-router-dom";

// styles
import "./MangaItem.scss";

const MangaItem = ({ image, title, rate }) => {
  return (
    <li className="mangaItem" tabIndex="0">
      <img src={image} alt={title} className="mangaItem__image" />
      <div className="title title_card">
        {title}
        <Link to={`/mangas/`}>More Info</Link>
        <h3 className="mangaItem__subtitle">{rate}</h3>
      </div>
    </li>
  );
};

export default MangaItem;
