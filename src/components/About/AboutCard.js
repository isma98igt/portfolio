import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

          <span className="purple">Ismael Gómez-Talal </span>
           received his B.S. degree in Telecommunication Technologies Engineering from Universidad Rey Juan Carlos (URJC) in 2020. He continued his
education at the same institution, earning a Master’s
in Information Systems Engineering in 2021. He
went on to complete another degree, in Telematics
Engineering, from URJC in 2022. In the same year,
he received his Master’s in Internet of Things from
Universidad Carlos III de Madrid (UC3M). He is
currently finishing his third Master’s in Telecommunication Engineering at UC3M and working on his doctoral thesis for the
PhD in Information and Communication Technology at URJC. His research
interests include methods based on Interpretable Machine Learning (IML) and
the application of Machine Learning (ML) using real data from the health and
hospitality sectors.

          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Example isn’t another way to teach, it is the only way to teach."{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Genius is 1% inspiration and 99% perspiration."{" "}
          </p>
          <footer className="blockquote-footer">Thomas Edison</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
