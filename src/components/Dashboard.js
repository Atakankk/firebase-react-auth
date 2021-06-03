import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState(""); // handling logout error states
  const { currentUser, logout } = useAuth(); // getting the current user
  const history = useHistory();
  

  const handleLogOut = async () => {
    setError("");
    try {
      await logout();
      history.push("/signin");
    } catch (err) {
        setError(err.message)
    }
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="w-200 text-center mt-2">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
    </>
  );
}
