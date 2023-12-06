import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./Homepage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import IsPublic from "./isPublic";                   // to be implemented when it works


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/" element={ <HomePage />} />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/signup" element={<SignupPage /> } />
      </Routes>
    </div>
  );
}

export default App;
