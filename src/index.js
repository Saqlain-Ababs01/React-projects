import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './components/App';
import './components/index.css';
import "./components/Cards.css";
// import "./Resturant/App";
// import App from './Resturant/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App/>
    </BrowserRouter>
    {/* <App/> */}
  </React.StrictMode>
);

