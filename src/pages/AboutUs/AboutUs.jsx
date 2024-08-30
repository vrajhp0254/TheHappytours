import React from "react";
import "./AboutUs.css";
import worldmap from "../../assets/Worldmap.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div>
        <div className="relative bg-slate-100 ">
          <img
            src="https://images.unsplash.com/photo-1506322526487-d8a94af63688?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fonts Image"
            className="h-[30rem] w-full object-cover object-center rounded-b-3xl  "
          />
          <div className="absolute inset-0 flex items-center justify-center lg:px-10 px-2 flex-col ">
            <div>
              <h1 className=" md:text-4xl text-xl font-bold text-white ">
                {" "}
                Your Passport to Exceptional{" "}
                <span className="grid justify-center">
                  journey at thehappytours
                </span>
              </h1>
            </div>
            <div>
              <button className=" flex justify-center items-center mt-5 border-dashed cursor-pointer font-semibold transition duration-200 ease-in-out py-1 px-3 rounded-3xl bg-white  border  border-black hover:bg-white hover:border-dashed hover:border-black hover:translate-x-1 active:scale-95">
                <span>Explore</span>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 80 74"
                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-8 ml-1 transition-transform duration-300 ease-in-out transform-none"
                >
                  <path
                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:flex  lg:m-20 m-10 ">
          <div className="hidden lg:block w-full lg:w-2/5 h-[18rem] mr-10">
            <img
              className="h-[18rem] w-[35rem] lg:rounded-tl-3xl lg:rounded-br-3xl"
              src={logo}
              alt="about us"
            />
          </div>
          <div className="lg:hidden   h-[13rem] mt-5 mb-5 w-full flex justify-center ">
            <img
              className="h-[13rem] items-center rounded-3xl"
              src={logo}
              alt="about us"
            />
          </div>
          <div className=" w-full mt-5 lg:w-3/5  h-[25rem] lg:h-[18rem] rounded-3xl lg:rounded-tr-3xl lg:rounded-bl-3xl">
            <h1 className="text-3xl  mt-1 font-serif ">About Us</h1>
            <p className=" mt-5 text-left text-xs pr-4">
              Welcome to thehappytours, your ultimate destination for
              unforgettable travel experiences around the globe. At
              thehappytours, we believe that every journey is an opportunity for
              adventure, exploration, and cultural immersion.
            </p>
            <p className=" mt-2 text-left text-xs pr-4">
              At thehappytours, we don't just sell trips—we create memories that
              last a lifetime. Join us on an extraordinary journey and let us
              help you discover the wonders of the world. Your adventure starts
              here.
            </p>
            <div className="grid grid-flow-col justify-center mt-10 sm:mt-8 gap-2 w-full h-[5rem] sm:space-x-28  ">
              <div className=" flex justify-center items-center flex-col w-[5rem] h-[5rem] p-5 border-2  border-black border-dashed bg-[#eb9227] rounded-2xl">
                <p className="text-2xl font-bold font-mono">8+</p>

                <p className="text-xs font-sans">Pakages</p>
              </div>
              <div className=" flex justify-center items-center flex-col w-[5rem] h-[5rem] p-5 border-2  border-black rounded-2xl border-dashed bg-[#adc61a] ">
                <p className="text-2xl font-bold font-mono">10K</p>

                <p className="text-xs font-sans">
                  Customer <span className=" justify-center flex">reviews</span>
                </p>
              </div>
              <div className=" flex justify-center items-center flex-col w-[5rem] h-[5rem] p-5 border-2  border-black rounded-2xl border-dashed bg-[#1c88b9] ">
                <p className="text-2xl font-bold font-mono">9.5</p>

                <p className="text-xs font-sans">Rating</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center lg:h-[5rem] h-[20rem] flex-col mx-4 lg:mx-10">
          <h1 className="text-5xl px-3  font-serif ">
            Our{" "}
            <span className="--title__text-underline holiday-text ">
              Values
            </span>
          </h1>
          <p className="text-xl mt-5 pl-3 font-sans text-justify">
            At Foreign Yatra, we prioritize our customers above all else,
            ensuring that every journey with us is not just a trip, but an
            unforgettable experience. With a commitment to reliability,
            expertise, and convenience, we strive to exceed expectations at
            every turn.
          </p>
        </div>

        <div className="md:flex grid justify-center items-center mx-6 md:space-x-3 space-y-5 md:space-y-0 mt-20">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
            <div className="px-6 py-4">
              <div className="flex items-center justify-center">
                <div className="rounded-full border border-black w-16 h-16 flex items-center justify-center text-3xl font-bold text-white bg-primary  bg-[#07487C] ">
                  01
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-2xl font-semibold hover:underline text-center">
                  Commitment to Excellence
                </h2>
                <p className="mt-2 text-gray-600 text-justify">
                  From trip planning to execution, we uphold the highest
                  standards of quality, integrity, and professionalism, setting
                  us apart as a trusted leader in the travel industry.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
            <div className="px-6 py-4">
              <div className="flex items-center justify-center">
                <div className="rounded-full border border-black w-16 h-16 flex items-center justify-center text-3xl font-bold text-white bg-primary bg-[#07487C]">
                  02
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-2xl font-semibold hover:underline text-center">
                  Value for Money
                </h2>
                <p className="mt-2 text-gray-600 text-justify">
                  We strive to deliver exceptional value for your money,
                  offering competitive prices, exclusive deals, and added perks
                  to maximize your travel budget.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
            <div className="px-6 py-4">
              <div className="flex items-center justify-center">
                <div className="rounded-full border border-black w-16 h-16 flex items-center justify-center text-3xl font-bold text-white bg-primary bg-[#07487C]">
                  03
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-2xl font-semibold hover:underline text-center">
                  Responsible Travel
                </h2>
                <p className="mt-2 text-gray-600 text-justify">
                  we strive to create meaningful and lasting experiences for our
                  customers while safeguarding the destinations for future
                  generations to enjoy and have a safe journey.
                </p>
              </div>
            </div>
          </div>
                
        </div>

       
        <div className=" overflow-hidden border-2 border-black flex justify-center items-center rounded-b-3xl min-w-fit lg:mx-28 lg:my-20 mx-5 my-10 flex-col rounded-3xl  shadow-current ">
          <img
            src={worldmap}
            alt=""
            className="h-[15rem]  object-cover object-center w-full opacity-10  bg-slate-100 rounded-b-3xl  "
          />
          <div className=" absolute flex justify-center flex-col items-center ">
            <div className="font-bold">
              <h1 className="grid text-3xl">
                <span>Worry of your journey?</span>
                <span className="justify-center flex ">Discuss with Us..</span>
              </h1>
            </div>
            <div>
              <Link to="/contactus">
                <button className="contact_btn">Contact Us</button>
              </Link>
                
               
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
