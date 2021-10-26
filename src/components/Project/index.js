import React from "react";
import Card from "react-bootstrap/Card";
// import { ListGroup, ListGroupItem } from "react-bootstrap";
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
        className="overflow-auto p-2"
      >
        <Card.Img
          variant="top"
          src={props.image}
          alt={props.title}
          className="p-2 border img-fluid card-img-top"
        />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bolder" }}>{props.title}</Card.Title>
          <Card.Text className="desc">{props.description}</Card.Text>
          <Card.Text className="tags text-center">{props.tags}</Card.Text>
          <Card.Footer className="text-center card-links">
            <Card.Link href={props.deploy} variant="bottom">
              Launch<i className="fa fa-desktop mx-2 fa-lg"></i>
            </Card.Link>
            <Card.Link href={props.repo} variant="bottom">
              Repo<i className="fa fa-github mx-2 fa-lg"></i>
            </Card.Link>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Project;
