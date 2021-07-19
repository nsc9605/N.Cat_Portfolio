import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import resume from "../../assets/Res-ML.pdf";
// import Avatar from "react-avatar";

import profile from "../../assets/img/self.jpeg";

function Navtabs() {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Link to="/about">
        {/* <Navbar.Brand className="brand size-large"> */}
        <Navbar.Brand
          to="/"
          className={
            location.pathname === "/" ? "brand size-large navbar" : "nav-link brand "
          }
        >
          <img
            alt="Headshot"
            src={profile}
            className="avatar avatar-s rounded-circle mr-2"
          ></img>
          Nicole Catapano
          <br></br> <span className="subheader">Software Developer</span>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "nav-link active" : "nav-link"
            }
          >
            <i className="fa fa-fw fa-user"></i> About
          </Link>

          <Link
            to="/projects"
            className={
              location.pathname === "/projects" ? "nav-link active" : "nav-link"
            }
          >
            <i className="fa fa-fw fa-code"></i> Projects
          </Link>

          <Link
            to="/contact"
            className={
              location.pathname === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            <i className="fa fa-fw fa-envelope"></i> Contact
          </Link>

          <a
            className={
              location.pathname === "/resume" ? "nav-link active" : "nav-link"
            }
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-download"></i> Resume
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navtabs;
