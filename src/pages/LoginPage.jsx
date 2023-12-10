import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "../css/LoginPage.css"

const API_URL = "http://localhost:5005";

function LoginPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const navigate = useNavigate();

   const { storeToken, authenticateUser } = useContext(AuthContext);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password };

        axios
            .post(`${API_URL}/auth/login`, requestBody)
            .then((response) => {
                console.log("JWT token", response.data.authToken);
                
                storeToken(response.data.authToken);
                authenticateUser();
                navigate("/");
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            });
    }
    return(
      <div className="LoginPage">
        <div className="background-image">
         <p> The Board CRM <br /> Bee creative with Customer Relationship Management </p>
        </div>
         <div className="login-form">
          <div className="logo"></div>
      <h1>Login</h1>
<br />
      <form onSubmit={handleLoginSubmit}>
        <label>Email:  </label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
<br />
        <label>Password:  </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
<br />
        <button type="submit">Login</button>
      </form>

      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}

      <p>Don't have an account?</p>
      <Link to={"/signup"}>Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginPage;