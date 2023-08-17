import React from 'react';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {Experiences} from "./components/Experiences";
import {Project1} from './components/projects/project1/Project1';
import {Route, Routes, Link} from "react-router-dom";
import './App.css';

export function App() {
  return (
      <div id="home">
        <NavBar />
        <Layout />
        {/* <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Banner />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Project1" element={<Project1 />}/>
          </Route>
        </Routes> */}
      </div>
  );
}

export const Layout = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Banner />
      <Experiences />
      <Skills />
      <Projects/>
    </>
  );
}

export default App;
