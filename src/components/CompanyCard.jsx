import { Link } from "react-router-dom";


function CompanyCard ( { CompanyName, CompanyDescription, _id } ) {
  
  return (
    <div className="ProjectCard card">
      <Link to={`/companies/${_id}`}>
        <h3>{CompanyName}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{CompanyDescription} </p>
    </div>
  );
}

export default CompanyCard;