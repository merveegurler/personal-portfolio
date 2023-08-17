import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export const Skills = () => {
    return (
        <div id = "skills">
            <Container id="skills-con">
                <div id="skill">
                    <h2 id="yetenek">
                        Yetenekler
                    </h2>
                    <Col id="skills-col-1">
                        <div>
                            <h4>
                                Programlama Dilleri
                            </h4>
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
                            <h4>
                                Web Geliştirme
                            </h4>
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
                            <h4>
                                İşletim Sistemleri
                            </h4>
                            <ul>
                                <li>Linux Mint</li>
                                <li>Linux Ubuntu</li>
                                <li>Windows</li>
                            </ul>
                        </div>
                        <div>
                            <h4>
                                Diller
                            </h4>
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