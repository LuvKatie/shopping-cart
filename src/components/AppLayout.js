import Navbar from "./home/Navbar";
import Footer from "./home/Footer";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <div
        id="app-container"
        className="home-template relative grid min-h-full min-w-full"
      >
        <Outlet />
        <Navbar />
        <Footer />
      </div>
    </>
  );
};
