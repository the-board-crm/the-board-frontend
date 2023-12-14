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
        setTasks(response.data)
        console.log(response.data);
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
          <p>{task.description}</p>
          <p>{task.completed}</p>

          <Link to={`/api/companies/${task.contact?._id}`}>{task.contact?.companyName}</Link>
          
          <h2>Due date: {task.dueDate.substring(0, 10)}</h2>
          <Link to={`/edittask/${task._id}`}> <button>Task Edit</button></Link>
        </div>
      ))}
    </div>
  );
}



export default TaskList;
