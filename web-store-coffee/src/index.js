import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

// pages
// import MainPage from './components/main-page/page/main-page';
// import CoffeePage from "./components/coffee-page/page/coffee-page"
import ProductPage from "./components/page-of-product/page/product-page"

window.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      {/* <MainPage /> */}
      {/* <CoffeePage /> */}
      <ProductPage />
    </React.StrictMode>
  );
})
