// basic
import { Component, PureComponent } from "react";

// components
import BoxNewPhoto from "../boxNewPhoto/BoxNewPhoto";
import PhotoItem from "../photoItem/PhotoItem";
import ErrorMessage from "../errorMessage/ErrorMessage";

// style
import "./PhotoList.scss";

class PhotoList extends PureComponent {
  state = {
    photos: [],
    error: false,
    errorMessage: "",
  };

  onError = (error, msg) => {
    this.setState(() => {
      return {
        error: error,
        errorMessage: msg.message,
      };
    });
  };

  onRefreshAllPhotos = async () => {
    this.setState({ photos: [] });
    this.onError(false, "");
  };

  onSetNewPhoto = (photo) => {
    if (photo.name === "Error") {
      return this.onError(true, photo);
    }
    this.setState(({ photos }) => {
      let actualID = photos.findIndex((item) => item.id === photo[0].id);
      if (photos.length > 0 && actualID !== -1) {
        const newArr = [
          ...photos.slice(0, actualID),
          ...photo,
          ...photos.slice(actualID + 1),
        ];

        return {
          photos: newArr,
          error: false,
          errorMessage: "",
        };
      }

      return {
        photos: [...photos, ...photo],
        error: false,
        errorMessage: "",
      };
    });
  };

  showPhotoItem = (data) => {
    return data.map(({ id, name, image }) => {
      return (
        <PhotoItem
          key={id}
          id={id}
          name={name}
          image={image}
          onSetNewPhoto={this.onSetNewPhoto}
        />
      );
    });
  };

  render() {
    const { photos, error, errorMessage } = this.state;

    const errMessage = error ? (
      <ErrorMessage error={error} errorMessage={errorMessage} />
    ) : null;
    const visiblePhotos = this.showPhotoItem(photos);

    return (
      <>
        <div className="box-photos">
          {visiblePhotos}
          <BoxNewPhoto
            error={error}
            onError={this.onError}
            onSetNewPhoto={this.onSetNewPhoto}
          />
        </div>
        {errMessage}
        <button
          onClick={() => this.onRefreshAllPhotos(photos.length)}
          className="btn-refresh"
        >
          Refresh All
        </button>
      </>
    );
  }
}

export default PhotoList;
