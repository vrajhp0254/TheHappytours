import SubWelcome from "./components/SubWelcome";
import TripOverview from "./components/TripOverview";
import TripTimeline from "./components/TripTimeline";
import PackageEnquiry from "./components/PackageEnquiry";
import Gallery from "./components/Gallery";

const CountrysubPages = ({ CountrysubPagesData }) => {
  // console.log(CountrysubPagesData);
  const matchedData = CountrysubPagesData;

  return (
    <>
      {/* welcome page  */}
      <SubWelcome matchedData={matchedData} />
      <div className="w-full flex justify-center py-5">
        <div className="md:flex justify-between subpage_wrap">
          <div className="md:w-[60%]">
            <TripOverview matchedData={matchedData} />

            <TripTimeline
              timelineDatas={matchedData.timelineDatas}
              inclusions={matchedData.inclusions}
            />
          </div>

          <div className="md:w-[40%] ">
            <PackageEnquiry />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Gallery />
      </div>
    </>
  );
};

export default CountrysubPages;
