import React, { useState } from "react";
import { Button, Card, Alert} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState(""); // handling logout error states
  const { currentUser, logout, mailverify } = useAuth(); // getting the current user
  const history = useHistory();
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  

  const handleVerify = async () => {
    try {
      setMessage("")
      setError("")
      setLoading(true)
      await mailverify(currentUser)
      setMessage("Please check your inbox to verify your mail.")
    }
    catch (err){
      setError(err.message)
    }
    setLoading(false)
  }
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
          {message && <Alert variant="success">{message}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="text-center"><strong>Email:</strong> {currentUser.email}</div>
          
          {currentUser.emailVerified && <Alert variant="success" className="text-center mb-1">Verified Account</Alert>}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          {!currentUser.emailVerified && <Button onClick={handleVerify} className="w-100 mt-1" variant="success">Verify Mail</Button>}
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
