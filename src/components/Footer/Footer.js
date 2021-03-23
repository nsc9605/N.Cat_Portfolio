import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer id="sticky-footer" className="py-4 bg-dark text-white-50 justify-content-center">
      <small className="align-text-center">Copyright &copy; Nicole Catapano</small>
      <div className="icons-grid pb-2">
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
    {/* </div> */}
  </footer>
    // <footer className="footer sticky text-center">
      // © 2020 Nicole Catapano
      // {/* <div className="icons-grid align-content-center pb-2">
    //       <a
    //         href="tel:314-221-0441"
    //         alt="Phone #: 314.221.0441"
    //         title="Click to call"
    //       >
    //         <img
    //           src="https://img.icons8.com/ios-filled/100/000000/apple-phone.png"
    //           className="link-item"
    //           alt="Phone #: 314.221.0441"
    //         />
    //       </a>
    //       <a
    //         href="mailto:nsc9605@gmail.com"
    //         target="_blank"
    //         rel="noreferrer"
    //         alt="email"
    //         title="Click to launch email"
    //       >
    //         <img
    //           src="https://img.icons8.com/dotty/100/000000/new-post.png"
    //           className="link-item"
    //           alt="Email"
    //         />
    //       </a>
    //       <a
    //         href="https://github.com/nsc9605"
    //         target="_blank"
    //         alt="github"
    //         title="Click to launch GitHub account"
    //         rel="noreferrer"
    //       >
    //         <img
    //           src="https://img.icons8.com/fluent/100/000000/github.png"
    //           className="link-item"
    //           alt="Github"
    //         />
    //       </a>
    //       <a
    //         href="https://www.linkedin.com/in/nicole-catapano"
    //         target="_blank"
    //         alt="linkedIn"
    //         title="Click to launch LinkedIn page"
    //         rel="noreferrer"
    //       >
    //         <img
    //           src="https://img.icons8.com/doodle/100/000000/linkedin--v2.png"
    //           className="link-item"
    //           alt="LinkedIn"
    //         />
    //       </a>
    //     </div> */}
    // </footer>
  );
}

export default Footer;