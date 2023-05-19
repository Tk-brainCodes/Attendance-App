import { useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import { Link } from "react-router-dom";
import Edit from '../assets/icons/edit.svg'
import Trash from '../assets/icons/trash.svg'
import { currentSubjects } from "../Components/data";
import { useLocation } from "react-router-dom";

const Subject = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  const [search, setSearch] = useState('')

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }

  return (
    <div className='py-[2rem] px-[1rem] md:px-[4rem]'>
      <div className="flex items-center justify-between">
        <div>
          <h1 className='text-2xl font-semibold text-[#4154F1]'>Subject</h1>
          <div className='flex gap-2'>
            <Link to={"/"} className="text-[#989797]">Manage</Link> /{" "}
            <span>
              <Breadcrumb />
            </span>
          </div>
        </div>
        <div>
          <Link to='addteacher'>
            <button className="bg-[#0D6EFD] rounded-[8px] text-[#fff] py-2 px-3 cursor-pointer">Add Student</button>
          </Link>
        </div>
      </div>

      <div className="mt-[3rem] p-6 bg-[#fff] rounded-[8px]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[#012970] font-medium text-[18px]">Current Teachers</h1>
          </div>
          <div>
            <input 
              type="search" 
              name="search" 
              className="border p-2 outline-none" 
              placeholder="Search..." 
              value={search}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="grid grid-cols-6 items-center justify-between bg-[#F6F6FE] mt-5 p-3 border-b-4">
          <div>#</div>
          <div>Subject name</div>
          <div>Course</div>
          <div>Semester</div>
          <div>Assigned Teacher</div>
          <div>Action</div>
        </div>

        <div>
          {currentSubjects.filter((user) => {
           if (search === '') return user
           else if (user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) return user
            }).map((user) => (
            <div className="grid grid-cols-6 p-6 items-center" key={user.id}>
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.course}</div>
              <div>{user.semester}</div>
              <div>{user.assignedTeacher}</div>
              <div>
                <div className="flex gap-2">
                  <button>
                    <img src={Edit} alt="" />
                  </button>
                  <button>
                    <img src={Trash} alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subject;
