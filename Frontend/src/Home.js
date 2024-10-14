import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home;
