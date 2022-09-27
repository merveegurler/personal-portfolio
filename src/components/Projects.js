import React from "react";
import { Container, Nav } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import projectImg1 from "../assets/img/furniture1.png";
import {useNavigate, Link} from 'react-router-dom';
import {Project1} from "./projects/Project1/Project1";
export default Project1;

export const Projects = () => {
    const navigate = useNavigate();

    const navigateToContacts = () => {
        navigate('./Project1');
    };

    const navigateHome = () => {
        navigate('./Projects');
    };
    
    return (
        <div id="projects">
            <Container id="projects-con">
                <h1 id="proje">
                    Projeler
                </h1>
                <Col id="projects-col">
                    <Nav id="projects-col">
                    <Nav.Item id="projects-col-2" className="project1">
                        <div id="projects-col-2" className="project1" >
                            <Row>
                                <Nav.Link href="./Project1">
                                    <div id="black-backg">
                                    <img src={projectImg1} alt="" id="project-img1"/>
                                    </div>
                                    <h2>
                                        Mobilya Şirketi Otomasyonu
                                    </h2>
                                </Nav.Link>
                            </Row>
                        </div>
                    </Nav.Item>
                    <Nav.Item id="projects-col-2" className="project2">
                        <div id="projects-col-2" className="project2">
                            <Nav.Link href="./Project2">
                            <Row>
                                <img src={projectImg1} alt="" id="project-img1"/>
                                <h2>
                                    Hastane Otomasyonu
                                </h2>
                            </Row>
                            </Nav.Link>
                        </div>
                    </Nav.Item>
                    <Nav.Item id="projects-col-2" className="project3">
                        <div id="projects-col-2" className="project3">
                            <Nav.Link href="./Project3">
                            <Row>
                                <img src={projectImg1} alt="" id="project-img1"/>
                                <h2>
                                    GTU App
                                </h2>
                            </Row>
                            </Nav.Link>
                        </div>
                    </Nav.Item>
                    <Nav.Item id="projects-col-2" className="project4">
                        <div id="projects-col-2" className="project4">
                            <Nav.Link href="./Project4">
                            <Row>
                                <img src={projectImg1} alt="" id="project-img1"/>
                                <h2>
                                    Drum Machine
                                </h2>
                            </Row>
                            </Nav.Link>
                        </div>
                    </Nav.Item>
                    </Nav>
                </Col>
            </Container>
        </div>
    )
}