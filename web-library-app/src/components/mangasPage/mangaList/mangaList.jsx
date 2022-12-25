// basics
import { Component } from 'react';

// plugins
import { v4 as uuidv4 } from 'uuid';

// Components
import MangaItem from '../mangaItem/mangaItem';

// styles
import './mangaList.scss';


class MangaList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    iterationItems = (data) => {
        return data.map(({ ...info }) => {
            return <MangaItem {...info} key={uuidv4()} />
        })
    }

    render() {
        const { data } = this.props;
        const items = this.iterationItems(data);

        return (
            <div className="cardsManga">
                <ul className='list'>
                    {items}
                    <li>
                        <button className='button button_load'>Load more</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MangaList;
