// import Breadcrumb from "../Components/Breadcrumb"
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className='grid grid-cols-2'>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
