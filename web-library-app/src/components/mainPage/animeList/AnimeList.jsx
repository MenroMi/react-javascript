// basics
import { useState, useEffect } from "react";

// services
import useResources from "../../services/AnimeResources";
// Components
import AnimeItem from "../animeItem/AnimeItem";
import DetailInformation from "../../reusabilityComponents/detailInformation/DetailInformation";
import ErrorMessage from "../../reusabilityComponents/errorValidate/ErrorValidate";
import Spinner from "../../reusabilityComponents/spinnerLoading/Spinner";
import ErrorBoundary from "../../errorBoundary/ErrorBoundary";

// icons
import loadingSVG from "../../../assets/icons/loadingMorePage.svg";
// styles
import "./AnimeList.scss";

const AnimeList = () => {
  // states
  const [data, setData] = useState([]);
  const [loadingMore, setLoadingMore] = useState(true);
  const [numb, setNumb] = useState(1); // for detail information
  const [offset, setOffset] = useState(0); // today max 18810
  const [endedOffset, setEndedOffset] = useState(false);
  const [newItemsLoading, setNewItemsLoading] = useState(true);

  const { loading, error, getAllAnime } = useResources();
  console.log(loading, error);
  const onLoadedAnime = (newItems) => {
    let end = false;
    if (newItems == null || newItems.length < 9) {
      end = true;
    }

    setOffset((off) => off + 9);
    setData((data) => [...data, ...newItems]);
    setEndedOffset(end);
    setLoadingMore(false);
    setNewItemsLoading(false);
  };
  const onChangeVisibleDetails = (numb) => {
    setNumb(numb);
  };

  async function onRequestAnime() {
    setLoadingMore(true);
    // const req = await this.anime.getAllAnime(offset);
    await getAllAnime(offset) // request for list of anime
      .then(onLoadedAnime);
  }

  const iterationItems = (data, loading, error) => {
    console.log(data);
    return data.map(({ id, ...info }) => {
      return (
        <AnimeItem
          {...info}
          loading={loading}
          error={error}
          key={id}
          id={id}
          onVisible={(id) => onChangeVisibleDetails(id)}
        />
      );
    });
  };

  const detailsInfo = (loading, error, visibleDetails) => {
    if (!(loading || error) && visibleDetails.length > 0) {
      return (
        <DetailInformation
          data={visibleDetails}
          onChangeVisible={onChangeVisibleDetails}
        />
      );
    } else {
      return <Spinner />;
    }
  };

  const autoChangeOffset = () => {
    if (
      parseInt(window.innerHeight + document.documentElement.scrollTop) ===
      document.documentElement.offsetHeight + 10
    ) {
      setNewItemsLoading(true);
    }

    return;
  };

  useEffect(() => {
    // console.log("useeffect - listener");
    window.addEventListener("scroll", autoChangeOffset);
    return () => window.removeEventListener("scroll", autoChangeOffset);
  }, []);

  useEffect(() => {
    // console.log("useeffect - request new animes");

    if (newItemsLoading && !endedOffset) {
      onRequestAnime();
    }
  }, [newItemsLoading]);

  const items = iterationItems(data, loading, error);
  const visibleDetails = data.filter((item) => item.id === numb);

  const load = loading ? <Spinner styles={{ gridColumn: "1/4" }} /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const details = detailsInfo(loading, error, visibleDetails);

  // console.log("render list");
  return (
    <div className="cards-with-info">
      <ul className="list-anime">
        {load}
        {errorMessage}
        {items}
        <li>
          <button
            className="button button_load"
            disabled={loadingMore}
            style={{ display: endedOffset || error ? "none" : "block" }}
            onClick={() => onRequestAnime()}
          >
            {loadingMore ? (
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
      <ErrorBoundary>{details}</ErrorBoundary>
    </div>
  );
};

export default AnimeList;
