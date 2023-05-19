import { Link } from "react-router-dom";
import chart from "../assets/icons/chart.svg";
import logout from "../assets/icons/logout.svg";
import { analyse, manage } from "./data";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation()
  return (
    <div className='sidebar fixed'>
      <div className='dashboard'>
        <Link to='/dashboard'>
          <div className='link'
            style={{
              backgroundColor: `${location.pathname === "/dashboard" ? "#F6F9FF" : ""}`,
            }}
          >
            <img src={chart} alt='' />
            <button
            style={{
              color: `${location.pathname ==="/dashboard" ? '#4154F1' : ""}`
            }}
            >
              Dashboard
            </button>
          </div>
        </Link>
      </div>
      <div className='track'>
        <h1>ANALYSE</h1>
        {analyse.map((item) => (
          <Link to={item.path} key={item.label}>
            <div 
              className='link'
              style={{
                backgroundColor: `${location.pathname === '/' + item.path ? "#F6F9FF" : ""}`,
              }}
            >
              <img src={item.icon} alt='spreadsheet' />
              <button
              style={{
                color: `${location.pathname === '/' + item.path ? '#4154F1' : ""}`
              }}
              >
                {item.label}
              </button>
            </div>
          </Link>
        ))}
      </div>
      <div className='analyze'>
        <h1>MANAGE</h1>
        {manage.map((item) => (
          <Link to={item.path} key={item.label}>
            <div 
            className='link'
            style={{
              backgroundColor: `${location.pathname === '/' + item.path ? "#F6F9FF" : ""}`,
            }}
            >
              <img src={item.icon} alt='' />
              <button
               style={{
                color: `${location.pathname === '/' + item.path ? '#4154F1' : ""}`
              }}
              >
                {item.label}
              </button>
            </div>
          </Link>
        ))}
      </div>

      <Link to='login'>
        <div className='logout'>
          <img src={logout} alt='logout' />
          <h1>Logout</h1>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
