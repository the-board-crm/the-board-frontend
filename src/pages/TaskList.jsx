import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/api/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <p>Due date: {task.dueDate}</p>
          <p>{task.completed}</p>
          <p>{task.contact}</p>
          <p>{task.createdAt}</p>
          <Link to={`/api/tasks/${task._id}`}> <button>Task Edit</button></Link>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
