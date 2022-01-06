import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: "justify" }}>
            Hey Everyone, I'm Chase Holt from{" "}
            <span className='purple'> Salt Lake City, Utah.</span>
            <br />I recently graduated from Fullstack Academy of Code and am
            pursuing a degree in Computer Science from the University of Utah.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Skiing
            </li>
            <li className='about-activity'>
              <ImPointRight /> Boating
            </li>
            <li className='about-activity'>
              <ImPointRight /> Travelling
            </li>
          </ul>
          {/*
           <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className='blockquote-footer'>Chase</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
