import React from "react";
import { BiWrench, BiMenu } from "react-icons/bi";
import {
  BsClockHistory,
  BsCheck2Circle,
  BsCurrencyDollar,
} from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

function Advantages(props) {
  return (
    <div
      className="lg:mt-20"
      style={{
        background:
          "linear-gradient(90deg, rgba(2, 151, 241, 0.65) -3.21%, rgba(32, 56, 139, 0.71) 32.84%, rgba(33, 79, 242, 0.86) 100%)",
      }}
    >
      <div className="text-3xl lg:text-4xl text-white text-center pt-8 mt-4 font-semibold ">
        Преимущества
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:ml-48 lg:mr-16 pb-8">
        <div className="pt-8 lg:pt-12 text-white text-2xl flex ml-4">
          <div>
            <BsClockHistory className="mr-4 text-4xl lg:text-5xl" />
          </div>
          <div>
            <div className="lg:text-3xl">Оперативность</div>
            <div className="hidden lg:grid lg:text-sm lg:mr-24">
              Результативность, действенность, эффективность Словарь русских
              синонимов. оперативность см. эффективность.
            </div>
          </div>
        </div>

        <div className="pt-8 lg:pt-12 text-white text-2xl flex ml-4">
          <div>
            <BsCheck2Circle className="mr-4 text-4xl lg:text-5xl" />
          </div>
          <div>
            <div className="lg:text-3xl">Контролль качества</div>
            <div className="hidden lg:grid lg:text-sm lg:mr-24">
              Результативность, действенность, эффективность Словарь русских
              синонимов. оперативность см. эффективность.
            </div>
          </div>
        </div>

        <div className="pt-8 lg:pt-12 text-white text-2xl flex ml-4">
          <div>
            <BsCurrencyDollar className="mr-4 text-4xl lg:text-5xl" />
          </div>
          <div>
            <div className="lg:text-3xl">Лучшие цены</div>
            <div className="hidden lg:grid lg:text-sm lg:mr-24">
              Результативность, действенность, эффективность Словарь русских
              синонимов. оперативность см. эффективность.
            </div>
          </div>
        </div>

        <div className="pt-8 lg:py-16 text-white text-2xl flex ml-4">
          <div>
            <BiWrench className="mr-4 text-4xl lg:text-5xl" />
          </div>
          <div>
            <div className="lg:text-3xl text-xl">Проверенное оборудование</div>
            <div className="hidden lg:grid lg:text-sm lg:mr-24">
              Результативность, действенность, эффективность Словарь русских
              синонимов. оперативность см. эффективность.
            </div>
          </div>
        </div>

        <div className="pt-8 lg:py-16 text-white text-2xl flex ml-4">
          <div>
            <BiMenu className="mr-4 text-4xl lg:text-5xl" />
          </div>
          <div>
            <div className="lg:text-3xl text-xl">
              Полный <br className="hidden lg:grid" /> комплекс услуг
            </div>
            <div className="hidden lg:grid lg:text-sm lg:mr-24">
              Результативность, действенность, эффективность Словарь русских
              синонимов. оперативность см. эффективность.
            </div>
          </div>
        </div>

        <div className="pt-8 lg:py-16 text-white text-2xl flex ml-4">
          <div>
            <FaUserTie className="mr-4 text-4xl lg:text-5xl" />
          </div>
          <div>
            <div className="lg:text-3xl text-xl">Опытные профессионалы</div>
            <div className="hidden lg:grid lg:text-sm lg:mr-24">
              Результативность, действенность, эффективность Словарь русских
              синонимов. оперативность см. эффективность.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
