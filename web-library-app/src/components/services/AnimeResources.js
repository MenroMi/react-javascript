class AnimeResources {

    getResources = async (url) => {
        const req = await fetch(url, {
            headers: { "Content-type": "application/vnd.api+json" }
        });

        if (!req.ok) { throw new Error(`Could not fetch: ${url}. This is error have status: ${req.statusText}`) }

        return await req.json();
    }

    checkDescriptionLength = (descr) => {
        if (descr.length > 200) {
            return `${descr.slice(0, 200)}...`;
        }
        return descr;
    }

    isEmptyDescription = (descr) => {
        return descr.length <= 0 ? "Sorry, but this title dont have any description" : descr;
    }

}


class Anime extends AnimeResources {

    #apiBase = "https://kitsu.io/api/edge/anime";

    #animeTitle = (res) => {

        let data = res.data.attributes;

        return {
            title: data.canonicalTitle,
            description: this.checkDescriptionLength(this.isEmptyDescription(data.description)),
            posterImage: data.posterImage.small,
            homepage: res.data.links.self,
            wiki: res.data.relationships.animeCharacters.links.related
        }
    }

    getAllAnime = async () => {
        let animeList = await this.getResources(`${this.#apiBase}?page[limit]=9&page[offset]=0`).then(data => data.data);


        return animeList;
    }

    getCountAllAnime = async () => {
        return await this.getResources(`${this.#apiBase}`).then(data => data.meta.count);
    }

    getAnime = async (id) => {

        const oneTitle = await this.getResources(`${this.#apiBase}/${id}`);
        return this.#animeTitle(oneTitle);
    }

    getAnimeCategory = (id) => {
        return this.getResources(`${this.#apiBase}/${id}/categories`);
    }
}

export { Anime };


