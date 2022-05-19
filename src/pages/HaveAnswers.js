import React from 'react';
import cardimg3 from "./images/mobile/Rectangle 21.png";

function HaveAnswers(props) {
  return (
    <div>
      <div className="mt-8 text-3xl text-blue-400 text-center lg:text-4xl">
        Остались вопросы?
      </div> 
      <div
        className="mx-4 rounded-xl mt-48 mb-8 lg:grid lg:grid-cols-2 lg:mx-32 lg:mt-24 "
        style={{
          background:
            "linear-gradient(to right bottom, rgba(239, 135, 17, 1) 25%, rgba(2, 151, 241, 1) 50% /*middle color*/, rgba(239, 135, 17, 1) 80%)",
        }}
      >
        <div className="relative flex justify-center lg:justify-start lg:ml-8 top-36 lg:top-0 ">
          <img
            className="absolute bottom-1 lg:h-96 lg:bottom-20"
            src={cardimg3}
            alt=""
          />
        </div>
        <div className="lg:mr-32">
          <p className="text-center text-2xl pt-40 mx-4 text-white font-semibold lg:pt-12 lg:text-4xl">
            Позвоните по номеру <br /> +7 771 888 21 03
          </p>
          <p className="text-center text-2xl text-white mt-6 mx-4">
            Или оставьте заявку на консультацию,и наш менеджер перезвонит вам в{" "}
            <br className="hidden lg:grid" />
            течение 10 минут
          </p>
          <div className="flex justify-center pb-8 lg:pb-16">
            <button className="mt-12 bg-white text-amber-500 py-2 rounded-xl w-9/12 text-lg lg:w-6/12">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HaveAnswers;