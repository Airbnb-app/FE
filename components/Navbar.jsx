import React from "react";

const Navbar = ({ namePages }) => {
  return (
    <div className="w-full overflow-hidden ">
      <div className="flex flex-col p-5">
        <div className="flex justify-between">
          <p className="text-3xl font-bold text-pink-airbnb pb-3 flex justify-center  items-center">{namePages}</p>
          <div className="flex space-x-4 items-center">
            <img src="/logo-3.png" alt="logo" className="h-10" />
          </div>
        </div>
      </div>
      <div className="mx-5">
        <hr className="border-pink-airbnb" />
      </div>
    </div>
  );
};

export default Navbar;
