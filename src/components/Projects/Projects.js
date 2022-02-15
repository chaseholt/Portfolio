import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import OurCity from "../../Assets/Projects/ourCity.png";
//import emotion from "../../Assets/Projects/emotion.jpeg";
import santaFlies from "../../Assets/Projects/Santa-Flies.png";
//import chatify from "../../Assets/Projects/chatify.png";
import WonderfulFlowers from "../../Assets/Projects/Wonderful_Flowers.png";
import sharely from "../../Assets/Projects/Sharely.png";

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='Chatify'
              description='Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.'
              link=''
            />
          </Col> */}

          <Col md={4} className='project-card'>
            <ProjectCard
              className='mobile'
              imgPath={OurCity}
              isBlog={false}
              title='OurCity'
              description="Used React-Native and Google Maps API to build a social media app for a local community. It's a platform where users can share their experiences and find out what's happening around them. Users can create groups and invite their friends to join. Users can also add pins to their group's map, where they can post comments on each location."
              link='https://github.com/boba-boys/ourCity'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={santaFlies}
              isBlog={false}
              title='Santa Flies'
              description='A simple game using JQuery with a festive touch. The game is a flappy-bird clone reskinned as Santa. It uses local storage to save the high score and the user can play the game as many times as they want.'
              link='https://github.com/chaseholt/Santa-Flies'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={sharely}
              isBlog={false}
              title='Sharely'
              description='Sharely is a website that uses firebase to store the images. Users can upload any image they want and watch the image animate into the grid with the other images.'
              link='https://web-journal-8f8cc.web.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={WonderfulFlowers}
              isBlog={false}
              title='Wonderful Flowers'
              description="Created a mock E-Commerce website using React / Redux. It's a simple E-Commerce website where users can add items to their cart and checkout. It also has a great guest experience where the guest will have a persistent cart when they come back to the website."
              link='https://wonderful-flowers.herokuapp.com/home'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
