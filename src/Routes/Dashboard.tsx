import Box from "../Components/Box";
import Breadcrumb from "../Components/Breadcrumb";
import Dashboardchart from "../Components/Dashboardchart";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className='py-[2rem] px-[1rem] md:px-[4rem]'>
        <h1 className='text-2xl font-semibold text-[#4154F1]'>Dashboard</h1>
        <p className='flex gap-2'>
          <Link to={"/"}>Home</Link> /{" "}
          <span>
            <Breadcrumb />
          </span>
        </p>
        <div className='lg:flex mt-[4rem] gap-[2rem]'>
          <div className='lg:w-[60%]'>
            <div className='grid sm:grid-cols-3 gap-[20px] w-[100%]'>
              <Box title='Attendance' date='Today' />
              <Box title='Attendance' date='Today' />
              <Box title='Attendance' date='This month' />
            </div>
            <div className='chart mt-[2rem] w-[100%]'>
              <Dashboardchart />
            </div>
          </div>
          <div className='lg:w-[40%] flex flex-col gap-2 '>
            <div className='w-[100%] rounded-lg mt-[2rem] md:mt-0'>
              <div className='shadow-md bg-[#fff] w-[100%] rounded-lg p-6 flex flex-col gap-[3rem]'>
                <h1 className='text-[18px] text-[#27CDA5]'>
                  Recent Activities{" "}
                  <span className='text-[#899BBD] text-[14px]'>| Today</span>
                </h1>
                <div className='flex items-center justify-between gap-5'>
                  <h1>32 min</h1>
                  <h1>New teacher created</h1>
                </div>
                <div className='flex items-center justify-between gap-5'>
                  <h1>32 min</h1>
                  <h1>New teacher created</h1>
                </div>
                <div className='flex items-center justify-between gap-5'>
                  <h1>32 min</h1>
                  <h1>New teacher created</h1>
                </div>
              </div>
            </div>
            <div className='w-[100%] rounded-lg mt-[2rem] md:mt-0'>
              <div className='shadow-md bg-[#fff] w-[100%] rounded-lg p-6 flex flex-col gap-[3rem]'>
                <h1>Attendance Report | This month</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
