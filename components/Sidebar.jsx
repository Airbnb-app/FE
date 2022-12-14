import React from "react";
import { TbBrandAirbnb } from "react-icons/tb";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxLine } from "react-icons/ri";
import Head from "next/head";

import { useCookies } from "react-cookie";

const Sidebar = ({ dashboard, profile, history }) => {
  const [cookies, setCookie, removeCookie] = useCookies();

  const logoutHandler = () => {
    removeCookie("name");
    removeCookie("role");
    removeCookie("token");
  };

  return (
    <>
      <Head>
        {/* ini cdn untuk font poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex flex-col">
        <div className=" bg-pink-airbnb h-screen p-5">
          <div className="h-20 flex justify-center items-center ">
            <div className="flex justify-center items-center ">
              <div className="text-5xl text-white flex items-center ">
                <TbBrandAirbnb />
              </div>
              <h1 className="text-4xl text-white ">airbnb</h1>
            </div>
          </div>
          <div className="flex flex-col items-center  mt-2">
            <div className="text-7xl text-white">
              <CgProfile />
            </div>
            <div className="text-white text-2xl font-bold">John Doe</div>
          </div>
          <div className="flex flex-col justify-between h-3/4  ">
            <div className="pt-10 flex justify-center">
              <div className="mb-2">
                <a href="/dashboard" className={`h-16 ${dashboard}-xl text-white rounded-xl flex items-center p-3 m-2 hover:shadow-lg hover:font-bold hover:z-10 transition hover:scale-105 `}>
                  <div className=" flex items-center h-full">
                    <div className="flex items-center mr-5  h-full  text-white text-xl">
                      <TbBrandAirbnb />
                    </div>
                    <h2 className={`text-white text-xl `}>Dashboard</h2>
                  </div>
                </a>
                <a href="/profile" className={` ${profile}-xl h-16 rounded-xl flex items-center p-3 m-2 hover:shadow-lg hover:font-bold hover:z-10 transition hover:scale-105 `}>
                  <div className=" flex items-center  h-full">
                    <div className="flex items-center mr-5  h-full text-white text-xl">
                      <CgProfile />
                    </div>
                    <h2 className={` text-white text-xl`}>Profile</h2>
                  </div>
                </a>
                <a href="/history" className={`${history}-xl h-16 rounded-xl flex items-center p-3 m-2 hover:shadow-lg hover:font-bold hover:z-10 transition hover:scale-105 `}>
                  <div className=" flex items-center  h-full">
                    <div className="flex items-center mr-5  h-full text-white text-xl">
                      <FaHistory />
                    </div>
                    <h2 className={` text-white text-xl`}>History</h2>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-5">
              <a href="/" className="flex justify-center items-center" onClick={() => logoutHandler()}>
                <div className="text-white text-xl mr-3">
                  <RiLogoutBoxLine />
                </div>
                <div className="text-white text-xl">Logout</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
