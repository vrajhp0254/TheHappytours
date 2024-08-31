// Sidebar.js
import React, { useState } from "react";

const Sidebar = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-auto bg-gray-800 text-white w-auto md:w-[30vh]">
      {/* Toggle button for mobile */}
      <div
        className="block md:hidden absolute p-4 cursor-pointer"
        onClick={toggleSidebar}
      >
        {!isOpen ? (
          <svg
            className="w-6 h-6"
            fill="white"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="white"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        )}
      </div>

      {/* Sidebar content */}
      <div className={`md:block ${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="p-4 text-2xl pt-[10vh] ">TheHappytours</div>
        <ul className="">
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => setPage("page1")}
          >
            Countries
          </li>
          
        </ul>
      </div>

      {/* Sidebar content for desktop */}
      <div className="hidden md:block">
        <div className="p-4 text-2xl text-center">TheHappytours</div>
        <ul>
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => setPage("page1")}
          >
            Countries
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
