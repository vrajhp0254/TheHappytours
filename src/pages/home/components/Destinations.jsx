import React from "react";
import { Link } from "react-router-dom";

const Packages = ({ DestinationData }) => {
  return (
    <section className="dest__wrap">
      <p className="sub-title__text">OUR PROPOSALS</p>
      <h2 className="title__text">
        OUR{" "}
        <span className="--title__text-underline dest-text ">DESTINATIONS</span>
      </h2>
      <article className="dest__list">
        {DestinationData.map((item, index) => {
          return (
            <div className="dest__item-flex border- rounded-3xl overflow-hidden" key={index}>
              <div
                className="dest__item abc dest_bg bg-cover bg-center"
                style={{
                  backgroundImage: `url('${item.imageUrl}')`,
                }}
              >
                <div className="dest__item-info">
                  <p className="dest__item-title">{item.title}</p>
                  <p className="dest__item-text">
                    {item.CountryPackages.length} Packages{" "}
                  </p>
                </div>
                {item.CountryPackages.length != 0 ? (
                  <div className="dest__overlay">
                    <ul className="dest__overlay-list transform transition-transform duration-300 hover:scale-110">
                      <Link to={item.path} className="dest__overlay-btn">
                        VIEW DESTINATION
                      </Link>
                    </ul>
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Packages;
