import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../css/CompanyList.css'


function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + '/api/companies')
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="card-container">
      {companies.map((company) => (
        <div className="card" key={company._id}>
          <h3>{company.contactFirstName} {company.contactLastName}</h3>
        <hr></hr>
          <h3>{company.companyName}</h3>
          <Link to={`/api/companies/${company._id}`}> <button>Details</button></Link>

        </div>
      ))}
    </div>
  );
}

export default CompanyList;
