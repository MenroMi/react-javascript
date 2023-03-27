// basics
import { useState, useEffect } from "react";
import useResources from "../services/AnimeResources";
import { Outlet } from "react-router-dom";

// Components
import NavManga from "./headerMangaPage/HeaderMangaPage";
import MangaList from "./mangaList/MangaList";
import SearchPanelManga from "./searchManga/SearchManga";
import Spinner from "../reusabilityComponents/spinnerLoading/Spinner";
import ErrorMessage from "../reusabilityComponents/errorValidate/ErrorValidate";

const MangasPage = () => {
  const [valueCategory, setValueCategory] = useState("");
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const { getAllManga, error } = useResources();

  const setManga = async () => {
    let res = await getAllManga(offset).then((data) => Promise.all(data));
    setData((arr) => [...arr, ...res]);
    setOffset((offset) => offset + 8);
    setLoadingBtn(false);
  };

  useEffect(() => {
    setManga();
  }, []);

  const onChangeValueCategory = (res) => {
    setValueCategory(res);
  };

  const onChangeSearchValue = (search) => {
    setSearch(search);
  };

  const onResetValue = () => {
    setSearch("");
  };

  const onSearchByCategory = (category, items) => {
    if (category === "all" || Object.keys(category).length === 0) {
      return items;
    } else {
      return items.filter((item) => {
        const arrCategories = Object.values(item).find((elem) =>
          Array.isArray(elem)
        );

        return arrCategories.some((value) => value.toLowerCase() === category);
      });
    }
  };

  const onSearchByWords = (term, items) => {
    if (term.length === 0) {
      return items;
    } else {
      return items.filter((item) =>
        item.title.toLowerCase().startsWith(term.toLowerCase())
      );
    }
  };

  const filterCategory = onSearchByWords(
    search,
    onSearchByCategory(valueCategory, data)
  );

  const visibleData =
    filterCategory.length <= 0 ? (
      <Spinner styles={{ marginTop: "80px" }} />
    ) : (
      <MangaList
        setManga={setManga}
        data={filterCategory}
        loading={loadingBtn}
        setLoading={setLoadingBtn}
      />
    );

  return (
    <div className="mangaPage">
      <NavManga />
      <SearchPanelManga
        propSearch={search}
        onResetValue={onResetValue}
        onChangeValueCategory={onChangeValueCategory}
        chooseCategory={onSearchByCategory}
        onChangeSearchValue={onChangeSearchValue}
      />
      {error ? <ErrorMessage /> : visibleData}
    </div>
  );
};

export default MangasPage;
