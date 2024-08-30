import Welcome from "./components/Welcome";
import Packages from "./components/Pakages";
const Country = ({ CountryData }) => {
  // console.log(CountryData);
  return (
    <>
      <Welcome CountryData={CountryData} />
      <Packages
        CountryPackages={CountryData.CountryPackages}
        title={CountryData.title}
      />
    </>
  );
};

export default Country;
