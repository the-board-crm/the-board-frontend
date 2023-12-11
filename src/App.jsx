import React from "react";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AddCompany from "./pages/AddCompany";
import { AuthProviderWrapper, AuthContext } from "./context/auth.context";
import { Navigate } from "react-router-dom";
import CompanyList from "./pages/CompanyList";
import CompanyDetails from "./pages/CompanyDetails";

function App() {
  return (
    <AuthProviderWrapper>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateRoute component={<HomePage />} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/companies/create" element={<AddCompany />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/api/companies/:id" element={<CompanyDetails />} />
        </Routes>
      </div>
    </AuthProviderWrapper>
  );
}

function PrivateRoute({ component }) {
  const { isLoggedIn, isLoading } = React.useContext(AuthContext);
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? component : <Navigate to="/login" />;
}

export default App;
