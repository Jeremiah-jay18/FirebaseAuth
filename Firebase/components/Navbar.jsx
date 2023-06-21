import React from 'react'
import { AiOutlineBell } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
function Navbar() {
    const date = new Date()
    const day = date.toUTCString()
    
    console.log(day)
  return (
    <div className="border w-3/5 px-12 py-4">
      {/* Top Nav */}
      <div className="flex justify-between">
        <div>
          <span className="font-medium text-xl">Dashboard</span>
          <h3>{day}</h3>
        </div>
        <div className="items-center flex gap-10">
          <span>
            {" "}
            <BiMessageSquareDetail size={28} />
          </span>
          <span>
            <AiOutlineBell size={28} />
          </span>
          <h3 className="flex gap-2 items-center">
            <span className="bg-blue-500 rounded-sm p-2">JA</span>
            <span className="font-medium">Jeremiah</span>
          </h3>
        </div>
      </div>

      <div className="rounded-xl mt-10 w-full bg-purple-300 px-5 py-8 flex items-center justify-between">
        <div>
                  <h1 className="font-medium text-3xl">Hi, Jerry</h1>
                  <h2 className='mt-2'>Welcome to your personal dashboard</h2>
              </div>
              <img src="../public/student.jpg" alt="" className='rounded-xl w-24'/>
      </div>
    </div>
  );
}

export default Navbar
