import { useState } from "react";
import axios from "axios";
import { useContext } from "react";

const API_URL = "http://localhost:5005";

function AddCompany(props) {
  const [contactFirstName, setContactFirstName] = useState("");
  const [contactLastName, setContactLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      contactFirstName,
      contactLastName,
      companyName,
      companyEmail,
      companyPhone,
      companyAddress,
      companyDescription,
    };

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/companies`, requestBody)
      .then((response) => {
        setContactFirstName("");
        setContactLastName("");
        setCompanyName("");
        setCompanyEmail("");
        setCompanyPhone("");
        setCompanyAddress("");
        setCompanyDescription("");
        props.refreshCompanies();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddCompany">
      <h3>Add Company</h3>
      <form on onSubmit={handleSubmit}>
        <label>Contact First Name:</label>
        <input
          type="text"
          name="Contact First Name"
          value={contactFirstName}
          onChange={(e) => setContactFirstName(e.target.value)}
        />
        <label>Contact Last Name:</label>
        <input
          type="text"
          name="Contact Last Name"
          value={contactLastName}
          onChange={(e) => setContactLastName(e.target.value)}
        />
        <label>Company Name:</label>
        <input
          type="text"
          name="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <label>Company Email:</label>
        <input
          type="text"
          name="Company Email"
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
        />
        <label>Company Phone:</label>
        <input
          type="number"
          name="Company phone"
          value={companyPhone}
          onChange={(e) => setCompanyPhone(e.target.value)}
        />
        <label>Company Adress:</label>
        <input
          type="text"
          name="Company Adress"
          value={companyAddress}
          onChange={(e) => setCompanyAddress(e.target.value)}
        />
        <label>Company Description:</label>
        <textarea
          type="text"
          name="description"
          value={companyDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCompany;
