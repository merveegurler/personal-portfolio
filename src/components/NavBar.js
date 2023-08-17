import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo_transparent.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import React from 'react';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} id="main-navbar">
        <Container>
          <Navbar.Brand href="/">
            <img id="logo-img" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <HashLink to={"/Banner#home"} className="hashlink" onClick={() => onUpdateActiveLink('home')}>Home</HashLink>
              <HashLink to={"/Skills#skills"} className="hashlink" onClick={() => onUpdateActiveLink('skills')}>Skills</HashLink>
              <HashLink to={"/Projects#projects"} className="hashlink" onClick={() => onUpdateActiveLink('projects')}>Projects</HashLink>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/merve-g%C3%BCrler/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a rel="noopener noreferrer" href="https://github.com/merveegurler" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}