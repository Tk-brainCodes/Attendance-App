import Breadcrumb from "../Components/Breadcrumb";
import { Link } from "react-router-dom";
import { currentTeachers } from "../Components/data";
import Edit from "../assets/icons/edit.svg"
import Trash from "../assets/icons/trash.svg"
import { useState } from "react";

const Teacher = () => {
  const [teachers, setTeachers] = useState(currentTeachers)
  const [search, setSearch] = useState('')

  const deleteTeacher = (id: number) => {
    const list = teachers.filter((teacher) => teacher.id !== id)
    setTeachers(list)
  }

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }

  return (
    <div className='py-[2rem] px-[1rem] md:px-[4rem]'>
      <div className="flex items-center justify-between">
        <div>
          <h1 className='text-2xl font-semibold text-[#4154F1]'>Teacher</h1>
          <div className='flex gap-2'>
            <Link to={"/"} className="text-[#989797]">Manage</Link> /{" "}
            <span>
              <Breadcrumb />
            </span>
          </div>
        </div>
        <div>
          <Link to='addteacher'>
            <button className="bg-[#0D6EFD] rounded-[8px] text-[#fff] py-2 px-3 cursor-pointer">Add Teacher</button>
          </Link>
        </div>
      </div>

      <div className="mt-[3rem] p-6 bg-[#fff] rounded-[8px]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className= 'text-[#012970] font-medium text-[18px]'>Current Teachers</h1>
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

        <div className="grid grid-cols-7 items-center justify-between bg-[#F6F6FE] mt-5 p-3 border-b-4">
          <div>#</div>
          <div>Teacher name</div>
          <div>Address</div>
          <div>email</div>
          <div>Username</div>
          <div>Password</div>
          <div>Action</div>
        </div>

        <div>
          {teachers.filter((user) => {
            if (search === '') return user
            else if (user.name.toLowerCase().includes(search.toLowerCase())) return user
          }).map((user) => (
            <div className="grid grid-cols-7 p-6 items-center" key={user.id}>
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.address}</div>
              <div>{user.email}</div>
              <div>{user.username}</div>
              <div>{user.password}</div>
              <div>
                <div className="flex gap-2">
                  <button>
                    <img src={Edit} alt="" />
                  </button>
                  <button onClick={() => deleteTeacher(user.id)}>
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

export default Teacher;
