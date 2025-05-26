import Sidebar from "./components/Sidebar";
import HumanBodyCard from "./components/HumanBodyCard";
import Calendar from "./components/Calender";
import "./App.css";

const App = () => {
  return (
    <>
    <div className="healthcare-dashboard">
      <div className="sidebar">
          <Sidebar />
      </div>
      <div className="dashboard">
          <HumanBodyCard />
      </div>
      <div className="calender">
          <Calendar />
      </div> 
    </div>
      
    </>     
  );
};

export default App;
