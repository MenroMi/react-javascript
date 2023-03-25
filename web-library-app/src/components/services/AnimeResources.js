// import plugIMG from "../../assets/icons/icons8-kuromi.svg";

// hook - http
import { useHttp } from "../hooks/http.hook";

export default function useResources() {
  const _apiBase = "https://kitsu.io/api/edge/";
  const baseOffset = 0;
  const { loading, error, onRequest } = useHttp();
  const { getAllAnime, getAnime, getAnimeCategory, getAnimeRelationship } =
    useAnime(`${_apiBase}/anime`, onRequest, baseOffset);
  const { getAllManga } = useManga(`${_apiBase}/manga`, onRequest, baseOffset);

  return {
    loading,
    error,
    getAllAnime,
    getAnime,
    getAnimeCategory,
    getAnimeRelationship,
    getAllManga,
  };
}

function useAnime(url, request, baseOffset) {
  const _isEmptyDescription = (descr) => {
    return descr.length <= 0 || !descr
      ? "Sorry, but this title dont have any description"
      : descr;
  };

  const animeTitle = (res) => {
    let data = res.attributes;
    return {
      title: data.canonicalTitle,
      description: data.description,
      posterImage: data.posterImage.small,
      homepage: res.links.self,
      wiki: res.relationships.animeCharacters.links.related,
      alt: data.slug,
      id: +res.id,
    };
  };

  const getAllAnime = async (offset = baseOffset) => {
    let animeList = await request(
      `${url}?page[limit]=9&page[offset]=${offset}`
    ).then((data) => data.data);
    return animeList.map((item) => animeTitle(item));
  };

  const getAnime = async (id) => {
    const oneTitle = await request(`${url}/${id}`);

    if ("errors" in oneTitle) {
      return oneTitle.errors[0].status;
    }

    return animeTitle(oneTitle.data);
  };

  const getAnimeCategory = (id) => {
    return request(`${url}/${id}/categories`);
  };

  const getAnimeRelationship = async (id) => {
    return await request(
      `${url}/${id}/?include=mediaRelationships.destination`
    );
  };

  return {
    getAllAnime,
    getAnime,
    getAnimeCategory,
    getAnimeRelationship,
  };
}

function useManga(url, request, baseOffset) {
  const _mangaTitle = async (res) => {
    let categories = await getMangaCategory(
      // array of objects
      res.relationships.categories.links.self
    );
    const m = res.attributes;
    return {
      title: m.canonicalTitle,
      image: m.posterImage.small,
      rate: m.averageRating ? m.averageRating + "%" : "Don't exist",
      category: categories,
    };
  };

  const getMangaCategory = async (url) => {
    const _apiManga = `https://kitsu.io/api/edge/categories/`;
    const mangaCategory = await request(url).then((data) => data.data);
    let categoryIDs = mangaCategory.reduce((prev, curr) => {
      for (let key in curr) {
        if (key === "id") {
          prev.push(curr[key]);
          continue;
        }
      }
      return prev;
    }, []);

    if (categoryIDs.length > 3) {
      categoryIDs.length = 3;
    }

    const categoriesPromises = categoryIDs.map(async (id) => {
      return await request(`${_apiManga}/${id}`);
    });

    let categoriesNames = Promise.all(categoriesPromises).then((data) =>
      data.map((objCategory) => objCategory.data.attributes.title)
    );

    return categoriesNames.then((data) => data);
  };

  const getAllManga = async (offset = baseOffset) => {
    const mangaList = await request(
      `${url}?page[limit]=8&page[offset]=${offset}`
    ).then((data) => data.data);
    return await mangaList.map((manga) => _mangaTitle(manga));
  };

  return { getAllManga };
}

/**
 * amount all anime titles

    const getCountAllAnime = async () => {
    let resCount = await onRequest(`${apiBase}`);
    return resCount.meta.count;
  };

 */

/**
 * get anime relationships with another links with resources

  const getAnimeRelationship = async (id) => {
    return await onRequest(
      `${apiBase}/${id}/?include=mediaRelationships.destination`
    );
  };

 */
