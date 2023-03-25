// basics
import { useState, useEffect } from "react";
import useResources from "../services/AnimeResources";

// Components
import NavManga from "./headerMangaPage/HeaderMangaPage";
import MangaList from "./mangaList/MangaList";
import SearchPanelManga from "./searchManga/SearchManga";

const MangasPage = () => {
  const [valueCategory, setValueCategory] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const { getAllManga } = useResources();

  useEffect(() => {
    const setManga = async () => {
      let res = await getAllManga().then((data) => Promise.all(data));
      return setData((arr) => [...arr, ...res]);
    };

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
      <MangaList data={filterCategory} />
    </div>
  );
};

export default MangasPage;
