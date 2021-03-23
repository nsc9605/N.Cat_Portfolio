import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer id="sticky-footer" className="justify-content-center">
      <small className="align-text-center">&copy; 2020 Nicole Catapano</small>
      <div className="pb-2 size-md">
       <a
            href="tel:314-221-0441"
            alt="Phone #: 314.221.0441"
            title="Click to call"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/apple-phone.png"
              className="link-item"
              alt="Phone #: 314.221.0441"
            />
          </a>
          <a
            href="mailto:nsc9605@gmail.com"
            target="_blank"
            rel="noreferrer"
            alt="email"
            title="Click to launch email"
          >
            <img
              src="https://img.icons8.com/dotty/50/000000/new-post.png"
              className="link-item"
              alt="Email"
            />
          </a>
          <a
            href="https://github.com/nsc9605"
            target="_blank"
            alt="github"
            title="Click to launch GitHub account"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/50/000000/github.png"
              className="link-item"
              alt="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/nicole-catapano"
            target="_blank"
            alt="linkedIn"
            title="Click to launch LinkedIn page"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/doodle/50/000000/linkedin--v2.png"
              className="link-item"
              alt="LinkedIn"
            />
          </a>
        </div> 
    {/* </div> */}
  </footer>
  
  );
}

export default Footer;