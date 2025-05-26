import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="schedule">
      <h4>The Upcoming Schedule</h4>
      <span>On Thursday</span>
      <div className="day-schedule">
        <div className="card">
          <div className="card-title">
            <p>Health checkup complete</p>
            <p>🩼</p>
          </div>
          <p>11:00 AM</p>
        </div>
        <div className="card">
          <div className="card-title">
            <p>Ophthalmologist</p>
            <p>👁️</p>
          </div>
          <p>14:00 PM</p>
        </div>
      </div>

      <span>On Saturday</span>
      <div className="day-schedule">
        <div className="card">
          <div className="card-title">
            <p>Cardiologist</p>
            <p>❤️</p>
          </div>
          <p>12:00 AM</p>
        </div>
        <div className="card">
          <div className="card-title">
            <p>Neurologist</p>
            <p>🙍🏼‍♂️</p>
          </div>
          <p>16:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
