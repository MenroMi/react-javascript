// styles
import "./mangaItem.scss";

const MangaItem = ({ image, title, available }) => {
  return (
    <li className="mangaItem" tabIndex="0">
      <img src={image} alt={title} className="mangaItem__image" />
      <div className="title title_card">
        {title}
        <a href="#top">More Info</a>
        <h3 className="mangaItem__subtitle">{available}</h3>
      </div>
    </li>
  );
};

export default MangaItem;
