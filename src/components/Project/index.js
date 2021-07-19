import React from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
  return (
    <div className="alignments p-2">
      <Card
        style={{ maxWidth: "25rem", maxHeight: "28rem", minWidth: "10rem", minHeight: "15rem", border: "black solid 1px" }}
        className="overflow-auto"
      >
        <Card.Img
          variant="top"
          src={props.image}
          alt={props.title}
          className="p-2 border img-fluid card-img-top"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="desc">{props.description}</Card.Text>
          <Card.Text className="m-2 text-center px-3 tags">{props.tags}</Card.Text>
        </Card.Body>
        <Card.Body className="text-center p-2 card-links" style={{ position: 'relative'}}>
          <Card.Link href={props.deploy} variant="bottom">
            Launch<i className="fa fa-desktop mx-2 fa-lg"></i>
          </Card.Link>
          <Card.Link href={props.repo}>
            Repo<i className="fa fa-github mx-2 fa-lg"></i>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Project;
