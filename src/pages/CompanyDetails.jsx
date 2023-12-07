import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function CompanyDetails() {
  const [companyDetails, setCompanyDetails] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + `/${id}`)
      .then((response) => {
        setCompanyDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const deleteFunction = () => {
    axios
      .delete(import.meta.env.VITE_API_URL + `/${id}`)
      .then(() => {
        navigate("/companies");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editSubmit = () => {
    const updatedData = {
      ContactFirstName: companyDetails.ContactFirstName,
      ContactLastName: companyDetails.ContactLastName,
      CompanyName: companyDetails.CompanyName,
      CompanyEmail: companyDetails.CompanyEmail,
      CompanyPhone: companyDetails.CompanyPhone,
      CompanyAddress: companyDetails.CompanyAddress,
      CompanyDescription: companyDetails.CompanyDescription,
    };

    axios
      .put(import.meta.env.VITE_API_URL + `/${id}`, updatedData)
      .then((response) => {
        console.log("company details updated", response.data);
      })
      .catch((error) => {
        console.error("error updating company details:", error);
      });
  };

  return (
    <div>
      <label>
        Contact First Name:
        <input
          type="text"
          name="ContactFirstName"
          value={companyDetails.ContactFirstName}
          onChange={(e) =>
            setCompanyDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <hr />

      <label>
        Contact Last Name:
        <input
          type="text"
          name="ContactLastName"
          value={companyDetails.ContactLastName}
          onChange={(e) =>
            setCompanyDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <hr />

      <label>
        Company Name:
        <input
          type="text"
          name="CompanyName"
          value={companyDetails.CompanyName}
          onChange={(e) =>
            setCompanyDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <hr />

      <label>
        Company Email:
        <input
          type="text"
          name="CompanyEmail"
          value={companyDetails.CompanyEmail}
          onChange={(e) =>
            setCompanyDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <hr />

      <label>
        Company Phone:
        <input
          type="number"
          name="CompanyPhone"
          value={companyDetails.CompanyPhone}
          onChange={(e) =>
            setCompanyDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <hr />

      <label>
        Company Address:
        <textarea
          name="CompanyAddress"
          value={companyDetails.CompanyAddress}
          onChange={(e) =>
            setCompanyDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <hr />

      <label>
        Company Description:
        <textarea
          name="CompanyDescription"
          value={companyDetails.CompanyDescription}
          onChange={(e) =>
            setCompanyDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <button onClick={editSubmit}>Save</button>
      <button onClick={deleteFunction}>Delete</button>
    </div>
  );
}

export default CompanyDetails;
