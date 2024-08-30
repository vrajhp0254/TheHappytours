import React from "react";

const Gallery = () => {
  return (
    <div className="px-[2rem] mb-7 subpage_wrap">
      <h2 className="title__text flex items-center w-full mb-4 mt-7">
        IMAGE&nbsp;
        <span className="--title__text-underline dest-text ">GALLERY</span>
      </h2>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        <div className="h-min w-full bg-red-400">
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D"
            alt="subway"
          />
        </div>
        <div className="h-min w-full bg-blue-400">
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D"
            alt="city"
          />
        </div>
        <div className="h-min w-full bg-orange-400">
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1494949360228-4e9bde560065?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRoYWlsYW5kfGVufDB8fDB8fHww"
            alt="fruit"
          />
        </div>
        <div className="h-min w-full bg-green-400">
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRoYWlsYW5kfGVufDB8fDB8fHww"
            alt="forest"
          />
        </div>
        <div className="h-min w-full bg-yellow-400">
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRoYWlsYW5kfGVufDB8fDB8fHww"
            alt="sunset"
          />
        </div>
        <div className="h-min w-full bg-lime-400">
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1513568720563-6a5b8c6caab3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRoYWlsYW5kfGVufDB8fDB8fHww"
            alt="desert"
          />
        </div>
        <div className="h-min w-full bg-fuchsia-400">
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRoYWlsYW5kfGVufDB8fDB8fHww"
            alt="ocean"
          />
        </div>
        <div className="h-min w-full bg-teal-400">
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D"
            alt="clouds"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
