import { useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import DatePicker from "../Components/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { currentStudents } from "../Components/data";

const Attendance = () => {
  const [subject, setSubject] = useState("");
  const [section, setSection] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleChangeSection = (event: SelectChangeEvent) => {
    setSection(event.target.value as string);
  };

  const handleChangeSubject = (event: SelectChangeEvent) => {
    setSubject(event.target.value as string);
  };

  return (
    <div className='py-[2rem] px-[1rem] md:px-[4rem]'>
      <h2 className='text-2xl font-semibold text-[#4154F1]'>Attendance</h2>
      <div className='flex gap-2'>
        <span className='text-[#989797]'>Attendance Sheet</span>
        <span className='text-[#444444]'>
          <Breadcrumb />
        </span>
      </div>
      <div className='w-[60vw] flex items-center gap-3 bg-white h-[110px] mt-[20px] rounded-[5px] px-[26px] py-[16px]'>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Subject</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={subject}
            label='Subject'
            onChange={handleChangeSubject}
          >
            <MenuItem value={10}>Java System Programming</MenuItem>
            <MenuItem value={20}>Windows System Programming</MenuItem>
            <MenuItem value={30}>Graphics Design</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Section</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={section}
            label='Section'
            onChange={handleChangeSection}
          >
            <MenuItem value={10}>A</MenuItem>
            <MenuItem value={20}>B</MenuItem>
            <MenuItem value={30}>C</MenuItem>
          </Select>
        </FormControl>

        <DatePicker />
        <button className='bg-[#4154F1] text-white px-8 flex py-2 text-xs rounded-[8px]'>
          Generate Sheet
        </button>
      </div>

      <div className='w-[75vw] h-fit mt-[5em] bg-white px-4 py-4'>
        <h3 className='text-[#012970] font-semibold mt-[20px]'>
          Attendance Sheet
        </h3>
        <div className='grid grid-cols-7 items-center justify-between bg-[#F6F6FE] mt-5 p-3 border-b-4'>
          <div>#</div>
          <div>Student name</div>
          <div>Student ID</div>
          <div>Status</div>
        </div>

        <div>
          {currentStudents
            .filter((user) => {
              if (search === "") return user;
              else if (
                user.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              )
                return user;
            })
            .map((user) => (
              <div className='grid grid-cols-7 p-6 items-center' key={user.id}>
                <div className='flex gap-4 items-center justify-start'>
                  <input
                    id='default-checkbox'
                    type='checkbox'
                    value=''
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />

                  {user.id}
                </div>
                <div>{user.name}</div>
                <div>#2123123</div>
                <div>Present</div>
              </div>
            ))}
        </div>
      </div>
      <button className='bg-[#4154F1] px-6 py-3 rounded-md text-sm text-white mt-4'>Submit</button>
    </div>
  );
};

export default Attendance;
