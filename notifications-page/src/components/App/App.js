import { Component } from "react";
import WindowNotification from "../bg-window/background-window";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <p>Hello World!</p>
        <WindowNotification/>
      </div>
    )
  }
}

export default App;
