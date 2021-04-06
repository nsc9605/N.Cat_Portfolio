import React from "react";
// import homeImg from "../../assets/img/home.jpeg";
import home from "../../assets/img/home.jpg";
import Container from "react-bootstrap/Container";
// import "./index.css";

function Home() {
  return (
    <Container fluid="md">
      <div className="home-div">
        <div subheading="Home ml-2 px-2" className="">
          <img
            src={home}
            alt="Home"
            className="rounded m-3 float-right homeImg pull-right img-fluid"
          />
          <div className="quote">
            <blockquote>
              <em>
                {" "}
                I don't know where I'm going from here, but I promise it wont be
                boring{" "}
              </em>
            </blockquote>
            <figcaption className="float-right pb-2">
              &mdash; David Bowie, <cite>Madison Square Garden 1997</cite>
            </figcaption>
          </div>
        </div>
        <div className="px-3 m-3 objects">
          <h3 className="indent mx-5 px-2 float-left">[ Creator ]</h3>
          <br></br>
          <br></br>
          <p>Creativity can be seen in various aspects of life.</p>

          <h3 className="indent mx-5 px-2 float-right">[ Problem Solver ]</h3>
          <br></br>
          <br></br>
          <p>
            Born problem solver who constantly finds challenges and must
            accomplish them. Love learning new things and challenging myself.
          </p>
          <h3 className="indent mx-5 px-2 float-left"> [ Explorer ]</h3>
          <br></br>
          <br></br>
          <p>
            Love to go on spontaneous adventures and just explore this wonderful
            city I am lucky to live in.
          </p>
          <h3 className="indent mx-5 px-2 float-right">[ Developer ]</h3>
          <br></br>
          <br></br>
          <p>
            Thrive on developing new Apps and really challenging myself to try
            new things. Please navigate into the Projects section to view
            projects with deployed link and github provided. For more
            information about me you can click the social icons at the bottom of
            the page or navigate to the Contact page!
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Home;
