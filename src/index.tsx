import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchMovie from "./components/SearchMovie";
import Home from "./components/Home";
import Detail from "./components/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='home' element={<Home />} />
          <Route path='search' element={<SearchMovie />}>
            <Route path=':imdbID' element={<Detail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
