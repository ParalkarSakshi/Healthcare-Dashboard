import { FaSearch } from "react-icons/fa";
import "./Header.css";
import { MdArrowDropDown, MdNotifications} from "react-icons/md";

const Header = () => {
  return (
    <div className="header">
      <div className="search-box">
        <div className="search-bar">
          <FaSearch style={{opacity:'0.5'}} />
          <input type="text" placeholder="Search..." />
        </div>
        <MdNotifications  style={{color:'#05056b'}}/>
      </div>

      <div className="dashboard">
        <h2>Dashboard</h2>
        <div className="dropdown">
          <p>This Week</p>
          <p><MdArrowDropDown size={30} /></p>
        </div>
      </div>
    </div>
  );
};

export default Header;
