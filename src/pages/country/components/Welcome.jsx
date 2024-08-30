
const Welcome = ({CountryData}) => {
  return (
    <>
      <div className="relative h-[70vh]">
        <div className="absolute h-[70vh] w-full flex flex-col justify-center items-center font-bold text-gray-200 p-auto">
          <p className="text-[1rem] ">{CountryData.welcomeline}</p>
          <p className="uppercase lg:text-5xl sm:text-4xl text-[1.4rem]">
            {CountryData.greatline}
          </p>
        </div>
        <img
          className="object-cover h-[70vh] w-full"
          src={CountryData.imageUrl}
          alt=""
        />
      </div>
    </>
  );
};

export default Welcome;
