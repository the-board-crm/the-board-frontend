import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "../css/Navbar.css";
import { AuthContext } from "../context/auth.context";





function Navbar() {
  const { isLoggedIn, logOutUser } = React.useContext(AuthContext);

  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <NavLink to="/">
        <button>Home</button>
      </NavLink>

      {isLoggedIn ? (
        <>
          <NavLink to="/companies/create">
            <button>Create a Company</button>
          </NavLink>
          <NavLink to="/companies">
            <button>List of Companies</button>
          </NavLink>
          <button onClick={logOutUser} >Log Out</button>
        </>
      ) : (
        <>
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button>Sign Up</button>
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default Navbar;
