import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    
    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value)
        setEmail(e.target.value)
        setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Name:</Form.Label>
      <Form.Control
        type="name"
        placeholder="Jane Doe"
        onChange={(e) => setName(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email Address:</Form.Label>
      <Form.Control
        type="email"
        placeholder="name@example.com"
        onChange={(e) => setEmail(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Comment:</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        onChange={(e) => setComment(e.target.value)}
      />
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>
  );
}

export default Contact;
