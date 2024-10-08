import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alishba Noor </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am currently an Android Developer intern at Prodigy.
            <br />
            I am an SWE Fellow at Headstarters.
            <br />
            I am pursuing BS Software Engineering from University of Central Punjab.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Thoughts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive until you make a difference in yourself!"{" "}
          </p>
          <footer className="blockquote-footer">Alishba</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
