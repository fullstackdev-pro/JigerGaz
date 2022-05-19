import React from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

function FAQ(props) {
  return (
    <div className="mx-4 lg:mx-32">
      <div
        className="text-3xl text-center font-semibold text-blue-400 border-b-2 pt-6 pb-3 px-8 
          lg:text-4xl lg:pb-12"
      >
        Ответы на <br className="lg:hidden" /> часто-задаваемые вопросы
      </div>
      <div
        className="mt-6 text-2xl flex justify-between"
        style={{ color: "rgba(239, 135, 17, 1)" }}
      >
        <div>Как правильно выбрать автокран?</div>
        <div className="hidden lg:flex lg:mr-4 lg:cursor-pointer lg:bg-blue-200 rounded-full text-xl p-2">
          <AiOutlineClose />
        </div>
      </div>
      <div className="mt-4 text-blue-400 text-lg text-left pr-8 pb-6 border-b">
        Система АГ предусматривает установку подземной емкости, в которой хранит
        СУГ, с горловиной удлиненной формы, двух редукторов, защитной анодно-
        катодной системы, двух редуторов, а также специальной формы
        железобетонной конструкции, нержавеющего стального троса, газопровода из
        прочного пластика. Также проделывается цокольный ввод.
      </div>
      <div
        className="mt-6 text-2xl pb-6 border-b flex justify-between"
        style={{ color: "rgba(239, 135, 17, 1)" }}
      >
        <div>
          Есть ли какие-то требования, регулирующие <br className="lg:hidden" />{" "}
          монтирования системы А?
        </div>
        <div className="hidden lg:flex lg:mr-4 lg:cursor-pointer lg:bg-blue-200 rounded-full text-xl p-2">
          <AiOutlinePlus />
        </div>
      </div>
      <div
        className="mt-6 text-2xl pb-6 border-b flex justify-between"
        style={{ color: "rgba(239, 135, 17, 1)" }}
      >
        <div>С какой частотой осуществляется заправка емкости?</div>
        <div className="hidden lg:flex lg:mr-4 lg:cursor-pointer lg:bg-blue-200 rounded-full text-xl p-2">
          <AiOutlinePlus />
        </div>
      </div>
      <div
        className="mt-6 text-2xl pb-6 border-b flex justify-between"
        style={{ color: "rgba(239, 135, 17, 1)" }}
      >
        <div>Как происходит доставка газа и заправка газгольдера?</div>
        <div className="hidden lg:flex lg:mr-4 lg:cursor-pointer lg:bg-blue-200 rounded-full text-xl p-2">
          <AiOutlinePlus />
        </div>
      </div>

      <div
        className="mt-6 text-2xl pb-6 border-b flex justify-between"
        style={{ color: "rgba(239, 135, 17, 1)" }}
      >
        <div>Как осуществлять заказ частным лицам?</div>
        <div className="hidden lg:flex lg:mr-4 lg:cursor-pointer lg:bg-blue-200 rounded-full text-xl p-2">
          <AiOutlinePlus />
        </div>
      </div>

      <div
        className="mt-6 text-2xl pb-6 border-b flex justify-between"
        style={{ color: "rgba(239, 135, 17, 1)" }}
      >
        <div>Как осуществлять заказ юридическим лицам?</div>
        <div className="hidden lg:flex lg:mr-4 lg:cursor-pointer lg:bg-blue-200 rounded-full text-xl p-2">
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
