import "./Sidebar.css";
import { MdCalendarToday, MdChat, MdDashboard, MdEventAvailable, MdHistory, MdInsertChart, MdSettings, MdSupportAgent } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Health<span>care.</span></h2>
       <ul>
          <li className="mini-heading">General</li>
          <li className="nav-items active"><MdDashboard /> <span>Dashboard</span></li>
          <li className="nav-items"><MdHistory /> <span>History</span></li>
          <li className="nav-items"><MdCalendarToday /> <span>Calender</span></li>
          <li className="nav-items"><MdEventAvailable /> <span>Appointment</span></li>
          <li className="nav-items"><MdInsertChart /> <span>Statistics</span></li>
          <li className="mini-heading">Tools</li>
          <li className="nav-items"><MdChat /> <span>Chat</span></li>
          <li className="nav-items"><MdSupportAgent /> <span>Support</span></li> 
      </ul>
      <p className="nav-items"><MdSettings /> <span>Setting</span></p>
    </div>
  );
};

export default Sidebar;
