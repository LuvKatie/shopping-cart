import React from "react";
import "../../styles/home.css";
import wallpaper from "../../images/valorant.jpg";

const Home = () => {
  return (
    <main id="home-page" className="min-h-full min-w-full bg-transparent">
      <img
        aria-label="landing-image"
        src={wallpaper}
        className="wallpaper absolute z-0 object-cover"
      ></img>
    </main>
  );
};

export default Home;
