const SubWelcome = ({ matchedData }) => {
  return (
    <>
      <div className="relative h-[70vh]">
        <div className="absolute h-[70vh] w-full bg-black opacity-50"></div>
        <div className="absolute h-[70vh] w-full flex flex-col justify-center items-center font-bold text-gray-200 p-auto uppercase text-[4rem] md:text-[2rem]">
          <p className="uppercase text-[2rem] md:text-[4rem]  text-center">
            {matchedData.title}
          </p>
          <p className="uppercase text-[2rem] md:text-[4rem]">
            {matchedData.timelineDatas.length} days
          </p>
        </div>
        <div className="absolute h-[10vh] w-full bg-black opacity-30 bottom-0 "></div>
        <div className="absolute h-[10vh] w-full bottom-0 text-gray-200 flex gap-4 items-center justify-start pl-5">
          {matchedData.tripdata.map((item, index) => {
            return <div className="" key={index}
            >{item}</div>;
          })}
        </div>
        <img
          className="object-cover h-[70vh] w-full"
          src={matchedData.imageUrl}
          alt=""
        />
      </div>
    </>
  );
};

export default SubWelcome;
