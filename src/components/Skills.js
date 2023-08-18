import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export const Skills = () => {

    const skill = [
        [
            "Programlama Dilleri",
            [
                "C", "C++", "Python", "Java", "SQL"
            ]
        ],
        [
            "Web Geliştirme",
            [
                "HTML5", "CSS", "JavaScript", "React", "Flutter", "Firebase"
            ]
        ],
        [
            "İşletim Sistemleri",
            [
                "Linux Ubuntu", "Windows"
            ]
        ],
        [
            "Diller",
            [
                "İngilizce"
            ]
        ]
    ];

    const skills = skill.map((skill) => (
        <div className="skill-col">
            <h4>
                {skill[0]}
            </h4>
            <ul>
                {skill[1].map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    ))

    return (
        <div id = "skills">
            <Container id="skills-con">
                <div id="skill">
                    <h2 id="yetenek">
                        Yetenekler
                    </h2>
                    <Col id="skills-col-1">
                        {skills}
                    </Col>
                </div>
            </Container>
        </div>
    )
}