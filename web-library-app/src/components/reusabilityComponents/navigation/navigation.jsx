// basics
import { Component } from 'react';

// images 

// styles
import './Navigation.scss';

class Nav extends Component {
    render() {
        return (
            <nav className="navigation">
                <h1 className='navigation__title'><span>Anime</span> library portal</h1>
                <div className="navigation__menu">
                    <a id="category-anime" className="navigation__link" href="#top">Titles</a>
                    /
                    <a id="category-manga" className="navigation__link" href="#top">Manga</a>
                </div>
            </nav>
        );
    }
}

export default Nav;
