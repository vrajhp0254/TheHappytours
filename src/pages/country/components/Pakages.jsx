
import { Link } from "react-router-dom";

const Packages = ({CountryPackages,title}) => {
  return (
    <section className="dest__wrap">
      <p className="sub-title__text">OUR PROPOSALS</p>
      <h2 className="title__text uppercase">
      {title}{" "}
        <span className="--title__text-underline dest-text ">PACKAGES</span>
      </h2>
      <article className="dest__list">
        {CountryPackages.map((item, index) => {
          return (
            <div className="dest__item-flex" key={index}>
              <div
                className="dest__item abc dest_bg bg-cover bg-center"
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
              >
                <div className="dest__item-info">
                  <p className="dest__item-title">{item.title}</p>
                  <p className="dest__item-text">{item.timelineDatas.length} Days</p>
                </div>
                <div className="dest__overlay">
                  <h5>{item.title}</h5>
                  <h5>{item.timelineDatas.length} days</h5>
                  <ul className="dest__overlay-list">
                    <Link to={item.subpath} className="dest__overlay-btn">
                      VIEW MORE
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Packages;
