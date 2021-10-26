import React from "react";
import Card from "react-bootstrap/Card";
import "../../index.css";

function Project(props) {
  return (
    <div className="alignments m-2">
      <Card
        style={{
          maxWidth: "25rem",
          maxHeight: "28rem",
          border: "black solid 1px",
        }}
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
          <Card.Text className="tags m-2 text-center">
            {props.tags}
          </Card.Text>
        </Card.Body>
        <Card.Body
          className="text-center p-2 card-links"
          style={{ position: "relative" }}
        >
          <Card.Text>
            <Card.Link href={props.deploy} variant="bottom">
              Launch<i className="fa fa-desktop m-2 fa-lg"></i>
            </Card.Link>
            <Card.Link href={props.repo} variant="bottom">
              Repo<i className="fa fa-github m-2 fa-lg"></i>
            </Card.Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Project;
