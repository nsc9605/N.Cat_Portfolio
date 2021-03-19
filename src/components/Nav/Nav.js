import React from "react";
import { Link, useLocation } from "react-router-dom";
import resume from "../../assets/Web_Dev-Res.pdf";

function Nav() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs float-right">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        ><i className="fa fa-fw fa-home"></i>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        ><i className="fa fa-fw fa-user"></i> 
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
        ><i className="fa fa-fw fa-code"></i>
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        ><i className="fa fa-fw fa-envelope"></i>
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <a className={location.pathname === "/resume" ? "nav-link active" : "nav-link"} 
        href={resume}
        target="_blank"
        rel="noreferrer"
        ><i className="fa fa-download"></i>
           Resume
        </a>
      </li>
    </ul>
  );
}

export default Nav;


// <!-- navbar -->
// 		<nav class="top-nav">
// 			<div class="max-width">
// 				<ul class="nav-list">
// 					<li><a href="#aboutme" alt ="About Me" title="About Me"><i class="fa fa-fw fa-user"></i> About Me</a></li>
// 					<li><a href="#projects" alt ="Projects" title="Projects"><i class="fa fa-fw fa-code"></i> Projects</a></li>
// 					<li><a href="#contactme" alt ="Contact Me" title="Contact Me"><i class="fa fa-fw fa-envelope"></i> Contact Me</a></li>
// 					<li><a href="assets/WebDevRes.pdf" alt="Resume" title="Resume"><i class="fa fa-download"></i> Resume</a></li>
// 				</ul>
// 			</div>
// 		</nav>