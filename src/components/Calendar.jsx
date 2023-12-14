import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddTask from "../pages/AddTask";
import axios from "axios";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ onSelectEvent }) => {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (updatedTasks) => {
    setTasks(updatedTasks);
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
  };

  const handleTaskAdded = (task) => {
    console.log("Task added in MyCalendar:", task);
    const updatedEvents = [...events, task];
    onSelectEvent(task);
    onAddTask(updatedEvents);
    setSelectedDate(null);
  };

  
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
      <Calendar
        localizer={localizer}
        events={tasks}
        startAccessor="dueDate"
        endAccessor="dueDate"
        style={{ height: 500 }}
        onSelectEvent={onSelectEvent}
        onSelectSlot={handleSelectSlot}
      />
      {selectedDate && (
        <AddTask selectedDate={selectedDate} onTaskAdded={handleTaskAdded} />
      )}
    </div>
  );
};

export default MyCalendar;
