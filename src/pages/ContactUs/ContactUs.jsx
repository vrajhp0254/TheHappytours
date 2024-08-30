import React from "react";
import ContactForm from "../home/components/ContactForm";
import contactus from "../../assets/contactus.jpg";

const ContactUs = () => {
  return (
    <div className=" py-10  ">
      <div className=" mx-auto  ">
        <div className="flex flex-col md:flex-row bg-black ">
          <div className="md:w-full">
            <img
              src={contactus}
              alt="Contact Us"
              className="w-full
               h-56 md:h-96 object-cover object-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl  "
            />
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactUs;
