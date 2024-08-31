import React from "react";

const WhyUs = () => {
  return (
    <div className="mt-10 dest__wrap">
      <div className="relative mx-auto w-full text-center">
        <span className="text-black font-bold my-3 flex items-center justify-center text-3xl uppercase tracking-wider">
          Why choose &nbsp;
          <span className="text-orange-700 --title__text-underline dest-line ">
            us ?
          </span>
        </span>

        <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide">
          "Embark on a Journey Beyond Borders with The Happy Tours"
        </p>
        <div className="md:flex md:flex-row justify-center items-center gap-3  w-full flex flex-col">
          <div className="flex gap-3 md:w-[50%] w-full h-[30vh] justify-center">
            <div className="overflow-hidden md:w-[50%] w-full flex flex-col items-center justify-center h-[30vh] text-center bg-white rounded border border-black text-slate-500 ">
              {/*  <!-- Icon --> */}
              <figure className="p-3  h-[50%]  flex flex-col justify-end ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  className="fill-green-600"
                >
                  <path d="M12,24c-1.617,0-3.136-.708-4.176-1.92-1.587,.124-3.166-.451-4.31-1.595-1.144-1.145-1.717-2.719-1.595-4.31-1.212-1.039-1.92-2.558-1.92-4.175s.708-3.136,1.92-4.175c-.122-1.591,.451-3.166,1.595-4.31,1.144-1.143,2.723-1.712,4.31-1.595,1.04-1.212,2.559-1.92,4.176-1.92s3.136,.708,4.176,1.92c1.587-.119,3.167,.452,4.31,1.595,1.144,1.145,1.717,2.719,1.595,4.31,1.212,1.039,1.92,2.558,1.92,4.175s-.708,3.136-1.92,4.175c.122,1.591-.451,3.166-1.595,4.31-1.143,1.144-2.722,1.719-4.31,1.595-1.04,1.212-2.559,1.92-4.176,1.92Zm-3.274-4.095l.37,.549c.653,.968,1.739,1.546,2.904,1.546s2.251-.578,2.904-1.546l.37-.549,.649,.126c1.148,.223,2.323-.136,3.147-.96,.824-.825,1.183-2.001,.96-3.146l-.127-.65,.55-.37c.968-.653,1.546-1.739,1.546-2.904s-.578-2.251-1.546-2.904l-.55-.37,.127-.65c.223-1.145-.136-2.322-.96-3.146-.824-.824-2-1.182-3.147-.96l-.649,.126-.37-.549c-.653-.968-1.739-1.546-2.904-1.546s-2.251,.578-2.904,1.546l-.37,.549-.649-.126c-1.147-.22-2.323,.136-3.147,.96-.824,.825-1.183,2.001-.96,3.146l.127,.65-.55,.37c-.968,.653-1.546,1.739-1.546,2.904s.578,2.251,1.546,2.904l.55,.37-.127,.65c-.223,1.145,.136,2.322,.96,3.146,.824,.823,1.998,1.182,3.147,.96l.649-.126Zm3.184-4.485l5.793-5.707-1.404-1.425-5.809,5.701-2.793-2.707-1.393,1.437,2.782,2.696c.391,.391,.903,.585,1.416,.585s1.021-.193,1.407-.58Z" />
                </svg>
              </figure>
              {/*  <!-- Body--> */}
              <div className="p-3 h-[50%] flex flex-col justify-start">
                <h3 className="mb-4 text-xl font-medium text-slate-700">
                  Trusted Advisor
                </h3>
              </div>
            </div>

            <div className="overflow-hidden md:w-[50%] w-full h-[30vh] flex flex-col items-center justify-center text-center bg-white rounded border border-black text-slate-500 ">
              {/*  <!-- Icon --> */}
              <figure className="p-3  h-[50%]  flex flex-col justify-end ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  className="fill-blue-600"
                >
                  <path d="m4,4c1.103,0,2-.897,2-2s-.897-2-2-2-2,.897-2,2,.897,2,2,2Zm0-3c.552,0,1,.449,1,1s-.448,1-1,1-1-.449-1-1,.448-1,1-1Zm5,4c1.103,0,2-.897,2-2s-.897-2-2-2-2,.897-2,2,.897,2,2,2Zm0-3c.552,0,1,.449,1,1s-.448,1-1,1-1-.449-1-1,.448-1,1-1Zm5,2c1.103,0,2-.897,2-2s-.897-2-2-2-2,.897-2,2,.897,2,2,2Zm0-3c.552,0,1,.449,1,1s-.448,1-1,1-1-.449-1-1,.448-1,1-1Zm9.181,8.655c-.496-.452-1.141-.674-1.809-.652-.67.032-1.288.322-1.739.818l-3.732,4.102c-.314-1.108-1.335-1.922-2.543-1.922H2.5c-1.379,0-2.5,1.122-2.5,2.5v7c0,1.378,1.121,2.5,2.5,2.5h11.225l9.638-10.818c.912-1.021.831-2.604-.182-3.527Zm-.564,2.862l-9.341,10.483H2.5c-.827,0-1.5-.673-1.5-1.5v-7c0-.827.673-1.5,1.5-1.5h10.857c.905,0,1.643.737,1.643,1.642,0,.812-.606,1.511-1.403,1.625l-5.661.737.129.991,5.668-.738c1.021-.146,1.844-.878,2.145-1.824l4.496-4.94c.271-.298.643-.473,1.046-.492.398-.018.789.12,1.088.393.609.555.658,1.507.109,2.123ZM6,7.5c0-.827.673-1.5,1.5-1.5h3c.827,0,1.5.673,1.5,1.5v1.5h-1v-1.5c0-.276-.225-.5-.5-.5h-3c-.275,0-.5.224-.5.5v1.5h-1v-1.5Zm9.5-2.5c.827,0,1.5.673,1.5,1.5v1.5h-1v-1.5c0-.276-.225-.5-.5-.5h-1.852c-.179-.372-.413-.714-.706-1h2.558Zm-13.5,3h-1v-1.5c0-.827.673-1.5,1.5-1.5h2.558c-.293.286-.527.628-.706,1h-1.852c-.275,0-.5.224-.5.5v1.5Z" />
                </svg>
              </figure>
              {/*  <!-- Body--> */}
              <div className="p-3 h-[50%] flex flex-col justify-start">
                <h3 className="mb-4 text-xl font-medium text-slate-700">
                  Responsive
                </h3>
              </div>
            </div>
          </div>

          <div className="flex gap-3 md:w-[50%] w-full h-[30vh] justify-center">
            <div className="overflow-hidden text-center md:w-[50%] w-full h-[30vh] flex flex-col items-center justify-center bg-white rounded border border-black text-slate-500 ">
              {/*  <!-- Icon --> */}
              <figure className="p-3  h-[50%]  flex flex-col justify-end ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  className="fill-orange-700"
                >
                  <path d="m12.815,14l.588-3.33q.023-.508,0-.533c-.121-.444-.402-.794-.791-.985-.394-.192-.848-.2-1.281-.02-.254.105-.502.367-.679.712l-2.196,4.155h-2.456c-1.103,0-2,.897-2,2v6c0,1.103.897,2,2,2h12.5l1.509-8.095-.009-1.905h-7.185Zm-7.815,8v-6c0-.551.449-1,1-1h2v8h-2c-.551,0-1-.449-1-1Zm12.67,1h-8.67v-8l2.54-4.694c.094-.184.182-.251.177-.251.164-.068.325-.07.455-.005.1.049.179.135.247.291l-.795,4.659h7.386l.009.815-1.348,7.185ZM9.16,7.638l.618.502,2.221-1.44,2.222,1.44.625-.48-.707-2.365,1.861-1.5v-.795h-2.683l-.92-2.626h-.794l-.92,2.626h-2.683v.795l1.861,1.5-.7,2.343Zm.687-3.638h1.544l.608-1.735.608,1.735h1.544l-1.164.938.449,1.502-1.438-.933-1.438.933.449-1.502-1.164-.938Zm-3.626,7.14l.625-.48-.707-2.365,1.861-1.5v-.795h-2.683l-.92-2.626h-.794l-.92,2.626H0v.795l1.861,1.5-.703,2.352.621.493,2.221-1.44,2.222,1.44ZM1.848,7h1.544l.608-1.735.608,1.735h1.544l-1.164.938.449,1.502-1.438-.933-1.438.933.449-1.502-1.164-.938Zm22.152-1h-2.683l-.92-2.626h-.794l-.92,2.626h-2.683v.795l1.861,1.5-.7,2.341.618.505,2.221-1.44,2.222,1.44.625-.48-.707-2.365,1.861-1.5v-.795Zm-3.011,1.938l.449,1.502-1.438-.933-1.438.933.449-1.502-1.164-.938h1.544l.608-1.735.608,1.735h1.544l-1.164.938Z" />
                </svg>
              </figure>
              {/*  <!-- Body--> */}
              <div className="p-3 h-[50%] flex flex-col justify-start">
                <h3 className="mb-4 text-xl font-medium text-slate-700">
                  Memorable Exprience
                </h3>
              </div>
            </div>

            <div className="overflow-hidden text-center md:w-[50%] w-full flex flex-col items-center justify-center h-[30vh] bg-white rounded border border-black text-slate-500 ">
              {/*  <!-- Icon --> */}
              <figure className="p-3  h-[50%]  flex flex-col justify-end ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  className="fill-teal-500"
                >
                  <path d="M24,3.5c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5c0,1.76,1.306,3.221,3,3.464v.536c0,1.93-1.57,3.5-3.5,3.5h-1.5c-1.271,0-2.387,.682-3,1.699-.613-1.017-1.729-1.699-3-1.699h-1.5c-1.93,0-3.5-1.57-3.5-3.5v-.536c1.694-.243,3-1.704,3-3.464,0-1.93-1.57-3.5-3.5-3.5S0,1.57,0,3.5c0,1.76,1.306,3.221,3,3.464v.536c0,2.481,2.019,4.5,4.5,4.5h1.5c1.378,0,2.5,1.122,2.5,2.5v2.536c-1.694,.243-3,1.704-3,3.464,0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5c0-1.76-1.306-3.221-3-3.464v-2.536c0-1.378,1.122-2.5,2.5-2.5h1.5c2.481,0,4.5-2.019,4.5-4.5v-.536c1.694-.243,3-1.704,3-3.464ZM1,3.5c0-1.378,1.122-2.5,2.5-2.5s2.5,1.122,2.5,2.5-1.122,2.5-2.5,2.5S1,4.878,1,3.5ZM14.5,20.5c0,1.378-1.122,2.5-2.5,2.5s-2.5-1.122-2.5-2.5,1.122-2.5,2.5-2.5,2.5,1.122,2.5,2.5Zm6-14.5c-1.378,0-2.5-1.122-2.5-2.5s1.122-2.5,2.5-2.5,2.5,1.122,2.5,2.5-1.122,2.5-2.5,2.5Z" />
                </svg>
              </figure>
              {/*  <!-- Body--> */}
              <div className="p-3 h-[50%] flex flex-col justify-start">
                <h3 className="mb-4 text-xl font-medium text-slate-700">
                  Better Connection
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
