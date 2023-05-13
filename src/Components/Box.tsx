
type BoxProps = {
  title: string;
  date: string
};

const Box = ({ title, date }: BoxProps): JSX.Element => {
  return (
    <div className="shadow-md bg-[#FFFFFF] p-6 rounded-lg cursor-pointer hover:scale-105 transition-all">
      <h1 className="text-[#4154F1]">{title} | <span className="opacity-50">{date}</span></h1>
      <div className="flex mt-[1rem]">
        <div className=" bg-[#F6F6FE] rounded-full"></div>
        <div className="ml-[2rem]">
            <h1 className="text-[28px] text-[#4154F1] font-bold">145</h1>
            <h2 className="text-[#012970] font-bold text-[14px]">12% <span className="opacity-50"> Increase </span></h2>
        </div>
      </div>
    </div>
  );
};

export default Box