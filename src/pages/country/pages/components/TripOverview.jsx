import React from "react";

const TripOverview = ({ matchedData }) => {
  return (
    <div className="px-[2rem] ">
      <h2 className="title__text flex items-center w-full mb-4 mt-7">
        TRIP&nbsp;
        <span className="--title__text-underline dest-text ">OVERVIEW</span>
      </h2>

      <div className="text-justify">
        Embark on a 7-day adventure with our {matchedData.title} package, exploring the
        dynamic cityscape of Bangkok and the coastal charm of Pattaya. Discover
        the cultural marvels of Grand Palace and Wat Pho, cruise along the Chao
        Phraya River, and immerse yourself in the local markets. Transition to
        Pattaya for thrilling water activities at Coral Island, explore Nong
        Nooch Tropical Garden, and unwind with spa relaxation. This curated
        journey blends cultural exploration, adventure, and leisure, promising
        an unforgettable Thai experience.
      </div>
    </div>
  );
};

export default TripOverview;
