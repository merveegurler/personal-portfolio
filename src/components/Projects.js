import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import projectImg1 from "../assets/img/furniture1.png";
import projectImg2 from "../assets/img/gtu_app.jpeg";
import projectImg3 from "../assets/img/app_view.png"
import projectImg4 from "../assets/img/soft_keyboard.png"
import { Link } from "react-router-dom";
import { Project1 } from "./projects/project1/Project1";
import { Project2 } from "./projects/Project2";
import { Project3 } from "./projects/Project3";
import { Project4 } from "./projects/Project4";

import { Routes, Route } from "react-router-dom";

export const Projects = () => {

  const projects = [["/projects/Project2", projectImg2, "GTU App", "project-img2"], 
                    ["/projects/project1/Project1", projectImg1, "Mobilya Şirketi Otomasyonu", "project-img1"],
                    ["/projects/Project3", projectImg3, "ECG Analysis For Heart Condition Monitoring", "project-img3"],
                    ["/projects/Project4", projectImg4, "Disablity Typer Using Head", "project-img4"]];

  const links = projects.map((project) => (
    <Link to={project[0]} >
        <Row>
          <img src={project[1]} alt="" id={project[3]}/>
          <h4>{project[2]}</h4>
        </Row>
      </Link>
  ));

  return (
    <div id="projects">
      <Container id="projects-con">
        <h2 id="proje">Projeler</h2>
        <div id="projects-col">
          <Routes>
            <Route exact path="*" element={
              <div class= "row links" style={{display: "flex"}}>
                {links}
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

