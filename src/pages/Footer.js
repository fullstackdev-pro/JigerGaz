import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaTelegramPlane, FaFacebookF, FaInstagram } from "react-icons/fa";
import { VscLocation } from "react-icons/vsc";
import logo from "./images/mobile/843a72f8926eb795113871cdb49bc0b1 2.png";

function Footer(props) {
  return (
    <div
      id="footer"
      className="lg:mx-32 lg:mt-16"
      style={{ background: "rgba(19, 40, 79, 1)" }}
    >
      <div className="lg:flex lg:justify-around">
        <div className="text-white px-4 pt-4 lg:mt-8">
          <div className="flex text-sm">
            <div className="lg:space-y-3 lg:order-2 lg:ml-16">
              <p>Автономное газоснабсжение</p>
              <p>Газовое оборудование</p>
              <p>Карта АГЗС</p>
              <p>Талоны</p>
            </div>
            <div className="ml-8 lg:space-y-3 lg:order-1 lg:ml-0">
              <p>Газ</p>
              <p>Компания</p>
              <p>Полезно знать</p>
              <p>Контакты</p>
            </div>
          </div>
        </div>
        <div className="text-white px-4 pt-8 text-sm lg:pt-12 lg:space-y-3">
          <div className="flex">
            <div>
              <BsTelephone className="text-xl mr-4" />
            </div>
            <div>
              <p>+7 (7172) 97-83-83</p>
              <p className="text-xs text-slate-400">Заказать газ</p>
            </div>
          </div>

          <div className="pt-4 flex">
            <div>
              <AiOutlineMail className="text-xl mr-4" />
            </div>
            <div>zhigergas@mail.ru</div>
          </div>

          <div className="pt-4 flex">
            <div>
              <VscLocation className="text-xl mr-4" />
            </div>
            <div>г. Нур-Султан, ул. Өндіріс, 89/3</div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-between lg:mx-32 lg:pt-4">
        <div className="flex justify-around py-4 px-8 lg:space-x-6">
          <GrMail className="bg-white text-4xl p-2 rounded-full" />
          <FaTelegramPlane className="bg-white text-4xl p-2 rounded-full" />
          <FaInstagram className="bg-white text-4xl p-2 rounded-full" />
          <FaFacebookF className="bg-white text-4xl p-2 rounded-full" />
        </div>
        <div className="flex justify-center py-4 lg:mr-12">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
