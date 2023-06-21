import React from "react";
import { UseUserAuth } from "./UserAuth";
import { useNavigate, Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsPencilSquare } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { RiLogoutBoxLine } from "react-icons/ri";
import Navbar from "./Navbar";

function Home() {
  const { logout } = UseUserAuth();
  const navigate = useNavigate();
  async function signout() {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="h-screen w-64 border py-4 px-6 ">
        <div className="px-3 flex justify-between items-center">
          <img src="../public/vite.svg" alt="" />
          <span className="font-medium">Valdymas</span>
          <span className=" sm:hidden lg:hidden cursor-pointer text-white bg-blue-500 rounded-full">
            <GrFormClose size={30} />
          </span>
        </div>

        <nav className="mt-10">
          <Link>
            <ul className=" border py-2 all ease-in 300ms mb-8">
              <li className=" items-center gap-4 before:h-10 before:w-2  before:bg-purple-500 before:absolute before:mr-5 flex">
                <LuLayoutDashboard size={23} className="ml-5" />
                <span>Dashboard</span>
              </li>
            </ul>
          </Link>
          <Link>
            <ul className="flex gap-4  p-2 items-center all ease-in 300ms mb-8">
              <BsPencilSquare size={23} />
              <li>Statistics</li>
            </ul>
          </Link>
          <Link>
            <ul className="flex gap-4  p-2 items-center all ease-in 300ms mb-8">
              <SlCalender size={23} />
              <li>Sudent Calander</li>
            </ul>
          </Link>
          <button
            onClick={signout}
            className="bg- bg-purple-800  rounded-md text-white flex gap-4  px-3 py-2 items-center all ease-in 300ms mb-8"
          >
            <RiLogoutBoxLine size={23} />
            <span>Sign Out</span>
          </button>
        </nav>
      </aside>
      {/* Navbar */}
      <Navbar />
    </div>
  );
}

export default Home;
