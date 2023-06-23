import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { UseUserAuth } from "./UserAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = UseUserAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/homeprotection");
    } catch (error) {
      return alert(error.message);
    }
  }

  return (
    <div className="ssm:w-full sm:w-4/5 lg:w-1/3 p-10 mx-auto mt-10 border shadow-lg">
      <div>
        <h1 className="text-lg font-medium text-center">
          Welcome back <span>👋</span>
        </h1>
        <h2 className="mt-4 text-center">Please enter your details to login</h2>

        {/* Login */}
        <form className="mt-5">
          <div className="flex items-center justify-between gap-3 px-4 py-1 mb-4 border">
            <HiOutlineMail size={23} />
            <input
              autoFocus
              placeholder="Enter a valid email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-1 text-gray-600 outline-none "
              type="email"
            />
          </div>
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
            Login
          </button>
          <h6 className="mb-1 text-center ">
            Did you forget your password?{" "}
            <span className="font-medium cursor-pointer text-lime-600">
              Click here!
            </span>
          </h6>
          <hr className="bg-black h-0.5 rounded-sm mb-5" />
          <h6 className="mb-3 text-center mb-5">Or Sign In with </h6>
          <div className="ssm:gap-4 flex justify-between mt-2">
            <span
              role="button"
              className=" flex gap-2 px-3 py-1 font-medium text-white bg-blue-800 rounded-md cursor-pointer hover:bg-blue-600"
            >
              <FcGoogle size={23} /> Google
            </span>
            <span
              role="button"
              className="flex gap-2 px-3 py-1 font-medium text-white bg-gray-900 rounded-md cursor-pointer hover:bg-gray-700"
            >
              <AiFillGithub size={23} /> Github
            </span>
            <span
              role="button"
              className="flex gap-2 px-3 py-1 font-medium text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-700"
            >
              <FaTwitter size={23} />
              Twitter
            </span>
          </div>
          <h6 className="mt-8">
            Not a user?{" "}
            <Link
              to={"/signup"}
              className="font-medium text-purple-600 cursor-pointer"
            >
              Sign Up!
            </Link>
          </h6>
        </form>
      </div>
    </div>
  );
}

export default Login;
