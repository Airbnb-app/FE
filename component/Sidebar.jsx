import React from "react";
import { TbBrandAirbnb } from "react-icons/tb";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <div className=" bg-pink-airbnb w-80 h-screen p-5">
      <div className="h-96">
        <div className="flex justify-center items-center">
          <div className="text-5xl text-white flex items-center ">
            <TbBrandAirbnb />
          </div>
          <h1 className="text-5xl text-white ">airbnb</h1>
        </div>
      </div>
      <div className="flex flex-col justify-between bg-green-50 ">
        <div className="pt-10">
          <div className=" p-2  border-b-2">
            <a href="/dashboard" className={`h-16 text-white rounded-xl flex items-center p-3 m-2 hover:shadow-lg hover:font-bold hover:z-10 transition hover:scale-105 `}>
              <div className=" flex items-center  h-full">
                <div className="flex items-center mr-10  h-full  ">
                  <TbBrandAirbnb />
                </div>
                <h2 className={` text-white `}>Dashboard</h2>
              </div>
            </a>
            <a href="/profile" className={` h-16 rounded-xl flex items-center p-3 m-2 hover:shadow-lg hover:font-bold hover:z-10 transition hover:scale-105 `}>
              <div className=" flex items-center  h-full">
                <div className="flex items-center mr-3  h-full text-white">
                  <CgProfile />
                </div>
                <h2 className={` text-white`}>Profile</h2>
              </div>
            </a>
            <a href="/history" className={` h-16 rounded-xl flex items-center p-3 m-2 hover:shadow-lg hover:font-bold hover:z-10 transition hover:scale-105 `}>
              <div className=" flex items-center  h-full">
                <div className="flex items-center mr-3  h-full text-white">
                  <FaHistory />
                </div>
                <h2 className={` text-white`}>History</h2>
              </div>
            </a>
          </div>
        </div>
        <div>
          <a href="/logout" className="flex justify-center items-center">
            <div className="text-white">
              <RiLogoutBoxLine />
            </div>
            <div className="text-white">Logout</div>
          </a>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Sidebar;
