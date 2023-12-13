import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditTask() {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    dueDate: "",
    completed: "",
    createdAt: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + '/api/tasks'+ `/${id}`)
      .then((response) => {
        setTaskDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const deleteFunction = () => {
    axios
      .delete(import.meta.env.VITE_API_URL + '/api/tasks' + `/${id}`)
      .then(() => {
        navigate("/tasks");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editSubmit = () => {
    const updatedData = {
      title: taskDetails.title,
      description: taskDetails.description,
      dueDate: taskDetails.dueDate,
      completed: taskDetails.completed,
      createdAt: taskDetails.createdAt,
    };

    axios
      .put(import.meta.env.VITE_API_URL + '/api/tasks' + `/${id}`, updatedData)
      .then((response) => {
        console.log("task details updated", response.data);
        navigate("/tasks");
      })
      .catch((error) => {
        console.error("error updating task details:", error);
      });
  };

  return (
    <div>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={taskDetails.title}
          onChange={(e) =>
            setTaskDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <hr />

      <label>
        Description:
        <input
          type="text"
          name="description"
          value={taskDetails.description}
          onChange={(e) =>
            setTaskDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <hr />

      <label>
        Due Date:
        <input
          type="date"
          name="dueDate"
          value={taskDetails.dueDate}
          onChange={(e) =>
            setTaskDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <hr />

      <label>
        Completed:
        <input
          type="checkbox"
          name="completed"
          value={taskDetails.completed}
          onChange={(e) =>
            setTaskDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <hr />

      <label>
        Created at:
        <input
          type="text"
          name="createdAt"
          value={taskDetails.createdAt}
          onChange={(e) =>
            setTaskDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <hr />

      <button onClick={editSubmit}>Save</button>
      <button onClick={deleteFunction}>Delete</button>
    </div>
  );
}

export default EditTask;
