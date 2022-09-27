import React from "react";

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Öğrenciyim", "Öğrenciyim"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container id = "ban-con">
        <Row className="aligh-items-center">
          <Col id="ban-col" xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div id="ban-par" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Portfolyom'a Hoşgeldiniz!</span>
                <h1>{`Merhaba! Ben Merve`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Öğrenciyim" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Gebze Teknik Üniversitesi Bilgisayar Mühendisliği 4. Sınıf öğrencisiyim. Teknofest 2020 Orta İrtifa Roket Yarışmasında Tunga Roket Takımı algoritma ve matematiksel hesaplamalar sorumlusu olarak görev aldım. Flutter ve Firebase yazılımlarını kullanarak mobil uygulama geliştirme üzerinde çalışma imkânı buldum. HTML, CSS ve JavaScript programlama dilleri kullanarak projeler geliştirdim. Doğal Dil İşleme üzerine çalışmalar yaptım.</p>
                  <button id="connect-but" onClick={() => console.log('connect')}>Bağlantı Kur! <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} id="isVisible">
            <TrackVisibility >
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img id="header-img" src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}