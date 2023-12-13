import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "../css/Navbar.css";
import { AuthContext } from "../context/auth.context";
import PomodoroTimer from "./PomodoroTimer";

function Navbar() {
  const { isLoggedIn, logOutUser, user } = React.useContext(AuthContext);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event) => 
  {
    setSearchInput(event.target.value);
  }

  const handleSearchSubmit = () => {
    console.log("Searching for:", searchInput);
    }

  const navigate = useNavigate()

  const handleLogout = () => {
    logOutUser();
    navigate('/');
  }
  if (!isLoggedIn){
    return null;
  }

  return (
    <>
    <div className="top-navbar">
    <input type="text" placeholder="Search..." value={searchInput} onChange={handleSearchChange} />
    <button onClick={handleSearchSubmit}>Search</button>
    {isLoggedIn && (
      <div className="user-info">
        <span>Welcome, {user.name}</span>
      </div>
    )}
    <PomodoroTimer />
      <button onClick={handleLogout} >Log Out</button>
  </div>

    <nav className="navbar">
      <NavLink to="/">
        <button>Home</button>
      </NavLink>

      {isLoggedIn ? (
        <>
          <NavLink to="/companies">
            <button>List of Companies</button>
          </NavLink>
          <NavLink to="/calendar">
            <button>Calendar</button>
          </NavLink>
          <NavLink to="/tasks">
            <button>List of Tasks</button>
          </NavLink>
          <NavLink to="/companies/create">
            <button>Create a Company</button>
          </NavLink>
          <NavLink to="/tasks/create">
            <button>Add Task</button>
          </NavLink>
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
    </>
  );
}

export default Navbar;
