// basic
import { Component, PureComponent } from "react";

// components
import RequestResources from "../service/requestNewPhoto";

// images
import iconRefresh from "../../assets/001-refresh.svg";

// style
import "./PhotoItem.scss";

class PhotoItem extends PureComponent {
  state = {
    loadItem: false,
    error: false,
  };

  onLoadItem = (loadItem) => {
    this.setState({ loadItem });
  };

  onRefreshPhoto = async (id) => {
    this.onLoadItem(true);
    let request = new RequestResources();
    let user = await request.getPhoto(id);
    this.props.onSetNewPhoto(user);
    this.onLoadItem(false);
  };

  render() {
    const { name, image, id } = this.props;
    const { loadItem } = this.state;

    return (
      <a
        onClick={() => this.onRefreshPhoto(id)}
        className="square-new-photo"
        href="#"
      >
        <img
          className={`photo ${loadItem ? " photo_reload" : ""}`}
          src={image}
          alt={name}
        />
        <img
          className={`icon-refresh ${loadItem ? " icon-refresh_reload" : ""}`}
          src={iconRefresh}
          alt="icon for refresh random photo"
        />
      </a>
    );
  }
}

export default PhotoItem;
