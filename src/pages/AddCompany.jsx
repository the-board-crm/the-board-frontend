import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import '../css/AddCompany.css'



function AddCompany(props) {
  const [contactFirstName, setContactFirstName] = useState("");
  const [contactLastName, setContactLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");

  const navigate = useNavigate()

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
      .post(`${import.meta.env.VITE_API_URL}/api/companies`, requestBody)
      .then((response) => {
        setContactFirstName("");
        setContactLastName("");
        setCompanyName("");
        setCompanyEmail("");
        setCompanyPhone("");
        setCompanyAddress("");
        setCompanyDescription("");
        navigate('/companies')
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddCompany">
      <h3>Add Company</h3>
      <form onSubmit={handleSubmit}>
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
        <label>Company:</label>
        <input
          type="text"
          name="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="text"
          name="Company Email"
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
        />
        <label>Phone:</label>
        <input
          type="number"
          name="Company phone"
          value={companyPhone}
          onChange={(e) => setCompanyPhone(e.target.value)}
        />
        <label>Address:</label>
        <input
          type="text"
          name="Company Address"
          value={companyAddress}
          onChange={(e) => setCompanyAddress(e.target.value)}
        />
        <label>Description:</label>
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
