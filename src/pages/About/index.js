import React from "react";
import profile from "../../assets/img/self.jpeg";
import Container from "react-bootstrap/Container";
import Footer from "../../components/Footer/Footer";
import "./style.css";

function About() {
  return (
    <>
      <Container fluid="md" className="about-div m-3 p-2">
        <h2 className="subheading page-header">About Me</h2>
        <div className="about-me">
          <p>
            <img
              src={profile}
              alt="Nicole Catapano"
              className="profile-img p-3 float-right m-4 pull-right img-fluid rounded"
            />
          </p>
          <p>
            I am a Software Developer originally from St. Louis, MO
            based in Brooklyn, NY. I received a Certification through University
            of North Carolina at Charlotte Coding Bootcamp.
          </p>
          <p>
            I am a natural problem solver and love challenging myself. I entered
            the Full Stack Program with no technical background besides a few
            classes in high school. After years of being out of school, I
            managed to maintain an A+ average and dedicate my spare time in
            furthering my education through research and studying.
          </p>
          <p>
            I excel in communication, collaboration as well as working on my
            own. I look forward to the challenges and obstacles coding will
            bring and am ready to start this new journey in life.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="skills page-header">Technical Skills</h2>
          <h2 className="tech-cons pb-3">
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-jquery-plain-wordmark colored"></i>
            <i className="devicon-express-original-wordmark colored"></i>
            <i className="devicon-nodejs-plain-wordmark colored"></i>
            <i className="devicon-handlebars-plain-wordmark"></i>
            <i className="devicon-mysql-plain-wordmark colored"></i>
            <i className="devicon-mongodb-plain-wordmark colored"></i>
            <i className="devicon-git-plain-wordmark colored"></i>
            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-materialui-plain colored"></i>
            <i className="devicon-npm-original-wordmark colored"></i>
            <i className="devicon-visualstudio-plain colored"></i>
          </h2>
          <br></br>
          <br></br>
        </div>
        <Footer />
      </Container>
    </>
  );
}

export default About;
