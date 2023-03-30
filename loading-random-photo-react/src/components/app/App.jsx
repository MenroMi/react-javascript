// basic
import { Component } from "react";

// components
import PhotoList from "../photoList/PhotoList";

// style
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="box">
        <PhotoList />
      </div>
    );
  }
}

export default App;
