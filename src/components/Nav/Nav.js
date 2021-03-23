import React, {  useState } from "react";
import { Link, useLocation, } from "react-router-dom";
import resume from "../../assets/Web_Dev-Res.pdf";
import "./style.css";


function Nav() {
  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(isNavCollapsed);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark float-right"
      id="side-nav"
    >
      <button
        className="navbar-toggler navbar-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
        <Link to="/about" className={
              location.pathname === "/" ? "nav-link active" : "nav-link"}>
                <span className="d-block d-lg-none">Nicole Catapano</span>
        </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav nav-tabs float-right">
        <li className="a nav-item js-scroll-trigger">
          {/* <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            <i className="fa fa-fw fa-home"></i>
            Home */}
          {/* </Link> */}
        </li>
        <li className="a nav-item js-scroll-trigger">
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "nav-link active" : "nav-link"
            }
          >
            <i className="fa fa-fw fa-user"></i>
            About
          </Link>
        </li>
        <li className="a nav-item js-scroll-trigger">
          <Link
            to="/projects"
            className={
              location.pathname === "/projects" ? "nav-link active" : "nav-link"
            }
          >
            <i className="fa fa-fw fa-code"></i>
            Projects
          </Link>
        </li>
        <li className="a nav-item js-scroll-trigger">
          <Link
            to="/contact"
            className={
              location.pathname === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            <i className="fa fa-fw fa-envelope"></i>
            Contact
          </Link>
        </li>
        <li className="a nav-item js-scroll-trigger">
          <a
            className={
              location.pathname === "/resume" ? "nav-link active" : "nav-link"
            }
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-download"></i>
            Resume
          </a>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Nav;

// <!-- navbar -->
// 		<nav class="side-nav">
// 			<div class="max-width">
// 				<ul class="nav-list">
// 					<li><a href="#aboutme" alt ="About Me" title="About Me"><i class="fa fa-fw fa-user"></i> About Me</a></li>
// 					<li><a href="#projects" alt ="Projects" title="Projects"><i class="fa fa-fw fa-code"></i> Projects</a></li>
// 					<li><a href="#contactme" alt ="Contact Me" title="Contact Me"><i class="fa fa-fw fa-envelope"></i> Contact Me</a></li>
// 					<li><a href="assets/WebDevRes.pdf" alt="Resume" title="Resume"><i class="fa fa-download"></i> Resume</a></li>
// 				</ul>
// 			</div>
// 		</nav>
