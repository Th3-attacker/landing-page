import React, { useState } from "react";
import Menu from "../assets/icons/Menu.svg";
import closeMenu from "../assets/icons/closeMenu.svg";
import logo from "../assets/icons/logo.png";
import smallImage from "../assets/images/small-image.png";
export const Hero: React.FC = () => {
  return (
    <div className="w-full bg-heroImage bg-cover h-[600px] min-w-min sm:h-[1040px] py-4 px-4">
      <Navbar />
      <SmallContainer />
    </div>
  );
};

// Path: src/components/Navbar.tsx
// Compare this snippet from src/components/Hero.tsx:
// import { Navbar } from "./Navbar";
export const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="py-2 px-4 sm:py-3 sm:px-8 bg-black bg-opacity-30 rounded-3xl flex items-center justify-between">
      <div className="flex space-x-2 items-center">
        <img src={logo} alt="logo" className="h-5 w-5" />
        <h2 className="hidden sm:block text-white font-bold text-xl">
          Vaultflow
        </h2>
      </div>
      <ul className="text-white  hidden sm:flex space-x-16 font-light tracking-wide border border-opacity-60 border-gray-600 p-1  rounded-full">
        <li className="hover:bg-gray-300 hover:bg-opacity-50 hover:text-gray-800 text-gray-300 font-bold  rounded-full py-2 px-3">
          <a href="">Features</a>
        </li>
        <li className="hover:bg-gray-300 hover:bg-opacity-50 hover:text-gray-800 text-gray-300 font-bold  rounded-full py-2 px-3">
          <a href="">Pricing</a>
        </li>
        <li className="hover:bg-gray-300 hover:bg-opacity-50 hover:text-gray-800 text-gray-300 font-bold  rounded-full py-2 px-3">
          <a href="">Contact</a>
        </li>
        <li className="hover:bg-gray-300 hover:bg-opacity-50 hover:text-gray-800 text-gray-300 font-bold  rounded-full py-2 px-3">
          <a href="">About us</a>
        </li>
        <li className=" hover:bg-gray-300 hover:bg-opacity-50 hover:text-gray-800 text-gray-300 font-bold  rounded-full py-2 px-3">
          <a href="">Help me</a>
        </li>
      </ul>
      <button className=" hidden sm:block bg-white py-2 px-4 rounded-full">
        Download the app
      </button>
      {/* mobile version */}
      <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
        <img
          src={toggleMenu ? closeMenu : Menu}
          alt="toggleMenu"
          className=" object-contain"
          onClick={() => setToggleMenu((prev) => !prev)}
        />
        <div
          className={`${
            toggleMenu ? "flex" : "hidden"
          } p-4 bg-gray-800 top-16 mx-4 right-0 rounded-xl absolute w-2/3 min-w-[120px] h-2/3 bg-opacity-80`}
        >
          <ul className="list-none justify-start space-y-8 items-center flex flex-col flex-1 text-center">
            <li className="hover:bg-gray-300 hover:bg-opacity-50 hover:text-gray-800 text-gray-300 font-bold  rounded-full py-2 px-3 w-full">
              <a href="">Features</a>
            </li>
            <li className="w-full hover:bg-gray-300 hover:bg-opacity-50 hover:text-gray-800 text-gray-300 font-bold  rounded-full py-2 px-3">
              <a href="">Pricing</a>
            </li>
            <li className="w-full hover:bg-gray-300 hover:bg-opacity-50 hover:text-gray-800 text-gray-300 font-bold  rounded-full py-2 px-3">
              <a href="">Contact</a>
            </li>
            <li className="w-full hover:bg-gray-300 hover:bg-opacity-50 hover:text-gray-800 text-gray-300 font-bold  rounded-full py-2 px-3">
              <a href="">About us</a>
            </li>
            <li className="w-full hover:bg-gray-300 hover:bg-opacity-50 hover:text-gray-800 text-gray-300 font-bold  rounded-full py-2 px-3">
              <a href="">Help me</a>
            </li>
            <button className=" sm:hidden block bg-white py-2 px-4 rounded-full">
              Download the app
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export const SmallContainer: React.FC = () => {
  return (
    <div className="mx-auto w-2/3 text-center mt-10 mb-5 ">
      <div className="space-y-8 mb-16">
        <span className="border text-nowrap border-gray-500 p-2 block text-[10px] sm:text-sm rounded-full text-white ">
          We just raised $20M in Series B. Learn more
        </span>
        <h1 className="font-bold text-5xl sm:text-7xl text-white leading-{10px} capitalize sm:text-balance">
          Modern analytics for the modern world
        </h1>
        <p className="text-pretty text-xs sm:text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br className="hidden sm:block" />
          Unde soluta esttotam.Unde soluta est totam
        </p>
        <div className="space-x-2 sm:space-x-4 sm:block flex items-center">
          <button className=" text-[10px] sm:text-xl bg-white hover:text-white py-2 px-3 rounded-full hover:bg-transparent ">
            Download the app
          </button>
          <button className=" text-[10px] sm:text-xl bg-transparent border  hover:bg-white hover:text-black border-gray-500 py-2 px-3 rounded-full text-white ">
            Talk to an export
          </button>
        </div>
      </div>
      <div className="">
        <img src={smallImage} alt="hero Image" className="" />
      </div>
    </div>
  );
};
