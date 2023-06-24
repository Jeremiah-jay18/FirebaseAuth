import React from "react";
import { UseUserAuth } from "./UserAuth";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsPencilSquare } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { RiLogoutBoxLine } from "react-icons/ri";
import Navbar from "./Navbar";



function Home() {
 const { user } = UseUserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  
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
      <aside className="w-64 h-screen px-6 py-4 border ">
        <div className="flex items-center justify-between px-3">
          <img src="../public/vite.svg" alt="" />
          <span className="font-medium">Valdymas</span>
          <span className="text-white bg-blue-500 rounded-full cursor-pointer sm:hidden lg:hidden">
            <GrFormClose size={30} />
          </span>
        </div>

        <nav className="mt-10">
          <Link>
            <ul className="py-2 mb-8 ease-in border all 300ms">
              <li className="flex items-center gap-4 before:h-10 before:w-2 before:bg-purple-500 before:absolute before:mr-5">
                <LuLayoutDashboard size={23} className="ml-5" />
                <span>Dashboard</span>
              </li>
            </ul>
          </Link>
          <Link>
            <ul className="flex items-center gap-4 p-2 mb-8 ease-in all 300ms">
              <BsPencilSquare size={23} />
              <li>Statistics</li>
            </ul>
          </Link>
          <Link>
            <ul className="flex items-center gap-4 p-2 mb-8 ease-in all 300ms">
              <SlCalender size={23} />
              <li>Student Calander</li>
            </ul>
          </Link>
          <button
            onClick={signout}
            className="flex items-center gap-4 px-3 py-2 mb-8 text-white ease-in bg-purple-800 rounded-md bg- all 300ms"
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
