import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Project1} from './components/projects/Project1/Project1';
import {Project2} from './components/projects/Project2';
import {Project3} from './components/projects/Project3';
import {Project4} from './components/projects/Project4';


import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }/>
        <Route path="/Project1" element={<Project1/>} />
        <Route path="/Project2" element={<Project2/>} />
        <Route path="/Project3" element={<Project3/>} />
        <Route path="/Project4" element={<Project4/>} />
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
