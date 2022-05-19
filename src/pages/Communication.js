import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
import { FcDocument, FcIdea } from "react-icons/fc";
import { GiPuzzle } from "react-icons/gi";

function Communication(props) {
  return (
    <div
      className="border-solid border-2 mx-4 mt-12 border-slate-300 rounded-2xl bg-white
        lg:mx-32"
    >
      <div
        className="text-center text-2xl font-semibold text-blue-400 mt-8 mx-8 
          lg:text-4xl lg:text-blue-400"
      >
        Пригласите эксперта на обсуждение ваших задач
      </div>
      <div className="lg:flex lg:mx-12 lg:mb-16 mt-8">
        <div className="mx-4 lg:w-8/12">
          <p className="text-lg mt-4 lg:text-lg">
            Поможем оперативно рассчитать расходы по вашим задачам
          </p>
          <p
            className="text-xl mt-3 lg:text-lg"
            style={{ color: "rgba(239, 135, 17, 1)" }}
          >
            Что вы получите?
          </p>
          <p className="text-base mt-4 flex lg:text-lg">
            <BiPhoneCall className="text-5xl mr-4" /> Звонок от эксперта в любое
            удобное время
          </p>
          <p className="text-base mt-4 flex lg:text-lg">
            <FcDocument className="text-7xl mr-4 lg:text-5xl" /> Предварительная
            оценка вашего проекта. Выезд при необходимости
          </p>
          <p className="text-base flex lg:text-lg mt-4">
            <BsHeadphones className="text-6xl mr-4 lg:text-5xl" /> Подробная
            консультация по проектированию системы газоснабжения
          </p>
          <p className="text-base mt-4 flex lg:text-lg">
            <FcIdea className="text-5xl mr-4" /> Дополнительные предложения,
            исходя из вашего объекта
          </p>
          <p className="text-base mt-5 flex lg:text-lg">
            <GiPuzzle className="text-4xl mr-4 lg:text-5xl" /> Полная смета
            понимание всех мельчайших нюансов
          </p>
        </div>

        <form className="mx-4 text-center border-2 rounded-3xl my-8 lg:w-4/12">
          <p className="mt-4 text-2xl text-blue-600">Оставьте заявку</p>
          <div className="grid mx-6 relative">
            <label
              htmlFor="name"
              className="bg-white text-orange-300 absolute left-4 p-1"
            >
              Имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded-lg py-1 mt-4"
            />
            <label
              htmlFor="phone"
              className="bg-white text-orange-300 absolute top-14 left-4 p-1"
            >
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border rounded-lg py-1 mt-6"
            />
            <label
              htmlFor="email"
              className="bg-white text-orange-300 absolute top-28 left-4 p-1"
            >
              e-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border rounded-lg py-1 mt-6"
            />
            <label
              htmlFor="placeCity"
              className="bg-white text-orange-300 absolute top-44 left-4 p-1"
            >
              Город
            </label>
            <input
              type="text"
              name="placeCity"
              id="placeCity"
              className="border rounded-lg py-1 mt-7"
            />
          </div>
          <div className="mt-12 mb-4 mx-6">
            <button className="text-white bg-blue-500 text-center rounded-xl py-2 w-full">
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Communication;
