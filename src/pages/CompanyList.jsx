import { useEffect, useState } from "react";
import axios from "axios";

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
          <h1>{company.ContactFirstName}</h1>
          <p>{company.ContactLastName}</p>
          <p>{company.CompanyName}</p>
          <p>{company.CompanyEmail}</p>
          <p>{company.CompanyPhone}</p>
          <p>{company.Address}</p>
          <p>{company.Description}</p>
        </div>
      ))}
    </div>
  );
}

export default CompanyList;
