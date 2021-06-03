import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory  } from "react-router-dom"

export default function Signup() {
  //form references
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  //getting the children of our context
  const { signup } = useAuth();
  //error handling states and preventing a user from creating too many accounts at a moment.
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/")
    } catch (err) {
        console.log(err)
      setError("Couldn't create an acount");
    }
    setLoading(false);
  };
  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required></Form.Control>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              ref={passwordRef}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              ref={passwordConfirmRef}
              required
            ></Form.Control>
          </Form.Group>
          <Button type="submit" className="w-100 text-center mt-2">
            Sign Up
          </Button>
        </Form>
      </Card.Body>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/signin">Log In</Link>
      </div>
    </Card>
  );
}
