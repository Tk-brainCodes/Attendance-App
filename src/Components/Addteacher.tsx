import { Link } from "react-router-dom"
import Breadcrumb from "./Breadcrumb"
const Addteacher = () => {
  return (
    <div className='py-[2rem] px-[1rem] md:px-[4rem] '>
      <div>
        <h1 className='text-2xl font-semibold text-[#4154F1]'>Absense</h1>
        <div className='flex gap-2'>
          <Link to={"/"} className="text-[#989797]">Analyse</Link>
          <span>
            <Breadcrumb />
          </span>
        </div>
      </div>

      <form className="mt-[5vh] shadow-lg bg-[#fff] p-6 w-[50%]">
        <h1 className="text-[#012970] font-medium text-[18px] mb-4">Add a Teacher</h1>
        <div className="flex gap-5 flex-col">
          <div>
            <h1 className="text-[#444444] font-normal text-[15px] mb-2">Full Name</h1>
            <input type="text" name="Fullname" placeholder="Name"/>
          </div>

          <div className="flex gap-5">
            <div>
              <h1 className="text-[#444444] font-normal text-[15px] mb-2">Username</h1>
              <input type="text" name="Username" placeholder="Username"/>
            </div>
            <div>
              <h1 className="text-[#444444] font-normal text-[15px] mb-2">Password</h1>
              <input type="text" name="Password" placeholder="Password" className="w-[100%]" />
            </div>
          </div>

          <div>
            <h1 className="text-[#444444] font-normal text-[15px] mb-2">Email</h1>
            <input type="text" name="email" placeholder="email" />
          </div>

          <div>
            <h1 className="text-[#444444] font-normal text-[15px] mb-2">Address</h1>
            <input type="text" name="address" placeholder="Apartment, Studio, or Floor" />
          </div>
        </div>
        <div className="flex gap-3 mt-3">
          <button className="bg-[#0D6EFD] text-[#fff] py-[7px] px-[12px] rounded-[6px]">Submit</button>
          <button className="bg-[#6C757D] text-[#fff] py-[7px] px-[12px] rounded-[6px]">Reset</button>
        </div>
      </form>
    </div>
  )
}

export default Addteacher