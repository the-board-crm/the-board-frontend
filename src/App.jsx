import React from "react";
import './css/App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import IsPublic from "./components/isPublic";                   // to be implemented when it works
import AddCompany from "./pages/AddCompany";
import CompanyDetails from "./pages/CompanyDetails";
import CompanyList from "./pages/CompanyList";



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/signup" element={<SignupPage /> } />
        <Route path="/companies" element={<CompanyList /> } />
        <Route path='/companies/create' element={<AddCompany />} />
        <Route path='/companies/:id' element={<CompanyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
