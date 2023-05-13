import { useState, useEffect } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Dropdown from "../Components/Dropdown";
import DatePicker from "../Components/DatePicker";

const Attendance = () => {
  const [selectedOption, setSelectedOption] = useState<null | string | number>(
    null
  );
  const [activeDropdown, setActiveDropdown] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOptionClicked = (value: number | string | null) => (): void => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const handelOpenDropdown = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(2);
  };

  const listOfCourses = [
    { id: 1 },
    {
      name: "Advanced java",
    },
    { name: "Automata theory" },
    { name: "Windows programming" },
    { name: "Advanced database" },
  ];

  const section = [
    { id: 2 },
    { name: "A" },
    { name: "B" },
    { name: "C" },
    { name: "D" },
    { name: "E" },
    { name: "F" },
  ];

  return (
    <div className='py-[2rem] px-[1rem] md:px-[4rem]'>
      <h2 className='text-2xl font-semibold text-[#4154F1]'>Attendance</h2>
      <div className='flex gap-2'>
        <span className='text-[#989797]'>Teack /</span>
        <span className='text-[#444444]'>
          <Breadcrumb />
        </span>
      </div>
      <div className='w-[60vw] flex items-center gap-3 bg-white h-[110px] mt-[20px] rounded-[5px] px-[26px] py-[16px]'>
        <Dropdown
          data={listOfCourses}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedOption={selectedOption}
          onOptionClicked={onOptionClicked}
          name={"Subject"}
          handelOpenDropdown={handelOpenDropdown}
          activeDropdown={activeDropdown}
        />
        <Dropdown
          data={section}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedOption={selectedOption}
          onOptionClicked={onOptionClicked}
          name={"Section"}
          handelOpenDropdown={handelOpenDropdown}
          activeDropdown={activeDropdown}
        />
        <DatePicker />
        <button className='bg-[#4154F1] text-white px-2 py-2 text-sm rounded-[8px]'>
          Generate Sheet
        </button>
      </div>
    </div>
  );
};

export default Attendance;
