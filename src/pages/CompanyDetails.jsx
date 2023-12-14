import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import '../css/CompanyDetails.css'



function CompanyDetails() {
  const [companyDetails, setCompanyDetails] = useState({
    contactFirstName: "",
    contactLastName: "",
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    companyAddress: "",
    companyDescription: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + '/api/companies' + `/${id}`)
      .then((response) => {
        console.log(response.data);
        setCompanyDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="company-details">
        <h1>{companyDetails.contactFirstName} {companyDetails.contactLastName}</h1>
        <h2>{companyDetails.companyName}</h2>
        <p>Email: {companyDetails.companyEmail}</p>
        <p>Phone Number: {companyDetails.companyPhone}</p>
        <p>Address: {companyDetails.companyAddress}</p>
        <p>Additional Info: {companyDetails.companyDescription}</p>
        <Link to={`/editcompany/${id}`}>
          <button className="the-button">Edit or Delete</button>
        </Link>
      </div>
    </div>
  );
}

export default CompanyDetails;