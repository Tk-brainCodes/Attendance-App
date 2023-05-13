// import Breadcrumb from "../Components/Breadcrumb"
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
