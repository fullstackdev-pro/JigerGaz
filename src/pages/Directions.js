import React from 'react';
import cardimg1 from "./images/mobile/r3WAWU5Fi5Q.png";
import dcardimg1 from "./images/desktop/r3WAWU5Fi5Q-1.png";
import dcardimg2 from "./images/desktop/r3WAWU5Fi5Q-2.png";

function Directions(props) {
  return (
    <div className="mt-64 pt-16 lg:pt-0 lg:mt-12">
        <div className="text-blue-400 text-center text-3xl font-semibold ">
          Наши направления
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:mx-32">
          <div className="mt-8 mx-4 lg:mt-12 lg:mx-8">
            <div>
              <img src={cardimg1} alt="" />
            </div>
            <div className="bg-white py-8 text-2xl text-center text-blue-400 rounded-b-3xl lg:px-2">
              Газоснабжение поселков и многоквартирых домов
            </div>
          </div>
          <div className="mt-8 mx-4 lg:mt-12 lg:mx-8 hidden lg:grid">
            <div>
              <img src={dcardimg1} alt="" />
            </div>
            <div className="bg-white py-8 text-2xl text-center text-blue-400 rounded-b-3xl lg:px-4">
              Газоснабжение частного дома
            </div>
          </div>
          <div className="mt-8 mx-4 lg:mt-12 lg:mx-8 hidden lg:grid">
            <div>
              <img src={dcardimg2} alt="" />
            </div>
            <div className="bg-white py-8 text-2xl text-center text-blue-400 rounded-b-3xl ">
              Газоснабжение промышленных зданний
            </div>
          </div>
        </div>
      </div>
  );
}

export default Directions;