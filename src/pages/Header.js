import React from 'react';
import logo from "./images/mobile/843a72f8926eb795113871cdb49bc0b1 2.png";
import { AiOutlineMenu } from "react-icons/ai";

function Header(props) {
  return (
    <div className="pt-8 pb-6 flex justify-between px-4">
        <div className="relative top-3 text-2xl lg:top-0 lg:left-32 ">
          <AiOutlineMenu className="lg:hidden" style={{ color: "#0297F1" }} />
          <div className="hidden lg:grid">
            <p className="text-lg">Вам перезвонить?</p>
            <p className="text-lg text-orange-600">+7 (7172) 97 83 83</p>
          </div>
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="lg:right-32 relative">
          <div className="hidden lg:grid ">
            <p className="text-lg">Режим работы</p>
            <p className="text-lg text-orange-600">Пн-Пт 09:00-18:00</p>
          </div>
        </div>
      </div>
  );
}

export default Header;