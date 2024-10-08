import React from "react";
import logo from "../../assets/Navbar/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="py-[15px] px-[80px] flex items-center justify-between">
        <div>
          <picture className="cursor-pointer">
            <img src={logo} alt={logo} />
          </picture>
        </div>
        <div>
          <ul className="flex gap-x-[24px]">
            <li className="font-Poppins font-semibold cursor-pointer">MENU</li>
            <li className="font-Poppins font-semibold cursor-pointer">
              LOCATION
            </li>
            <li className="font-Poppins font-semibold cursor-pointer">ABOUT</li>
            <li className="font-Poppins font-semibold cursor-pointer">
              CONTACT
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-red-600 px-[16px] py-[6px] rounded-md font-Poppins text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
