import React from 'react';
import cardimg2 from "./images/mobile/Rectangle 16.png";
import { AiOutlineCheck } from "react-icons/ai";

function Prices(props) {
  return (
    <div>
      <div className="text-2xl mt-8 text-center text-blue-400 font-medium ">
        Ценовые предложения
      </div>
      <div className="lg:grid lg:grid-cols-3">
        <div className="mt-8">
          <div
            className="mx-4 mt-8 px-5 rounded-3xl "
            style={{ background: "rgba(221, 236, 255, 1)" }}
          >
            <div
              className="text-center pt-6 text-blue-400"
              style={{ fontSize: "1.35rem" }}
            >
              Автономное газоснабжение частного дома
            </div>
            <div
              className="text-center mt-3 text-4xl font-medium"
              style={{ color: "rgba(239, 135, 17, 1)" }}
            >
              <span className="text-2xl">от</span> 1187 000 〒
            </div>
            <div className="flex justify-center mt-6">
              <img src={cardimg2} alt="" />
            </div>
            <div className="flex justify-center mt-6 text-lg text-blue-400">
              <AiOutlineCheck
                className="mr-4"
                style={{ color: "rgba(239, 135, 17, 1)" }}
              />{" "}
              Газгольдер
            </div>
            <div className="flex justify-center mt-6 text-lg text-blue-400">
              <AiOutlineCheck
                className="mr-4"
                style={{ color: "rgba(239, 135, 17, 1)" }}
              />{" "}
              Доставка
            </div>
            <div className="flex justify-center mt-6 text-lg text-blue-400">
              <AiOutlineCheck
                className="mr-4"
                style={{ color: "rgba(239, 135, 17, 1)" }}
              />{" "}
              Монтаж и пуск
            </div>
            <div className="text-center pt-8 pb-6">
              <button className="border-solid border-2 border-blue-400 px-8 py-2 rounded-xl text-blue-400">
                Заказать услугу
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div
            className="mx-4 mt-8 px-5 rounded-3xl"
            style={{ background: "rgba(19, 40, 79, 1)" }}
          >
            <div
              className="text-center pt-6 text-white"
              style={{ fontSize: "1.35rem" }}
            >
              Автономное газоснабжение частного дома
            </div>
            <div
              className="text-center mt-3 text-4xl font-medium"
              style={{ color: "rgba(239, 135, 17, 1)" }}
            >
              <span className="text-2xl">от</span> 1187 000 〒
            </div>
            <div className="flex justify-center mt-6">
              <img src={cardimg2} alt="" />
            </div>
            <div className="flex justify-center mt-6 text-lg text-white">
              <AiOutlineCheck
                className="mr-4"
                style={{ color: "rgba(239, 135, 17, 1)" }}
              />{" "}
              Газгольдер
            </div>
            <div className="flex justify-center mt-6 text-lg text-white">
              <AiOutlineCheck
                className="mr-4"
                style={{ color: "rgba(239, 135, 17, 1)" }}
              />{" "}
              Доставка
            </div>
            <div className="flex justify-center mt-6 text-lg text-white">
              <AiOutlineCheck
                className="mr-4"
                style={{ color: "rgba(239, 135, 17, 1)" }}
              />{" "}
              Монтаж и пуск
            </div>
            <div className="text-center pt-8 pb-6">
              <button className="border-solid border-2 border-white px-8 py-2 rounded-xl text-white bg-amber-600">
                Заказать услугу
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div
            className="mx-4 mt-8 px-5 rounded-3xl"
            style={{ background: "rgba(221, 236, 255, 1)" }}
          >
            <div
              className="text-center pt-6 text-blue-600"
              style={{ fontSize: "1.35rem" }}
            >
              Автономное газоснабжение частного дома
            </div>
            <div
              className="text-center mt-3 text-4xl font-medium"
              style={{ color: "rgba(239, 135, 17, 1)" }}
            >
              <span className="text-2xl">от</span> 1187 000 〒
            </div>
            <div className="flex justify-center mt-6">
              <img src={cardimg2} alt="" />
            </div>
            <div className="flex justify-center mt-6 text-lg text-blue-600">
              <AiOutlineCheck
                className="mr-4"
                style={{ color: "rgba(239, 135, 17, 1)" }}
              />{" "}
              Газгольдер
            </div>
            <div className="flex justify-center mt-6 text-lg text-blue-600">
              <AiOutlineCheck
                className="mr-4"
                style={{ color: "rgba(239, 135, 17, 1)" }}
              />{" "}
              Доставка
            </div>
            <div className="flex justify-center mt-6 text-lg text-blue-600">
              <AiOutlineCheck
                className="mr-4"
                style={{ color: "rgba(239, 135, 17, 1)" }}
              />{" "}
              Монтаж и пуск
            </div>
            <div className="text-center pt-8 pb-6">
              <button className="border-solid border-2 border-blue-400 px-8 py-2 rounded-xl text-blue-400">
                Заказать услугу
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;