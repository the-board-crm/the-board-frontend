import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddTask from "./AddTask";

const localizer = momentLocalizer(moment);


const MyCalendar = ({ events, onSelectEvent, onAddTask }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    
    const handleSelectSlot = ({ start }) => {
        setSelectedDate(start);
    }

    const handleTaskAdded = (task) => {
        console.log("Task added in MyCalendar:", task);
        const updatedEvents = [...events, task];
        onSelectEvent(task);
        onAddTask(updatedEvents);
        setSelectedDate(null);
    }
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="dueDate"
        endAccessor="dueDate"
        style={{ height: 500 }}
        onSelectEvent={onSelectEvent}
        onSelectSlot={handleSelectSlot}
      />
      {selectedDate && (
        <AddTask selectedDate = {selectedDate} onTaskAdded = {handleTaskAdded} />
      )}
    </div>
  );
};

export default MyCalendar;
