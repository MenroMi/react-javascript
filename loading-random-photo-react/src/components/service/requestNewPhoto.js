class RequestResources {
  _apiBase = "https://tinyfac.es/api/data";

  onRequest = async (limit = 1, quality = 0) => {
    try {
      let result = await fetch(
        `${this._apiBase}?limit=${limit}&quality=${quality}`
      );

      if (!result.ok) {
        switch (
          +result.status // here we can add more errors. but i saw only one: when we try call more than 20 photos.
        ) {
          case 429:
            throw new Error(
              `Limit requests. Try uploading a photo after a while!`
            );
        }
      }

      return result.json();
    } catch (error) {
      return error;
    }
  };

  getPhotos = async (limit) => {
    let arrUsers = await this.onRequest(limit);

    if (arrUsers.name === "Error") {
      return arrUsers;
    }

    let arrPhotos = arrUsers.map((user) => {
      return {
        name: `${user.first_name} ${user.last_name}`,
        image: user.url,
        id: user.id,
      };
    });
    return arrPhotos;
  };

  getPhoto = async (id) => {
    let user = await this.onRequest(1);

    if (user.name === "Error") {
      return user;
    }

    let res = user.map((u) => {
      return {
        name: `${u.first_name} ${u.last_name}`,
        image: u.url,
        id: id,
      };
    });
    return res;
  };
}

export default RequestResources;
