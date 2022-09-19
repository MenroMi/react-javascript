import WhoAmI from './props';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>;
}

// class Field extends Component {
//   render() {
//     const holder = 'Enter here';
//     const styles = {boxShadow: "0px 0px 5px blue"};
//     return <input placeholder= {holder} type="text" style={styles}/>
//   };
// }

// function Field() {
//   const holder = 'Enter here';
//   const styles = {
//     boxShadow: "0px 0px 5px blue"
//   };
//   return <input placeholder= {holder} type="text" style={styles}/>
// }

  

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Актуальное время: {this.state.date.toLocaleTimeString()}</h2>
      </header>
    </div>
    );
  }
}

export {Header};
export default App;
