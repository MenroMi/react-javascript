import { Component } from "react";
import data from "./data/data.json";
import SearchPanel from "./components/search-panel/searchPanel";
import styled from "styled-components";

import './App.css';



const Data = styled.ul`
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0,0,0.1);
  width: 400px;
  margin: 0 auto;
  padding: 0;
`;



class Database extends Component {

  giveElementOfList = (data) => {
    return data.map(({ id, first_name }) => {
      return <li key={id}>{first_name}</li>
    })
  }


  render() {

    const { data } = this.props;

    return (
      <Data>
        {this.giveElementOfList(data)}
      </Data>
    )
  }


}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
  }

  onUpdateSearch = (data, term) => {
    if (term.length === 0) { return data }
    return data.filter(item => item.first_name.toLowerCase().startsWith(term.toLowerCase()));
  }

  onUpdateTerm = (term) => {
    this.setState({ term });
  }

  render() {

    const dbUsers = data.map(({ id, ...val }) => {
      return { id, ...val };
    });
    const { term } = this.state;
    const visibleData = this.onUpdateSearch(dbUsers, term);

    return (
      <div className='App'>
        <SearchPanel onUpdateTerm={this.onUpdateTerm} />
        <Database data={visibleData} />
      </div>
    )
  }
}

export default App;
