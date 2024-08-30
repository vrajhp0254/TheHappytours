import React, { useState } from "react";

const TripTimeline = ({ timelineDatas, inclusions }) => {
  // console.log(timelineDatas.typeof);
  // console.log(inclusions.typeof);
  return (
    <div className="px-[2rem] mb-7">
      <h2 className="title__text flex items-center  w-full mb-4 mt-7">
        TRIP&nbsp;
        <span className="--title__text-underline dest-text ">TIMELINE</span>
      </h2>
      <ul
        aria-label="User feed"
        role="feed"
        className="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:border before:-translate-x-1/2 before:border-slate-200 before:border-dashed after:absolute after:top-6 after:left-8 after:bottom-6 after:border after:-translate-x-1/2 after:border-slate-200 "
      >
        {timelineDatas.map((item, index) => {
          return (
            <li role="article" className="relative pl-8 " key={index}>
              <div className="flex flex-col flex-1 gap-4">
                <p className="absolute z-10 inline-flex items-center justify-center w-8 h-8 text-black rounded-full -left-4 ring-2 ring-white bg-white">
                  <box-icon type="solid" name="map"></box-icon>
                </p>
                <h4 className="flex flex-col items-start text-lg font-medium leading-8 lg:items-center md:flex-row text-slate-700">
                  <span className="flex-1 font-bold timeline__text">
                    Day {index + 1}
                  </span>
                </h4>
                <p className=" text-gray-900">{item}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <h2 className="title__text flex items-center  w-full mb-4 mt-7">
          TRIP&nbsp;
          <span className="--title__text-underline dest-text ">INCLUSIONS</span>
        </h2>
        {inclusions.map((item, index) => {
          return (
            <div className="" key={index}>
              <p className="text-gray-900 uppercase font-semibold">- {item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TripTimeline;
