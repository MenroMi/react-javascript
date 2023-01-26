import plugIMG from "../../assets/icons/icons8-kuromi.svg";
class AnimeResources {
  getResources = async (url) => {
    const req = await fetch(url, {
      header: { "Content-type": "application/vnd.api+json" },
    }).catch(() => req.errors);

    return req.json();
  };

  isEmptyDescription = (descr) => {
    return descr.length <= 0
      ? "Sorry, but this title dont have any description"
      : descr;
  };

  isEmptyPicture = (pic) => {
    return !pic ? plugIMG : pic;
  };
}

class Anime extends AnimeResources {
  #apiBase = "https://kitsu.io/api/edge/anime";

  #baseOffset = 0;

  #animeTitle = (res) => {
    let data = res.attributes;
    return {
      title: data.canonicalTitle,
      description: this.isEmptyDescription(data.description),
      posterImage: this.isEmptyPicture(data.posterImage.small),
      homepage: res.links.self,
      wiki: res.relationships.animeCharacters.links.related,
      alt: data.slug,
      id: +res.id,
    };
  };

  getAllAnime = async (offset = this.#baseOffset) => {
    let animeList = await this.getResources(
      `${this.#apiBase}?page[limit]=9&page[offset]=${offset}`
    ).then((data) => data.data);
    return animeList.map((item) => this.#animeTitle(item));
  };

  getCountAllAnime = async () => {
    let resCount = await this.getResources(`${this.#apiBase}`);
    return resCount.meta.count;
  };

  getAnime = async (id) => {
    const oneTitle = await this.getResources(`${this.#apiBase}/${id}`);
    return "errors" in oneTitle
      ? oneTitle.errors[0]
      : this.#animeTitle(oneTitle.data);
  };

  getAnimeCategory = (id) => {
    return this.getResources(`${this.#apiBase}/${id}/categories`);
  };

  getAnimeRelationship = async (id) => {
    return await this.getResources(
      `${this.#apiBase}/${id}/?include=mediaRelationships.destination`
    );
  };
}

export { Anime };
