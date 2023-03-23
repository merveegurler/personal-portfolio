import React from "react";
import { Container, Nav } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import projectImg1 from "../assets/img/furniture1.png";
import projectImg2 from "../assets/img/gtu_app.jpeg";
import { useNavigate, Link } from "react-router-dom";
import { Project1 } from "./projects/Project1/Project1";
export default Project1;

export const Projects = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate("./Project1");
  };

  const navigateHome = () => {
    navigate("./Projects");
  };

  return (
    <div id="projects">
      <Container id="projects-con">
        <h1 id="proje">Projeler</h1>
        <div id="projects-col">
          <Nav>
          <Nav.Item className="project3 project">
              <Nav.Link href="./Project3">
                <Row>
                  <img src={projectImg2} alt="" id="project-img1" />
                  <h2>GTU App</h2>
                </Row>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="project1 project">
              <Row>
                <Nav.Link href="./projects/Project1/Project1.js">
                  <div id="black-backg">
                    <img src={projectImg1} alt="" id="project-img1" />
                  </div>
                  <h2>Mobilya Şirketi Otomasyonu</h2>
                </Nav.Link>
              </Row>
            </Nav.Item>
            {/* <Nav.Item className="project2 project">
              <Nav.Link href="./Project2">
                <Row>
                  <img src={projectImg1} alt="" id="project-img1" />
                  <h2>Hastane Otomasyonu</h2>
                </Row>
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item className="project4 project">
              <Nav.Link href="./Project4">
                <Row>
                  <img src={projectImg1} alt="" id="project-img1" />
                  <h2>Drum Machine</h2>
                </Row>
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </div>
      </Container>
    </div>
  );
};
