// basics
import { Component } from 'react';

// plugins

// Components
import Nav from '../../reusabilityComponents/navigation/navigation';
import Banner from '../../reusabilityComponents/bannerHeader/bannerHeader';
// images 

// styles
import './headerMangaPage.scss';


class NavManga extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <header>
                <Nav />
                <Banner />
            </header>
        );
    }
}

export default NavManga;
