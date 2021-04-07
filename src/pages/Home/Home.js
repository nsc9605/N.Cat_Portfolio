import React from "react";
// import homeImg from "../../assets/img/home.jpeg";
import home from "../../assets/img/home.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import "./index.css";

function Home() {
  return (
    <Container fluid="md">
      <div className="home-div">
        <div subheading="Home ml-2 px-2">
          <Row>
            <Col xs={12} md={4}>
              <img
                src={home}
                alt="Home"
                className="rounded m-3 homeImg img-fluid"
              />
              <div className="quote">
                <blockquote>
                  <em>
                    {" "}
                    I don't know where I'm going from here, but I promise it
                    wont be boring{" "}
                  </em>
                </blockquote>
                <figcaption className="float-right pb-2">
                  &mdash; David Bowie, <cite>Madison Square Garden 1997</cite>
                </figcaption>
              </div>
            </Col>
            <Col xs={12} md={8}>
              {/* </div> */}
              <div className="px-3 m-3 objects">
                <h3 className="indent ml-5 pl-5"> [ Problem Solver ]</h3>
                {/* <br></br>
                <br></br> */}
                <p>
                  Born problem solver who constantly finds challenges and must
                  accomplish them. Love learning new things and challenging
                  myself.
                </p>
                <h3 className="indent mr-5 pr-5"> [ Explorer ]</h3>
                <p>
                  Love going on spontaneous adventures and just explore this
                  wonderful city I am lucky to live in as well as traveling
                  abroad and exploring new cities and countries.
                </p>
                <h3 className="indent ml-5 pl-5"> [ Developer ]</h3>
                <p>
                  Thrive on developing new Apps and really challenging myself to
                  try new things. Please navigate into the Projects section to
                  view projects with deployed link and github provided. For more
                  information about me you can click the social icons at the
                  bottom of the page or navigate to the Contact page!
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default Home;
