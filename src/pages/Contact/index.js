import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Footer from "../../components/Footer/Footer";

function Contact() {
  return (
    <Container>
      <h2 className="page-header">Contact Me</h2>
      {/* <div className="centered"> */}
      <Card className="p-1 bg-light centered card-contact">
        {/* <img src={home} key={home} alt="Me" className="card-img-top img-fluid " /> */}
        <div className="card-title">
            <h4>Please feel free to contact me via any of the provided links!</h4>
        </div>
        {/* <div className="card-body"> */}
          <ListGroup>
            <ListGroupItem>
             <i className="bi bi-telephone-outbound fa-lg"></i> :
              <Card.Link
                href="tel:314-221-0441"
                alt="Phone #: 314.221.0441"
                title="Click to call"
                className="contact-link"
              >
                {" "}
                <span>  314.221.0441</span>
              </Card.Link>
            </ListGroupItem>
            <ListGroupItem>
            <i className="bi bi-envelope fa-lg"></i> : {" "}
              <Card.Link
                href="mailto:nsc9605@gmail.com"
                target="_blank"
                rel="noreferrer"
                alt="email"
                title="Click to launch email"
                className="contact-link"
              >
                 <span> nsc9605@gmail.com</span>
              </Card.Link>
            </ListGroupItem>
            <ListGroupItem>
            <i className="bi bi-github fa-lg"></i> :   {" "}
              <Card.Link
                href="https://github.com/nsc9605"
                target="_blank"
                rel="noreferrer"
                alt="Github"
                title="Click to launch Github"
                className="contact-link"
              >
                https://github.com/nsc9605
              </Card.Link>
            </ListGroupItem>
            <ListGroupItem>
            <i className="bi bi-linkedin fa-lg"></i>  :  {" "}
              <Card.Link
                href="https://www.linkedin.com/in/nicole-catapano"
                target="_blank"
                alt="linkedIn"
                title="Click to launch LinkedIn page"
                rel="noreferrer"
                className="contact-link"
              >
                https://linkedin.com/in/nicole-catapano
              </Card.Link>
            </ListGroupItem>
          </ListGroup>
        {/* </div> */}
      </Card>
      {/* </div> */}
      <Footer />
    </Container>
  );
}

export default Contact;


