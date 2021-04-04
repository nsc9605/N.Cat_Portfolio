import React from "react";
import Card from 'react-bootstrap/Card'

function Draft(props) {
  return (
<div className="portfolio-item centered">
<Card style={{ width: '25rem', height: '30rem', border:"dark"}}>
<Card.Img variant="top" src={props.image} alt={props.title} className="p-2 border" />
<Card.Body>
  <Card.Title>{props.title}</Card.Title>
  <Card.Text>
    <p>{props.description}</p>
    <p className="text-center mx-2">{props.tags}</p>
  </Card.Text>
</Card.Body>
<Card.Body className="text-center m-2">
  <Card.Link href={props.deploy}>Launch<i className="fa fa-desktop mx-2 fa-lg"></i></Card.Link>
  <Card.Link href={props.repo}>Repo<i className="fa fa-github mx-2 fa-lg"></i></Card.Link>
</Card.Body>
</Card>
</div>
  )
}

export default Draft;