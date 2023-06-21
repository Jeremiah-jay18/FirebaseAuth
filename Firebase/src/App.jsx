import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";

import React from 'react'
import Home from "../components/Home";
import SignUp from "../components/SignUp";
import HomeProtection from "../components/HomeProtection";
import { UserAuth } from "../contextApi/userAuth";
function App() {
  return (
    <UserAuth>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/home"
          element={
            <HomeProtection>
              <Home />
            </HomeProtection>
          }
        ></Route>
      </Routes>
    </UserAuth>
  );
}

export default App
