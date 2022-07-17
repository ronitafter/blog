import React from "react";
import Routing from "../routing/Routing";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="Home">
      <Routing />
      <Outlet />
    </div>
  );
};

export default Main;
