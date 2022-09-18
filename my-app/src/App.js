import WhoAmI from './props';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>;
}

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styles = {boxShadow: "0px 0px 5px blue"};
    return <input placeholder= {holder} type="text" style={styles}/>
  };
}

// function Field() {
//   const holder = 'Enter here';
//   const styles = {
//     boxShadow: "0px 0px 5px blue"
//   };
//   return <input placeholder= {holder} type="text" style={styles}/>
// }

function Btn() {
  let content = 'Log in';
  const styles = {
    marginTop: "5px"
  }

  let click = false;

  if (click) {
    content = 'Clicked';
    return <button style={styles}>{content}</button>
  } else {
    return <button style={styles}>{content}</button>
  } 
}


  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Header/>
          <Field/>
          <Btn/>
          <WhoAmI name={ () => 'John' }surname="Smith" link="instagram.com"/>
          <WhoAmI name={ () => 'Alex' }surname="Smith" link="instagram.com"/>
          <WhoAmI name={ () => 'Kyle' }surname="Smith" link="instagram.com"/>
          <WhoAmI name={ () => 'Brett' }surname="Smith" link="instagram.com"/>
      </header>
    </div>
  );
}

export {Header};
export default App;
