import React from "react";
import certificat1 from "./images/desktop/image 10.png";
import certificat2 from "./images/desktop/image 9.png";
import certificat3 from "./images/desktop/image 11.png";
import certificat4 from "./images/desktop/image 12.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Licenses(props) {
  return (
    <div
      className="hidden lg:grid mt-20"
      style={{
        background:
          "linear-gradient(90deg, rgba(2, 151, 241, 0.65) -3.21%, rgba(32, 56, 139, 0.71) 32.84%, rgba(33, 79, 242, 0.86) 100%)",
      }}
    >
      <div className="grid grid-cols-2 mt-12 ml-36 font-semibold">
        <div className="text-white text-4xl ">Лицензии и сертификаты</div>
        <div className="text-white text-4xl">Грамоты и благодарности</div>
      </div>
      <div className="flex justify-between mt-16">
        <div className="mt-20">
          <img src={certificat1} alt="" />
        </div>
        <div>
          <img src={certificat2} alt="" />
        </div>
        <div>
          <img src={certificat3} alt="" />
        </div>
        <div className="mt-20">
          <img src={certificat4} alt="" />
        </div>
      </div>
      <div className="flex justify-around mt-8 pb-12">
        <div className="text-white text-xl mt-3 cursor-pointer">
          <AiOutlineArrowLeft />
        </div>
        <div>
          <button className="py-2 px-8 rounded-xl text-white border">
            Посмотреть еще
          </button>
        </div>
        <div className="text-white text-xl mt-3 cursor-pointer">
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Licenses;
