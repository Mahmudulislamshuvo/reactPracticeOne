import React from "react";
import Shoe from "../../assets/banner/Shoe.png";

const HomePageRight = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <picture>
        <img src={Shoe} alt={Shoe} />
      </picture>
    </div>
  );
};

export default HomePageRight;
