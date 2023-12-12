import { useState } from "react";
import axios from "axios";


function addTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { companyId } = props;
    const requestBody = { title, description, dueDate, completed, companyId };

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${import.meta.env.VITE_API_URL}/api/tasks`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTitle("");
        setDescription("");
        setDueDate("");
        setCompleted("");

        // props.refreshCompany();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddTask">
      <h3>Add New Task</h3>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Due Date:</label>
        <input
          type="date"
          name="Due date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <label>Completion:</label>
        <input
            type="checkbox"
            name="Completion"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default addTask;