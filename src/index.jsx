import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import MainLayout from './layouts/MainLayout';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { Provider } from 'react-redux/es/exports';
import { store } from './reducers/store/authSlice';
import i18n from "./config/i18n";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
      <Provider store={store}>      
      <App />
    </Provider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

