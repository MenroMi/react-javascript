// basic
import { NavLink } from "react-router-dom";

// styles
import "./Navigation.scss";

const Nav = () => {
  return (
    <header>
      <nav className="navigation">
        <h1 className="navigation__title">
          <NavLink className="home-page" to="/">
            Anime
          </NavLink>{" "}
          library portal
        </h1>
        <div className="navigation__menu">
          <ul>
            <li>
              <NavLink exact activeClassName="category-anime" to="/">
                Titles
              </NavLink>
            </li>
            <li> /</li>
            <li>
              <NavLink exact activeClassName="category-manga" to="/mangas">
                Manga
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
