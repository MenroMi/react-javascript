// basics
import Nav from "../reusabilityComponents/navigation/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Pages */
import { MainPage, MangaPage } from "../pages";

/* Choosen Manga Page */
// import MangaPage from '../reusabilityComponents/mangaPage/MangaPage';

// styles
import "./App.scss";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/mangas">
            <MangaPage />
          </Route>
          {/* Page with choosen manga */}
          {/* <MangaPage /> */}
        </Switch>
      </div>
    </Router>
  );
}
