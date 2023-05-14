import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-[100%] mt-[8vh] bg-[#F0F4FB] min-h-[100vh] ml-[15vw]'>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
