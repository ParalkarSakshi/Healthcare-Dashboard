import "./ActivityChart.css";

const ActivityChart = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="activity">
      <div className="activity-title">
        <h4>Activity</h4>
        <p className="activity-para">3 Activity on this week</p>
      </div>
      <div className="bar-container">
        {days.map((day, index) => (
          <div className="activity-bar" key={index}>
            <div className="bar-fill-container">
              <div className="bar-fills" style={{ height: `80px` }}></div>
              <div className="bar-fill" style={{ height: `50px` }}></div>
              <div className="bar-fill" style={{ height: `70px` }}></div>
              <div className="bar-fills" style={{ height: `20px` }}></div>
              <div className="bar-fill" style={{ height: `40px` }}></div>
              <div className="bar-fill" style={{ height: `20px` }}></div>
            </div>
            <span>{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
