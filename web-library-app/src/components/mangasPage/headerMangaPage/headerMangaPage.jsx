// basics
import { Component } from 'react';

// plugins

// Components
import Nav from '../../reusabilityComponents/navigation/Navigation';
import Banner from '../../reusabilityComponents/bannerHeader/BannerHeader';
// images 
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
