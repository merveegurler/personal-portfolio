import React from "react";
import { Container, Nav } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import projectImg1 from "../assets/img/furniture1.png";
import projectImg2 from "../assets/img/gtu_app.jpeg";
import projectImg3 from "../assets/img/app_view.png"
import projectImg4 from "../assets/img/soft_keyboard.png"
import { useNavigate, Link } from "react-router-dom";
import { Project1 } from "./projects/project1/Project1";
import { Project2 } from "./projects/Project2";
import { Project3 } from "./projects/Project3";
import { Project4 } from "./projects/Project4";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Projects = () => {
  return (
    <div id="projects">
      <Container id="projects-con">
        <h2 id="proje">Projeler</h2>
        <div id="projects-col">
          <Routes>
            <Route exact path="*" element={
              <div class= "row links" style={{display: "flex"}}>
                <Link to="/projects/Project2">
                  <Row>
                    <img src={projectImg2} alt="" id="project-img2" />
                    <h4>GTU App</h4>
                  </Row>
                </Link>
                <Link to="/projects/project1/Project1">
                  <Row>
                  <div id="black-backg">
                    <img src={projectImg1} alt="" id="project-img1" />
                  </div>
                  <h4>Mobilya Şirketi Otomasyonu</h4>
                  </Row>
                </Link>
                <Link to="/projects/Project3" >
                  <Row>
                    <img src={projectImg3} alt="" id="project-img3"/>
                    <h4>ECG Analysis For Heart Condition Monitoring</h4>
                  </Row>
                </Link>
                <Link to="/projects/Project4">
                  <Row>
                    <img src={projectImg4} alt="" id="project-img4" />
                    <h4>Disablity Typer Using Head</h4>
                  </Row>
                </Link>
              </div>
            }>

            </Route>
            <Route exact path="/projects/project1/Project1" element={<Project1 />}></Route>
            <Route exact path="/projects/Project2" element={<Project2 />}></Route>
            <Route exact path="/projects/Project3" element={<Project3 />}></Route>
            <Route exact path="/projects/Project4" element={<Project4 />}></Route>
          </Routes>
        </div>
      </Container>
    </div>
  );
};
