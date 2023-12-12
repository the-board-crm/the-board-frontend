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
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/isPrivate";
import AddTask from "./components/AddTask";
import EditCompany from "./pages/EditCompany";
import MyCalendar from "./components/Calendar";
function App() {
  return (
    <AuthProviderWrapper>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<IsAnon><LoginPage /></IsAnon>} />
          <Route path="/dashboard" element={<IsPrivate><HomePage /></IsPrivate>}/>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/companies/create" element={<AddCompany />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/api/companies/:id" element={<CompanyDetails />} />
          <Route path="/editcompany/:id" element={<EditCompany />} />
          <Route path="/tasks" element={<AddTask />} />
        </Routes>
      </div>
    </AuthProviderWrapper>
  );
}

export default App;
