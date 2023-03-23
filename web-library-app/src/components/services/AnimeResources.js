// import plugIMG from "../../assets/icons/icons8-kuromi.svg";

// hook - http
import { useHttp } from "../hooks/http.hook";

const useAnimeResources = () => {
  const { loading, error, onRequest } = useHttp();

  const apiBase = "https://kitsu.io/api/edge/anime";
  const baseOffset = 0;

  const isEmptyDescription = (descr) => {
    return descr.length <= 0
      ? "Sorry, but this title dont have any description"
      : descr;
  };

  const animeTitle = (res) => {
    let data = res.attributes;
    return {
      title: data.canonicalTitle,
      description: isEmptyDescription(data.description),
      posterImage: data.posterImage.small,
      homepage: res.links.self,
      wiki: res.relationships.animeCharacters.links.related,
      alt: data.slug,
      id: +res.id,
    };
  };

  const getAllAnime = async (offset = baseOffset) => {
    let animeList = await onRequest(
      `${apiBase}?page[limit]=9&page[offset]=${offset}`
    ).then((data) => data.data);
    return animeList.map((item) => animeTitle(item));
  };

  const getAnime = async (id) => {
    const oneTitle = await onRequest(`${apiBase}/${id}`);

    if ("errors" in oneTitle) {
      return oneTitle.errors[0].status;
    }

    return animeTitle(oneTitle.data);
  };

  const getAnimeCategory = (id) => {
    return onRequest(`${apiBase}/${id}/categories`);
  };

  const getAnimeRelationship = async (id) => {
    return await onRequest(
      `${apiBase}/${id}/?include=mediaRelationships.destination`
    );
  };

  return {
    loading,
    error,
    getAllAnime,
    getAnime,
    getAnimeCategory,
    getAnimeRelationship,
  };
};

export default useAnimeResources;

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
