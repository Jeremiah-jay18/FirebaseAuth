import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { UseUserAuth } from '../contextApi/userAuth';

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  const { signUp } = UseUserAuth();
  const navgigate = useNavigate()

 async function handleSubmit(e) {
   e.preventDefault();
   try {
     await signUp(email, password);
     navgigate('/home')
   } catch (error) {
    return alert(error.message);
   }
 }




  return (
    <div className="p-10 mx-auto mt-10 border shadow-md ssm:w-full sm:w-4/5 lg:w-1/3">
      {/* Head */}
      <div>
        <h1 className="text-lg font-medium text-center">
          Sign Up To Create An Account <span>😃</span>
        </h1>

        {/* SignUp*/}
        <form className="mt-5">
          <span>Fullname</span>
          <div className="flex items-center justify-between gap-3 px-4 py-1 mb-4 border">
            <AiOutlineUser size={23} />
            <input
              autoFocus
              placeholder="Enter your fullname"
              onChange={(e) => setName(e.target.value)}
              className="w-full p-1 text-gray-600 outline-none "
              type="text"
            />
          </div>
          <span>Email</span>
          <div className="flex items-center justify-between gap-3 px-4 py-1 mb-4 border">
            <HiOutlineMail size={23} />
            <input
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-1 text-gray-600 outline-none "
              type="email"
            />
          </div>
          <span>Create password</span>
          <div className="flex items-center justify-between gap-3 px-4 py-1 border">
            <RiLockPasswordLine size={23} />
            <input
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-1 text-gray-600 outline-none "
              type="password"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="mb-3 cursor-pointer mt-3 w-full bg-blue-600 p-1.5 text-white rounded-md"
          >
            Sign Up
          </button>
          <hr className="bg-black h-0.5 rounded-sm mb-5" />
          <h6 className="mb-3 text-center">Or Sign Up with </h6>
          <div className="flex justify-between mt-2">
            <span className="flex gap-2 px-3 py-1 font-medium text-white bg-blue-800 rounded-md cursor-pointer hover:bg-blue-600">
              <FcGoogle size={23} /> Google
            </span>
            <span className="flex gap-2 px-3 py-1 font-medium text-white bg-gray-900 rounded-md cursor-pointer hover:bg-gray-700">
              <AiFillGithub size={23} /> Github
            </span>
            <span className="flex gap-2 px-3 py-1 font-medium text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-700">
              <FaTwitter size={23} />
              Twitter
            </span>
          </div>
          {/* <h6 className="mt-8">
            Already signed?
            <Link
              to={"/signup"}
              className="font-medium cursor-pointer text-lime-600"
            >
              Login
            </Link>
          </h6> */}
        </form>
      </div>
    </div>
  );
}


export default SignUp
