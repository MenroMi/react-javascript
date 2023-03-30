// basic
import { PureComponent } from "react";

// service
import RequestResources from "../service/requestNewPhoto";

// components

// style
import "./BoxNewPhoto.scss";

class BoxNewPhoto extends PureComponent {
  state = {
    loading: false,
  };

  onLoad = (loading) => {
    this.setState({ loading });
  };

  getNewPhoto = async (limit) => {
    this.onLoad(true);
    let photo = new RequestResources();
    let arrPhotos = await photo.getPhotos(limit);
    this.props.onSetNewPhoto(arrPhotos);
    this.onLoad(false);
  };

  render() {
    const { error } = this.props;
    const { loading } = this.state;

    return (
      <div className="wrapper">
        <div
          className={`square-add-photo ${
            loading ? " square-add-photo_disactivated" : ""
          }`}
          onClick={() => this.getNewPhoto(1)}
        >
          <div className="square-add-photo__vertical"></div>
          <div className="square-add-photo__horizontal"></div>
        </div>
        <h3 className={`loading ${loading && !error ? " loading_active" : ""}`}>
          Loading...
        </h3>
      </div>
    );
  }
}

export default BoxNewPhoto;
