import { NavLink } from "react-router-dom";
import '../css/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/login">
        <button>Login</button>
      </NavLink>
      <NavLink to="/signup">
        <button>Sign Up</button>
      </NavLink>
      <NavLink to="/companies/create">
        <button>Create a Company</button>
      </NavLink>
      <NavLink to="/companies">
        <button>List of Companies</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
