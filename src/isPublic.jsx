import { useContext } from "react";
import { AuthContext } from "./context/auth.context";
import { Navigate } from "react-router-dom";

function IsPublic({ children }) {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default IsPublic;
