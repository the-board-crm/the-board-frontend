import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import EditCompany from "./EditCompany";



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
    <div>
      <div>
        <h1>{companyDetails.contactFirstName}</h1>
        <h1>{companyDetails.contactLastName}</h1>
        <p>{companyDetails.companyName}</p>
        <p>Email: {companyDetails.companyEmail}</p>
        <p>Phone Number: {companyDetails.companyPhone}</p>
        <p>Address: {companyDetails.companyAddress}</p>
        <p>Additional Info: {companyDetails.companyDescription}</p>
        <Link to={`/editcompany/${id}`}>
          <button>Edit and Delete</button>
        </Link>
      </div>
    </div>
  );
}

export default CompanyDetails;