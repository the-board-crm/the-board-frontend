import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/AddTask.css";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [createdAt, setCreatedAt] = useState("");
  const [company, setCompany] = useState([]);
  const [companies, setCompanies] = useState([]);
  const storedToken = localStorage.getItem("authToken");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      title,
      description,
      dueDate,
      completed,
      contact: company,
    };
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/tasks`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log("Task added in AddTask:", response.data);
        setTitle("");
        setDescription("");
        setDueDate("");
        setCompleted("");
        setCreatedAt("");
        navigate("/tasks");

     
        // props.refreshCompany();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/api/companies", {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  return (
    <div className="AddTask">
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Due Date:</label>
          <input
            type="date"
            name="Due date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <div>
          <label>Choose a company:</label>
          <select id="company" onChange={(e) => setCompany(e.target.value)}>
            {companies.map((company) => {
              return <option value={company._id}>{company.companyName}</option>;
            })}
          </select>
        </div>

        <div className="form-group">
          <label>Completion:</label>
          <input
            type="checkbox"
            name="Completion"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>
        <div className="form-group">
          <label>Created At:</label>
          <input
            type="date"
            name="Created at"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTask;
