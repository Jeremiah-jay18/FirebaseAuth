import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import HomeProtection from "./components/HomeProtection.jsx";
import Home from "./components/Home.jsx";
import { UserAuth } from "./components/UserAuth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/homeprotection",
    element: <HomeProtection />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuth>
      <RouterProvider router={router} />
    </UserAuth>
  </React.StrictMode>
);
