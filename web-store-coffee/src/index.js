import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import MainPage from './components/main-page/page/main-page';
// import CoffeePage from "./components/coffee-page/page/coffee-page"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
    {/* <CoffeePage /> */}
  </React.StrictMode>
);
