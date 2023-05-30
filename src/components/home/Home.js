import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../styles/home.css";

const Home = () => {
  return (
    <main id="home-page" className="home-template grid min-h-full min-w-full">
      <Navbar />
      <Footer />
    </main>
  );
};

export default Home;
