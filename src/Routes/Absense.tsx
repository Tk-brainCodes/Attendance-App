import { useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import { Link } from "react-router-dom";
import { absenseRecords } from "../Components/data";
import { approvedAbsense } from "../Components/data";
import good from '../assets/icons/good.svg'
import bad from '../assets/icons/bad.svg'

const Absense = () => {
  const [records, setRecords] = useState(absenseRecords)
  const [approved, setApproved] = useState(approvedAbsense)
  // console.log(approvedAbsense)
  
  const removeExcuse = (id: number) => {
    const record = records.filter((item) => item.id !== id)
    setRecords(record)
  }

  const addExcuse = (id: number, name: string, course: string, semester: string, reason: string, time: string): void => {
    const approvedAbsense = {
      id: id,
      name: name,
      course: course,
      semester: semester,
      reason: reason,
      time: time
    }
    let list = [...records]
    list = list.filter((n) => n.id !== id)
    setRecords(list)
    const approvedList = [...approved, approvedAbsense]
    setApproved(approvedList)
  };
  // console.log(approved)
  
  
  return (
   <div className='py-[2rem] px-[1rem] md:px-[4rem] '>
    <div>
      <h1 className='text-2xl font-semibold text-[#4154F1]'>Absense</h1>
      <div className='flex gap-2'>
        <Link to={"/"} className="text-[#989797]">Analyse</Link> /{" "}
        <span>
          <Breadcrumb />
        </span>
      </div>
    </div>
      <div className="rounded-[8px] mt-[2rem] bg-[#ffffff] p-6">
        <h1 className="text-[18px] text-[#012970] font-medium">Absense records</h1>
        <div className="grid grid-cols-7 items-center justify-between bg-[#F6F6FE] mt-5 p-3 border-b-4">
          <div>#</div>
          <div>Student name</div>
          <div>Course</div>
          <div>Semester</div>
          <div>Absense reason</div>
          <div>Absense for</div>
          <div>Action</div>
        </div>
        <div>
          {records.map((item) => (
            <div className="grid grid-cols-7 p-6 items-center" key={item.id}>
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.course}</div>
              <div>{item.semester}</div>
              <div>{item.reason}</div>
              <div>{item.time}</div>
              <div className="flex gap-2">
                <button onClick={() => {addExcuse(item.id, item.name, item.course, item.semester, item.reason, item.time)}} className="cursor-pointer border rounded-[8px] p-3 bg-[#2ECA6A]">
                  <img src={good} alt="" />
                </button>
                <button onClick={() => {removeExcuse(item.id)}} className="cursor-pointer border rounded-[8px] p-3 bg-[#FF4861]">
                  <img src={bad} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[8px] mt-[2rem] bg-[#ffffff] p-6">
        <h1 className="text-[18px] text-[#012970] font-medium">Absense records</h1>
        <div className="grid grid-cols-6 items-center justify-between bg-[#F6F6FE] mt-5 p-3 border-b-4">
          <div>#</div>
          <div>Student name</div>
          <div>Course</div>
          <div>Semester</div>
          <div>Absense reason</div>
          <div>Absense for</div>
        </div>
        <div>
          {approved.map((item) => (
            <div className="grid grid-cols-6 p-6 items-center" key={item.id}>
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.course}</div>
              <div>{item.semester}</div>
              <div>{item.reason}</div>
              <div>{item.time}</div>
            </div>
          ))}
        </div>
      </div>
   </div>
  );
};

export default Absense;
