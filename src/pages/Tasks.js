import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Tasks(props) {
  return (
    <div>
      <div className="mt-8 text-3xl text-center text-blue-400 font-semibold">
        Реализованные задачи
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:ml-28">
        <div className="hidden lg:grid">
          <div className="mt-8 mx-4 bg-mobileResult lg:bg-desktopResult lg:bg-no-repeat relative">
            <div className="grid grid-cols-2">
              <div className="absolute top-8 left-8 text-white text-4xl">1</div>
              <div></div>
              <div className="absolute bottom-12 left-8 text-white ">
                <p className="text-2xl">ЖК “Арнау”</p>
                <p className="text-xl">г.Алматы</p>
              </div>
              <div className="absolute bottom-14 right-32 text-white text-4xl">
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-2xl mx-4 mt-6">
            <span className="text-blue-400 font-medium">Задача:</span>{" "}
            Подключение Жилого комплекса <br className="lg:grid hidden" /> к
            автономному газоснабжению
          </div>
          <div className="text-xl lg:text-lg mx-4 mt-6 lg:mt-3">
            <p>
              <span className="text-blue-600">Объект: </span>Жилой комплекс
              “Арнау”
            </p>
            <p className="pt-1">
              <span className="text-blue-600">Тип объект: </span>Многоквартирный
              дом
            </p>
            <p className="pt-1">
              <span className="text-blue-600">Срок: </span>4,5 месяцев
            </p>
          </div>

          <div className="mt-8 mx-4 bg-mobileResult lg:hidden">
            <div className="grid grid-cols-2">
              <div className="mt-4 ml-4 text-white text-4xl">1</div>
              <div></div>
              <div className="mt-24 pb-4 ml-4 text-white ">
                <p className="text-2xl">ЖК “Арнау”</p>
                <p className="text-xl">г.Алматы</p>
              </div>
              <div className="mt-28 ml-28 text-white text-4xl">
                <BsArrowRight />
              </div>
            </div>
          </div>

          <div className="text-2xl text-blue-600 font-semibold mx-4 mt-6 lg:mt-16">
            Результат:
          </div>
          <div className="mx-4 mt-4 text-lg lg:mt-2">
            За счет оптимизации стоимости оборудования, <br />
            сократили затраты на 1 300 000 〒
          </div>
          <div className="mx-4 mt-4 text-lg lg:mt-2 ">
            Наши менеджеры с радостью ответят <br className="lg:hidden" /> на
            ваши <br className="lg:grid hidden" />
            вопросы, произведу расчет стоимости услуг <br />
            и подготовят коммерческое <br className="lg:hidden" /> предложение.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
