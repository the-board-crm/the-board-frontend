import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import '../css/Homepage.css'
import { Link } from "react-router-dom";

function HomePage() {
  const { isLoggedIn, user, isLoading } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [todayTasks, setTodayTasks] = useState([]);
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

  const getTodayTasks = () => {
    const filteredTasks = tasks.filter((task) => {
      const today = new Date();
      const formatDate = `${today.getDate()}-${
        today.getMonth() + 1
      }-${today.getFullYear()}`;
      const taskDate = new Date(task.dueDate);
      const taskDateFormat = `${taskDate.getDate()}-${
        taskDate.getMonth() + 1
      }-${taskDate.getFullYear()}`;
      //LUXON OR DATE-FNS FOR MANAGING DATES AND TIME
      return taskDateFormat === formatDate ? task : null;
    });
    console.log(filteredTasks);
    setTodayTasks(filteredTasks);
  };

  useEffect(() => {
    getTodayTasks();
  }, [tasks]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>



      <hr />
      <h1 id="dashboard">Dashboard</h1>
      <hr />

      <div>
        <h2>Great to have you here, {user.name}!</h2>
      </div>
      <h3>Today's Tasks:</h3>
      {todayTasks.map((task) => (
        <div className="homepagetask" key={task._id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>{task.completed}</p>
          <Link to={`/api/companies/${task.contact?._id}`}>
            {task.contact?.companyName}
          </Link>
          <h2>Due date: {task.dueDate.substring(0, 10)}</h2>
          <Link to={`/edittask/${task._id}`}>
            {" "}
            <button>Task Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
