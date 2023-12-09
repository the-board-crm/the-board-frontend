import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function HomePage() {
  const { isLoggedIn, user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Here is the homepage</h1>
      {isLoggedIn ? (
        <h2>Great to have you here, {user.name}!</h2>
      ) : (
        <p>Please log in to see personalized content.</p>
      )}
    </div>
  );
}

export default HomePage;
