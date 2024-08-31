import React from "react";
import whatsapp from "../../../../assets/whatsapp.png";
import gmail from "../../../../assets/gmail.png";
import { Link } from "react-router-dom";

const PackegeEnquiry = () => {
  return (
    <div className="px-[2rem] mb-7">
      <h2 className="title__text flex items-center  w-full mb-4 mt-7">
        TRIP&nbsp;
        <span className="--title__text-underline dest-text ">ENQUIRY</span>
      </h2>
      <div className="px-8 py-8 mx-auto max-w-screen-md bg-gray-100 rounded-xl">
        {/* <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@TheHappytours.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Send message
          </button>
        </form> */}
        <Link
          src="#"
          className="flex gap-4 items-center hover:bg-gray-400 md:p-2 rounded-md transition-all duration-500"
        >
          {" "}
          <img src={whatsapp} alt="whatsapp" className="w-10 h-10" />
          <p>+91 99999 99999</p>
        </Link>
        <br />
        <Link
          src="#"
          className="flex gap-4 items-center hover:bg-gray-400 md:p-2 rounded-md transition-all duration-500"
        >
          <img src={gmail} alt="gmail" className="w-10 h-10" />
          <p>Example@gmail.com</p>
        </Link>
      </div>
    </div>
  );
};

export default PackegeEnquiry;
