import React from 'react';
import rectangle1 from "./images/mobile/Rectangle1.png";
import {
  AiOutlineRight,
} from "react-icons/ai";

function Section1(props) {
  return (
    <div className="relative bg-cover bg-mobileHeader pt-24 lg:pt-12 pl-4 lg:bg-desktopHeader lg:grid lg:grid-cols-2">
        <div className="lg:pl-36">
          <div className="lg:flex lg:justify-left lg:text-white hidden">
            <p>Главная</p>
            <AiOutlineRight className="mx-4" />
            <p>Автономное газоснабсжение</p>
            <AiOutlineRight className="mx-4" />
          </div>
          <div className="text-white text-3xl font-bold lg:text-5xl lg:pt-16">
            Автономная газификация в Нур-Султане под ключ, с гарантией 3 года!
          </div>
          <div className="text-white text-xl font-normal mt-4 lg:text-2xl lg:pr-16">
            Пройди тест и получите расчет реальной стоимости подключения вашего
            объекта!
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="text-white text-xl bg-blue-400 mt-10 mb-24 px-12 py-2 rounded-lg ">
              Получить расчёт
            </button>
          </div>
        </div>
        <div
          className="absolute left-16 -bottom-56 
        lg:static lg:flex lg:justify-center lg:pb-12"
        >
          <img className="" src={rectangle1} alt="" />
        </div>
      </div>
  );
}

export default Section1;