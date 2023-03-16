import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export const Skills = () => {
    return (
        <div id = "skills">
            <Container id="skills-con">
                <div id="skill">
                    <h1 id="yetenek">
                        Yetenekler
                    </h1>
                    <Col id="skills-col-1">
                        <div>
                            <h3>
                                Programlama Dilleri
                            </h3>
                            <ul>
                                <li>C</li>
                                <li>C++</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>Lisp</li>
                                <li>SAP ABAP</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                        <div>
                            <h3>
                                Web Geliştirme
                            </h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Flutter</li>
                                <li>Firebase</li>
                            </ul>
                        </div>
                        <div>
                            <h3>
                                İşletim Sistemleri
                            </h3>
                            <ul>
                                <li>Linux Mint</li>
                                <li>Linux Ubuntu</li>
                                <li>Windows</li>
                            </ul>
                        </div>
                        <div>
                            <h3>
                                Diller
                            </h3>
                            <ul>
                                <li>İngilizce</li>
                            </ul>
                        </div>
                    </Col>
                </div>
            </Container>
        </div>
    )
}