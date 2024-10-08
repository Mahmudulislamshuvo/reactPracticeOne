import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import HomePageLeft from "../Components/Homepge/HomePageLeft";
import HomePageRight from "../Components/Homepge/HomePageRight";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex px-[150px]">
        <HomePageLeft />
        <HomePageRight />
      </div>
    </div>
  );
};

export default HomePage;
