import React from "react";
import './css/App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AddCompany from "./pages/AddCompany";
import { AuthProviderWrapper, AuthContext } from "./context/auth.context";

function App() {
  return (
    <AuthProviderWrapper>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute component={<HomePage />} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/companies/create" element={<AddCompany />} />
        </Routes>
      </div>
    </AuthProviderWrapper>
  );
}

function PrivateRoute({ component }) {
  const { isAuthenticated, isLoading } = React.useContext(AuthContext);

  if (isLoading) {
    
    return <div>Loading...</div>;
  }

  return isAuthenticated ? component : <Navigate to="/login" />;
}

export default App;