import React from 'react';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {Experiences} from "./components/Experiences";
import './App.css';

export function App() {
  return (
      <div id="home">
        <NavBar />
        <Layout />
      </div>
  );
}

export const Layout = () => {
  return (
    <>
      <Banner />
      <Experiences />
      <Skills />
      <Projects/>
    </>
  );
}

export default App;
