import React from "react";
import Card from "react-bootstrap/Card";

function Draft(props) {
  return (
    <div className="alignment p-2">
      <Card
        style={{ width: "25rem", height: "30rem", border: "black solid 1px" }}
      >
        <Card.Img
          variant="top"
          src={props.image}
          alt={props.title}
          className="p-2 border"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text className="m-2 text-center">{props.tags}</Card.Text>
        </Card.Body>
        <Card.Body className="text-center m-2">
          <Card.Link href={props.deploy}>
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

export default Draft;
