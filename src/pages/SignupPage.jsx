import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap"
import axios from "axios";


function SignupPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleFullName = (e) => setFullName(e.target.value);

    const handleSignupSubmit = (e) => {
        e.preventDefault();
       
        const requestBody = {email, password, name:fullName}
        console.log(requestBody);
        axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, requestBody)
            .then((response) => {
                navigate("/login");
            })
            .catch((error) => {
              console.log(error)
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    };

    return(
        <div className="SignupPage">
          <h1>Sign Up</h1>
    
          <Form onSubmit={handleSignupSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmail}
              />
            </Form.Group>
    
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePassword}
              />
            </Form.Group>
    
            <Form.Group controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={fullName}
                onChange={handleFullName}
              />
            </Form.Group>
    
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
    
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    
          <p>Already have an account?</p>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
    
    export default SignupPage;