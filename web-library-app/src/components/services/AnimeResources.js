import pic from "../../assets/icons/animeBoom.png";

// hook - http
import { useHttp } from "../hooks/http.hook";

export default function useResources() {
  const _apiBase = "https://kitsu.io/api/edge/";
  const baseOffset = 0;
  const { loading, error, onRequest, clearError } = useHttp();
  const { getAllAnime, getAnime, getAnimeCategory, getAnimeRelationship } =
    useAnime(`${_apiBase}/anime`, onRequest, baseOffset);
  const { getAllManga, getSingleManga, getMangaSeries } = useManga(
    `${_apiBase}/manga`,
    onRequest,
    baseOffset
  );

  return {
    loading,
    error,
    clearError,
    getAllAnime,
    getAnime,
    getAnimeCategory,
    getAnimeRelationship,
    getAllManga,
    getSingleManga,
    getMangaSeries,
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
    const categories = await getMangaCategory(url, res.id);

    const m = res.attributes;
    // console.log(m.posterImage.small);
    return {
      title:
        m.canonicalTitle.length >= 20
          ? `${m.canonicalTitle.slice(0, 18)}...`
          : m.canonicalTitle,
      image: !!m.posterImage.small ? m.posterImage.small : pic,
      imageSingle: m.posterImage.original,
      descr: m.description,
      rate: m.averageRating ? m.averageRating + "%" : "Don't exist",
      category: categories,
      id: res.id,
    };
  };

  const getMangaCategory = async (url, id) => {
    const categories = await request(`${url}/${id}?include=categories`);

    if (typeof categories.included === "undefined") {
      return [];
    }

    return categories.included.map((ctg) => ctg.attributes.title);
  };

  const getAllManga = async (offset = baseOffset) => {
    const mangaList = await request(
      `${url}?page[limit]=8&page[offset]=${offset}`
    ).then((data) => data.data);
    return await mangaList.map((manga) => _mangaTitle(manga));
  };

  const getSingleManga = async (id) => {
    const singleManga = await request(`${url}/${id}`).then((data) => data.data);
    // console.log(singleManga);
    return _mangaTitle(singleManga);
  };

  const getMangaSeries = async (id, link = url) => {
    const res = await request(`${link}/${id}/?include=characters`);
    return res;
  };

  return { getAllManga, getSingleManga, getMangaSeries };
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
