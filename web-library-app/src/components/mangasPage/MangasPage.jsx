// basics
import { useState, useEffect } from "react";

// Components
import NavManga from "./headerMangaPage/HeaderMangaPage";
import MangaList from "./mangaList/MangaList";
import SearchPanelManga from "./searchManga/SearchManga";

// images
import onePiece from "../../assets/imgs/cards/one-piece.jpg";
import spyFamily from "../../assets/imgs/cards/spy-family.jpeg";
import chainsawMan from "../../assets/imgs/cards/chaisaw-man.jpeg";

const MangasPage = () => {
  const [data, setData] = useState([
    {
      title: "One Piece",
      image: onePiece,
      available: "9.99$",
      category: "fantasy",
    },
    {
      title: "Spy Family",
      image: spyFamily,
      available: "NOT AVAILABLE",
      category: "drama",
    },
    {
      title: "Chainsaw Man",
      image: chainsawMan,
      available: "9.99$",
      category: "drama",
    },
    {
      title: "One Piece",
      image: onePiece,
      available: "9.99$",
      category: "adventure",
    },
    {
      title: "Spy Family",
      image: spyFamily,
      available: "9.99$",
      category: "everyday",
    },
    {
      title: "Chainsaw Man",
      image: chainsawMan,
      available: "9.99$",
      category: "fantasy",
    },
    {
      title: "One Piece",
      image: onePiece,
      available: "NOT AVAILABLE",
      category: "comedy",
    },
    {
      title: "Spy Family",
      image: spyFamily,
      available: "9.99$",
      category: "comedy",
    },
    {
      title: "Chainsaw Man",
      image: chainsawMan,
      available: "9.99$",
      category: "romantic",
    },
  ]);
  const [valueCategory, setValueCategory] = useState("");
  const [search, setSearch] = useState("");

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
        return Object.values(item).some((value) => value.includes(category));
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
