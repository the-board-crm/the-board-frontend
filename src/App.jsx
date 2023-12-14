import React, { useState } from "react";
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
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/isPrivate";
import AddTask from "./pages/AddTask";
import EditCompany from "./pages/EditCompany";
import MyCalendar from "./components/Calendar";
import TaskList from "./pages/TaskList";
import EditTask from "./pages/EditTask";


function App() {
 
  return (
    <AuthProviderWrapper>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<IsAnon><LoginPage /></IsAnon>} />
          <Route path="/dashboard" element={<IsPrivate><HomePage /></IsPrivate>}/>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/companies/create" element={<IsPrivate><AddCompany /></IsPrivate>} />
          <Route path="/companies" element={<IsPrivate><CompanyList /></IsPrivate>} />
          <Route path="/api/companies/:id" element={<IsPrivate><CompanyDetails /></IsPrivate>} />
          <Route path="/editcompany/:id" element={<IsPrivate><EditCompany /></IsPrivate>} />
          <Route path="/calendar" element={<IsPrivate><MyCalendar /></IsPrivate>}/>
          <Route path="/tasks" element={<IsPrivate><TaskList/></IsPrivate>} />
          <Route path="/tasks/create" element={<IsPrivate><AddTask /></IsPrivate>} />
          <Route path="/edittask/:id" element={<IsPrivate><EditTask /></IsPrivate>} />
        </Routes>
      </div>
    </AuthProviderWrapper>
  );
}

export default App;
