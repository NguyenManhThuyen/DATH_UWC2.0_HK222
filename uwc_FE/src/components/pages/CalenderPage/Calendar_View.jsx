import { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import React, { useRef, useState, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import '@fullcalendar/core/main.css';
// import '@fullcalendar/daygrid/main.css';
import { Link } from 'react-router-dom';
import './Calendar_View.css';
function Calendar() {
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const noteRef = useRef(null);
  const calendarRef = useRef(null);

  const handleSelect = (arg) => {
    setSelectedDate(arg.start);
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const note = noteRef.current.value;
    const eventObj = {
      title: note,
      start: selectedDate,
      allDay: true,
    };
    calendarRef.current.getApi().addEvent(eventObj);
    setShowForm(false);
  };
  const [task, setTask] = useState('Số Nhiệm vụ: 2');
  const handleAddTask = (e) => {
    e.preventDefault();
    setNotes((prevTasks) => ({
      ...prevTasks,
      [selectedDate.toISOString()]: task,
    }));
    setTask('');
  };

  console.log(showForm);
  return (
    <div className="calendar">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        select={handleSelect}
        dayCellContent={({ date }) => (
          <div className="day-cell">
            <Link to={'/ListTypeCalendarView'}>
              <div className="text-calendar">
                {date.getDate() === 8 && <div className="task">{task}</div>}
              </div>
            </Link>
            <div className="day-number">{date.getDate()}</div>
            <div className="backgr-icon">
              <div className="leftcontent"></div>

              <div className="add-icon" onClick={() => setSelectedDate(date)}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
        )}
      />

      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="note">Note:</label>
            <textarea id="note" name="note" ref={noteRef} />
            <button type="submit">Add note</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Calendar;
