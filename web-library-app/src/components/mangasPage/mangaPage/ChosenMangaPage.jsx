// basics
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useResources from "../../services/AnimeResources";
import ErrorMessage from "../../reusabilityComponents/errorValidate/ErrorValidate";
import Spinner from "../../reusabilityComponents/spinnerLoading/Spinner";

// styles
import "./ChosenMangaPage.scss";

export default function ChosenManga() {
  const { mangaId } = useParams();
  const [manga, setManga] = useState(null); // info about chosen manga
  const [series, setSeries] = useState(null);
  const { loading, error, getSingleManga, getMangaSeries } = useResources();

  useEffect(() => {
    getSingleManga(mangaId).then((data) => setManga(data));
  }, [mangaId]);

  let visibleManga = manga ? <ViewManga manga={manga} /> : <Spinner />;

  return visibleManga;
}

const ViewManga = ({ manga }) => {
  const { image, title, descr, category } = manga;

  return (
    <div className="manga">
      <img src={image} alt={title} className="manga__image" />
      <div className="manga__information-wrapper">
        <h2 className="manga-title">{title}</h2>
        <p className="manga-description">
          {descr}
          <br />
          <br />
          Categories:
          {category.sort().map((ctg, i) => (
            <Link
              key={i}
              style={{
                margin: " 2px",
                padding: "5px",
                border: "1px solid black",
              }}
              className="manga-category"
              to="/mangas"
            >
              {ctg}
            </Link>
          ))}
        </p>
        <h6 className="manga-cost">Similar titles:</h6>
      </div>
      <Link to="/mangas" className="manga__back-to-all">
        Back to all
      </Link>
    </div>
  );
};
