import React from "react";
import "./Calendar.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Schedule from "./Schedule";

const Calendar = () => {
  const dates = [
    { day: "Mon", date: 25, eventTimes: ["10:00", "11:00", "12:00"] },
    { day: "Tue", date: 26, eventTimes: ["06:00", "09:00", "10:00"] },
    { day: "Wed", date: 28, eventTimes: ["12:00", "-", "13:00"] },
    { day: "Thu", date: 29, eventTimes: ["10:00", "11:00", "-"] },
    { day: "Fri", date: 30, eventTimes: ["-", "14:00", "16:00"] },
    { day: "Sat", date: 31, eventTimes: ["12:00", "14:00", "15:00"] },
    { day: "Sun", date: 27, eventTimes: ["09:00", "10:00", "11:00"] }
  ];

  return (
    <>
    <div className="calendar">

      <div className="profile-addBtn">
          <img className="profile" src="/assests/avtar.png" alt="User" />
          <button>+</button>
      </div>

      <div className="calendar-title">
        <h4>October 2021</h4>
        <div className="arrows">
          <FaArrowLeft />
          <FaArrowRight />
        </div>
      </div>

      <div className="calendar-grid">
        {dates.map((d, i) => (
          <div key={i} className="date-block">
            <div className="day">{d.day}</div>
            <div className={`date ${i === 2 ? "active" : ""}`}>{d.date}</div>
            <div className="event-times">
              {d.eventTimes.map((time, index) => (
                <div key={index} className="time">{time !== "--" ? time : "\u00A0"}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="calender-appointment">
        <div className="dentist">
          <div className="c-heading">
              <h5>Dentist</h5>
              <p>🦷</p>
          </div>
          <p>09:00-11:00</p>
          <p>Dr. Cameron Willamson</p>
        </div>
        <div className="physiotherapy">
          <div className="c-heading">
            <h5>Physiotherapy Appoinment</h5>
            <p>💪</p>
          </div>
          <p>11:00-12:00</p>
          <p>Dr. Kevin Djones</p>
        </div>
      </div>
    </div>

    <Schedule />
  </>  
  );
};

export default Calendar;
