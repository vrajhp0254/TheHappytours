import React from "react";
import "./Home.css";
import Caro from "./components/Caro";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import Tours from "./components/Tours";
import WhyUs from "./components/WhyUs";
const Home = ({DestinationData}) => {
  return (
    <>
      <Caro />
      <Destinations DestinationData={DestinationData} />
      <article className="next-holiday">
        <div className="next-holiday__text-wrap">
          <p className="next-holiday__text-1">Your</p>
          <p className="next-holiday__text-2">
            Next
            <span className="--title__text-underline holiday-text">
              Holiday
            </span>
          </p>
        </div>
        <div className="next-holiday__btn-wrap">
          <a href="" className="next-holiday__btn">
            VIEW ALL PACKAGES
          </a>
        </div>
      </article>
      <WhyUs />
      <Tours />
      <Testimonials />
      <div className="relative flex items-center justify-center bg-cover p-10 shadow-lg dark:bg-neutral-700 bg-hero bg-center bg-fixed sm:h-auto">
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative z-10 flex flex-col md:h-28 justify-between">
          <h5 className="text-3xl font-serif leading-tight text-white dark:text-neutral-50 text-center">
            Contact US
          </h5>
          <p className="text-base text-white dark:text-neutral-200 text-center">
            "We are here to help you with all your travel needs. Please feel
            free to get in touch with us."
          </p>
          <div className="text-center py-3">
            <a href="/contactus" className="next-holiday__btn mb-7">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
