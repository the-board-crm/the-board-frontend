import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../css/TaskList.css'

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
    <div className="task-card-container">
      {tasks.map((task) => (
        <div className='task-card' key={task._id}>
          <h1>{task.title}</h1>
          
          <h2>Due date: {task.dueDate}</h2>
          <Link to={`/edittask/${task._id}`}> <button>Task Edit</button></Link>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
