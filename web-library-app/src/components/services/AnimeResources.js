class AnimeResources {

    getResources = async (url) => {
        const req = await fetch(url, {
            headers: { "Content-type": "application/vnd.api+json" }
        });

        if (!req.ok) { throw new Error(`Could not fetch: ${url}. This is error have status: ${req.statusText}`) }
        return await req.json();
    }

}


class Anime extends AnimeResources {

    #apiBase = "https://kitsu.io/api/edge/anime";

    getAllAnime = async () => {
        return this.getResources(`${this.#apiBase}?page[limit]=9&page[offset]=0`);
    }

    getAnime = async (id) => {
        if (typeof id !== "number") {
            throw new Error("Attached id is not number.");
        }
        return await this.getResources(`${this.#apiBase}/${id}`);
    }
}

export { Anime };

/*
const animeRequest = new Anime();
animeRequest.getAllAnime().then(data => data.data.forEach(item => {
  console.log(item.attributes.canonicalTitle);
}));
animeRequest.getAnime(553).then(data => console.log(data.data.attributes.canonicalTitle)); 
*/