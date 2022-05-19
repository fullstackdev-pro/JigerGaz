import React from "react";
import sectionImage from "./images/desktop/screen.png";
import Header from "./Header";
import Section1 from "./Section1";
import Directions from "./Directions";
import Prices from "./Prices";
import Advantages from "./Advantages";
import Tasks from "./Tasks";
import Communication from "./Communication";
import Licenses from "./Licenses";
import FAQ from "./FAQ";
import Footer from "./Footer";

function Home(props) {
  return (
    <div
      className="pb-4"
      style={{
        background:
          "linear-gradient(180deg, #DDECFF 0%, #F7FAFF 51.04%, #DDECFF 100%)",
      }}
    >
      <Header />
      <Section1 />
      <Directions />
      <div className="hidden lg:flex mx-36 my-12">
        <img src={sectionImage} alt="" className="w-full" />
      </div>
      <Prices />
      <Advantages />
      <Tasks />
      <Communication />
      <Licenses />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
