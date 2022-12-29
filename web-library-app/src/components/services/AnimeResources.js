import plugIMG from "../../assets/icons/icons8-kuromi.svg";


class AnimeResources {

    getResources = async (url) => {
        const req = await fetch(url, {
            headers: { "Content-type": "application/vnd.api+json" }
        })
            .then(data => data.json())
            .catch((error) => new Error(`Could not fetch: ${url}. This is error have status: ${error.statusText}`));

        return req;
    }

    checkDescriptionLength = (descr) => {
        if (descr.length > 200) {
            return `${descr.slice(0, 200)}...`;
        }
        return descr;
    }

    checkTitleLength = (title) => {
        return title.length > 30 ? `${title.slice(0, 30)}...` : title;
    }

    isEmptyDescription = (descr) => {
        return descr.length <= 0 ? "Sorry, but this title dont have any description" : descr;
    }

    isEmptyPicture = (pic) => {
        return !pic ? plugIMG : pic;
    }

}


class Anime extends AnimeResources {

    #apiBase = "https://kitsu.io/api/edge/anime";

    #animeTitle = (res) => {
        let data = res.attributes;


        return {
            title: this.checkTitleLength(data.canonicalTitle),
            description: this.checkDescriptionLength(this.isEmptyDescription(data.description)),
            posterImage: this.isEmptyPicture(data.posterImage.small),
            homepage: res.links.self,
            wiki: res.relationships.animeCharacters.links.related,
            alt: res.slug,
        }
    }

    getAllAnime = async () => {
        let animeList = await this.getResources(`${this.#apiBase}?page[limit]=9&page[offset]=0`)
            .then(data => data.data);
        return animeList.map(item => this.#animeTitle(item));
    }

    getCountAllAnime = async () => {
        let resCount = await this.getResources(`${this.#apiBase}`);
        return resCount.meta.count;
    }

    getAnime = async (id) => {
        const oneTitle = await this.getResources(`${this.#apiBase}/${id}`).then(data => data.data);
        return this.#animeTitle(oneTitle);
    }

    getAnimeCategory = (id) => {
        return this.getResources(`${this.#apiBase}/${id}/categories`);
    }
}

export { Anime };