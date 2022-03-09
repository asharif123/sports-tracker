import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CountContextProvider } from "./ContextProvider";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
   <CountContextProvider
    value={{ characters: [], loading: true, loggedIn: false }}
  >
      <App />

  </CountContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

