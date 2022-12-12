import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="bg-blue-gray-400">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
