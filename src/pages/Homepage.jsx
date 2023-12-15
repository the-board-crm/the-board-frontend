import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

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
      const formatDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`
      const taskDate = new Date(task.dueDate)
      const taskDateFormat =  `${taskDate.getDate()}-${taskDate.getMonth() + 1}-${taskDate.getFullYear()}`
      //LUXON OR DATE-FNS FOR MANAGING DATES AND TIME
      return taskDateFormat === formatDate ? task : null;
    });
    console.log(filteredTasks)
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
      <h1>Here is the homepage</h1>

      <div>
        <h2>Great to have you here, {user.name}!</h2>
      </div>
      <h3>Today's Tasks:</h3>
{todayTasks.map( (task)=> (
  <div>
    <p>{task.title}</p>
  </div>
) ) }
    </div>
  );
}

export default HomePage;
