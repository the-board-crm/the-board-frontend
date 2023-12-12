import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


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
    <div>
      {companies.map((company) => (
        <div key={company._id}>
          <h1>{company.contactFirstName}</h1>
          <p>{company.contactLastName}</p>
          <p>{company.companyName}</p>
          <p>{company.companyEmail}</p>
          <p>{company.companyPhone}</p>
          <p>{company.companyAddress}</p>
          <p>{company.companyDescription}</p>
          <Link to={`/api/companies/${company._id}`}> <button>details</button></Link>

        </div>
      ))}
    </div>
  );
}

export default CompanyList;
