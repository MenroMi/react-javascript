// basics
import { Component } from 'react';

// plugins
import { v4 as uuidv4 } from 'uuid';

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
