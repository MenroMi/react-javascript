// plugins
import { v4 as uuidv4 } from "uuid";

// Components
import MangaItem from "../mangaItem/MangaItem";
import loadingSVG from "../../../assets/icons/loadingMorePage.svg";

// styles
import "./MangaList.scss";

const MangaList = ({ data, setManga, setLoading, loading }) => {
  const iterationItems = (data) => {
    return data.map(({ id, ...info }) => {
      return <MangaItem {...info} id={id} key={uuidv4()} />;
    });
  };

  const items = iterationItems(data);

  return (
    <div className="cardsManga">
      <ul className="list-manga">
        {items}
        <li>
          <button
            disabled={loading}
            onClick={() => {
              setLoading(true);
              setManga();
            }}
            className="button button_load"
          >
            {loading ? (
              <img
                src={loadingSVG}
                alt="loading"
                style={{
                  position: "relative",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "50px",
                }}
              />
            ) : (
              "load more"
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MangaList;
