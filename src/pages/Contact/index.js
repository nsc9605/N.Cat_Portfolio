import React from "react";
import ContainerFluid from "../../components/ContainerFluid/index";

function Contact() {
  return (
    <div>
      <ContainerFluid>
        <h2>Contact Me</h2>
        <div className="icons-grid">
          <div className="phone">
          <h4>Phone: </h4>
          <a
            href="tel:314-221-0441"
            alt="Phone #: 314.221.0441"
            title="Click to call"
          >
            <img
              src="https://img.icons8.com/ios-filled/100/000000/apple-phone.png"
              className="link-item"
              alt="Phone #: 314.221.0441"
            />
          </a>
          </div>
          <div className="email">
            <h4>Email: </h4>
          <a
            href="mailto:nsc9605@gmail.com"
            target="_blank"
            rel="noreferrer"
            alt="email"
            title="Click to launch email"
          >
            <img
              src="https://img.icons8.com/dotty/100/000000/new-post.png"
              className="link-item"
              alt="Email"
            />
          </a>
          </div>
          <div className="github">
            <h4>Github: </h4>
          <a
            href="https://github.com/nsc9605"
            target="_blank"
            alt="github"
            title="Click to launch GitHub account"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/100/000000/github.png"
              className="link-item"
              alt="Github"
            />
          </a>
          </div>
          <div className="linkedin">
            <h4>Linkedin: </h4>
          <a
            href="https://www.linkedin.com/in/nicole-catapano"
            target="_blank"
            alt="linkedIn"
            title="Click to launch LinkedIn page"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/doodle/100/000000/linkedin--v2.png"
              className="link-item"
              alt="LinkedIn"
            />
          </a>
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
}

export default Contact;
