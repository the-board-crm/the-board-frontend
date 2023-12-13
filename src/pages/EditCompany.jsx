import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditCompany() {
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
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + '/api/companies'+ `/${id}`)
      .then((response) => {
        setCompanyDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const deleteFunction = () => {
    axios
      .delete(import.meta.env.VITE_API_URL + '/api/companies' + `/${id}`)
      .then(() => {
        navigate("/companies");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editSubmit = () => {
    const updatedData = {
      contactFirstName: companyDetails.contactFirstName,
      contactLastName: companyDetails.contactLastName,
      companyName: companyDetails.companyName,
      companyEmail: companyDetails.companyEmail,
      companyPhone: companyDetails.companyPhone,
      companyAddress: companyDetails.companyAddress,
      companyDescription: companyDetails.companyDescription,
    };

    axios
      .put(import.meta.env.VITE_API_URL + '/api/companies' + `/${id}`, updatedData)
      .then((response) => {
        console.log("company details updated", response.data);
        navigate("/companies");
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
          value={companyDetails.contactFirstName}
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
          value={companyDetails.contactLastName}
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
        company Name:
        <input
          type="text"
          name="companyName"
          value={companyDetails.companyName}
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
        company Email:
        <input
          type="text"
          name="companyEmail"
          value={companyDetails.companyEmail}
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
        company Phone:
        <input
          type="number"
          name="companyPhone"
          value={companyDetails.companyPhone}
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
        company Address:
        <textarea
          name="companyAddress"
          value={companyDetails.companyAddress}
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
        company Description:
        <textarea
          name="companyDescription"
          value={companyDetails.companyDescription}
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

export default EditCompany;
