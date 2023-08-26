import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  //AiOutlineTwitter,
  //AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="purple"> introduce </span> myself
            </h1>
            <p className="home-about-body">
            I am Ismael, currently a PhD Candidate at Universidad Rey Juan Carlos. 
    My projects and interests are related to Interpretable Machine Learning in areas such as bioengineering, 
    hospitality, and other application fields. 
              <br />
              <br />My work tools are
              <i>
                <b className="purple"> MATLAB and Python. </b>
              </i>
              <br />
              <br />
              My passion lies in unraveling black-box models, 
    studying data patterns through interpretable latent spaces, designing models based on <b className="purple">Interpretable Machine Learning </b>, 
    programming, and designing tools and applications based on these models, making them more practical and user-friendly.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            <p>
             <span className="purple">Contact me </span>on the following platforms
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/isma98igt"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ismael-g%C3%B3mez-talal-622617193/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
