import { Link } from "react-router-dom";
import chart from "../assets/icons/chart.svg";
import logout from "../assets/icons/logout.svg";
import { analyse, manage } from "./data";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='dashboard'>
        <Link to='/dashboard'>
          <div className='link'>
            <img src={chart} alt='' />
            <button>Dashboard</button>
          </div>
        </Link>
      </div>
      <div className='track'>
        <h1>ANALYSE</h1>
        {analyse.map((item) => (
          <Link to={item.path}>
            <div className='link'>
              <img src={item.icon} alt='spreadsheet' />
              <button>{item.label}</button>
            </div>
          </Link>
        ))}
      </div>
      <div className='analyze'>
        <h1>MANAGE</h1>
        {manage.map((item) => (
          <Link to={item.path}>
            <div className='link'>
              <img src={item.icon} alt='' />
              <button>{item.label}</button>
            </div>
          </Link>
        ))}
      </div>

      <div className='logout'>
        <img src={logout} alt='logout' />
        <h1>Logout</h1>
      </div>
    </div>
  );
};

export default Sidebar;
