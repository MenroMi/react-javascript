import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

// pages
import App from './components/app/app';


window.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})
