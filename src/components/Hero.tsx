import logo from "../assets/icons/logo.png";
import smallImage from "../assets/images/small-image.png";
export const Hero: React.FC = () => {
  return (
    <div className="w-full bg-heroImage bg-cover h-[1040px] py-4 px-4">
      <Navbar />
      <SmallContainer />
    </div>
  );
};

// Path: src/components/Navbar.tsx
// Compare this snippet from src/components/Hero.tsx:
// import { Navbar } from "./Navbar";
export const Navbar: React.FC = () => {
  return (
    <div className="py-3 px-8 bg-black bg-opacity-30 rounded-3xl flex items-center justify-between">
      <div className="flex space-x-2 items-center">
        <img src={logo} alt="logo" className="h-5 w-5" />
        <h2 className="text-white font-bold text-xl">Vaultflow</h2>
      </div>
      <ul className="text-white flex space-x-16 font-light tracking-wide border border-opacity-60 border-gray-600 p-1  rounded-full">
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
      </ul>
      <button className=" bg-white py-2 px-4 rounded-full">
        Download the app
      </button>
    </div>
  );
};

export const SmallContainer: React.FC = () => {
  return (
    <div className="mx-auto w-1/2 text-center mt-20 mb-10 ">
      <div className="space-y-8 mb-16">
        <span className="border border-gray-500 p-2 block text-sm rounded-full text-white ">
          We just raised $20M in Series B. Learn more
        </span>
        <h1 className="font-bold text-xl sm:text-7xl text-white leading-{10} capitalize text-balance">
          Modern analytics for the modern world
        </h1>
        <p className="text-pretty text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br className="hidden sm:block" />
          Unde soluta esttotam.Unde soluta est totam
        </p>
        <div className="sm:space-x-4  space-y-4 items-center">
          <button className="text-md bg-white py-2 px-3 rounded-full ">
            Download the app
          </button>
          <button className="text-md bg-transparent border border-gray-500 py-2 px-3 rounded-full text-white ">
            Talk to an export
          </button>
        </div>
      </div>
      <img src={smallImage} alt="" className="shadow-xl" />
    </div>
  );
};
