import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export function NavbarWithMegaMenu({ DestinationData }) {
  return (
    <>
      <header className="flex-box sticky top-0 z-10">
        <div className="header__left flex-box ">
          <Link to="/" className="header__logo flex items-center gap-4">
            <img src={logo} alt="Logo" />
          </Link>
          {/* <div className="hide-on-desktop">PHONE</div> */}
        </div>
        <ul className="hide-on-tablet-mobile header__navbar pr-[4rem] flex-box gap-5">
          <li className="navbar__item">
            <Link to="/" className="navbar__link ">
              HOME
            </Link>
          </li>
          <li className="navbar__item ">
            <Link to="" className="navbar__link flex items-center">
              PACKAGES
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="18"
                viewBox="0 4 24 24"
              >
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </Link>

            <ul className="header__subnav k">
              <li className="subnav__item --subnav__after">
                <div className="subnav__link">International Holidays</div>
                <i className="bx bxs-right-arrow"></i>
                <ul className="header__ex-subnav">
                  {DestinationData.map((item, index) => {
                    return (
                      item.categories.includes("International Holidays") && (
                        <li className="subnav__item" key={index}>
                          <Link
                            to={
                              item.CountryPackages.length !== 0
                                ? item.path
                                : "#"
                            }
                            className="subnav__link"
                          >
                            {item.title}
                          </Link>
                        </li>
                      )
                    );
                  })}
                </ul>
              </li>
              <li className="subnav__item">
                <div className="subnav__link">Incredible India</div>
                <i className="bx bxs-right-arrow"></i>
                <ul className="header__ex-subnav">
                {DestinationData.map((item, index) => {
                    return (
                      item.categories.includes("Incredible India") && (
                        <li className="subnav__item" key={index}>
                          <Link
                            to={
                              item.CountryPackages.length !== 0
                                ? item.path
                                : "#"
                            }
                            className="subnav__link"
                          >
                            {item.title}
                          </Link>
                        </li>
                      )
                    );
                  })}
                </ul>
              </li>
              <li className="subnav__item">
                <div className="subnav__link">Honeymoon Packages</div>
                <i className="bx bxs-right-arrow"></i>
                <ul className="header__ex-subnav">
                {DestinationData.map((item, index) => {
                    return (
                      item.categories.includes("Honeymoon Packages") && (
                        <li className="subnav__item" key={index}>
                          <Link
                            to={
                              item.CountryPackages.length !== 0
                                ? item.path
                                : "#"
                            }
                            className="subnav__link"
                          >
                            {item.title}
                          </Link>
                        </li>
                      )
                    );
                  })}
                </ul>
              </li>
            </ul>
          </li>
          <li className="navbar__item">
            <Link to="aboutus" className="navbar__link">
              ABOUT US
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="contactus" className="navbar__link">
              CONTACT US
            </Link>
          </li>
        </ul>

        <div className="relative my-6 mr-[64px] hide-on-tablet-mobile">
          <input
            id="id-l16"
            type="text"
            name="id-l16"
            placeholder="Search here"
            className="relative w-full h-12 px-4  pr-12 transition-all border border-gray-500 rounded-tl-2xl rounded-br-2xl placeholder:text-black bg-transparent outline-none focus-visible:outline-none peer  text-black autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-black focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-6 h-6 cursor-pointer top-3 right-4 stroke-black peer-disabled:cursor-not-allowed"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            aria-labelledby="title-9 description-9"
            role="graphics-symbol"
          >
            <title id="title-9">Search icon</title>
            <desc id="description-9">Icon description here</desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        <div className="header__right hide-on-desktop">
          <label htmlFor="sub-menu__check" className="header__menu-icon">
            <box-icon name="menu-alt-right" color="#000"></box-icon>
          </label>
        </div>
      </header>
      <input
        hidden
        type="checkbox"
        id="sub-menu__check"
        className="sub-menu__check"
      />

      <label
        htmlFor="sub-menu__check"
        className="sub-menu-tablet-mobile hide-on-desktop z-30"
      >
        <label htmlFor="sub-menu__check">
          <p name="x-circle" className="sub-menu__close-btn" color="white">
            x
          </p>
        </label>
        <ul className="navbar-mobile__list">
          <li className="navbar-mobile__item">
            <Link to="/" className="navbar-mobile__link">
              HOME
            </Link>
          </li>
          <li className="navbar-mobile__item">
            <Link to="" className="navbar-mobile__link">
              International Holidays
            </Link>
            <ul className="subnav-mobile__list">
            {DestinationData.map((item, index) => {
                    return (
                      item.categories.includes("International Holidays") && (
                        <li className="subnav-mobile__item" key={index}>
                          <Link
                            to={
                              item.CountryPackages.length !== 0
                                ? item.path
                                : "#"
                            }
                            className="subnav-mobile__link"
                          >
                            {item.title}
                          </Link>
                        </li>
                      )
                    );
                  })}
            </ul>
          </li>
          <li className="navbar-mobile__item">
            <Link to="" className="navbar-mobile__link">
              Incredible India
            </Link>
            <ul className="subnav-mobile__list">
            {DestinationData.map((item, index) => {
                    return (
                      item.categories.includes("Incredible India") && (
                        <li className="subnav-mobile__item" key={index}>
                          <Link
                            to={
                              item.CountryPackages.length !== 0
                                ? item.path
                                : "#"
                            }
                            className="subnav-mobile__link"
                          >
                            {item.title}
                          </Link>
                        </li>
                      )
                    );
                  })}
            </ul>
          </li>
          <li className="navbar-mobile__item">
            <Link to="" className="navbar-mobile__link">
              Honeymoon Packages
            </Link>
            <ul className="subnav-mobile__list">
            {DestinationData.map((item, index) => {
                    return (
                      item.categories.includes("Honeymoon Packages") && (
                        <li className="subnav-mobile__item" key={index}>
                          <Link
                            to={
                              item.CountryPackages.length !== 0
                                ? item.path
                                : "#"
                            }
                            className="subnav-mobile__link"
                          >
                            {item.title}
                          </Link>
                        </li>
                      )
                    );
                  })}
            </ul>
          </li>

          <li className="navbar-mobile__item">
            <Link to="" className="navbar-mobile__link">
              ABOUT US
            </Link>
          </li>
          <li className="navbar-mobile__item">
            <Link to="" className="navbar-mobile__link">
              CONTACT
            </Link>
          </li>
          <div className="relative my-6 mr-[64px] ">
            <input
              id="id-l16"
              type="text"
              name="id-l16"
              placeholder="Search here"
              className="relative w-full h-12 px-4  pr-12 transition-all border border-gray-500 rounded-tl-2xl rounded-br-2xl placeholder:text-white bg-transparent outline-none focus-visible:outline-none peer  text-black autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-black focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-6 h-6 cursor-pointer top-3 right-4 stroke-slate-400 peer-disabled:cursor-not-allowed"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              aria-labelledby="title-9 description-9"
              role="graphics-symbol"
            >
              <title id="title-9">Search icon</title>
              <desc id="description-9">Icon description here</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </ul>
      </label>
    </>
  );
}
