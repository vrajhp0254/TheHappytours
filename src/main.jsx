import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./pages/home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import "./index.css";
import { ThreeDots } from "react-loader-spinner";
// import destinationData from "./temp/data";
import Country from "./pages/country/Country";
import CountrysubPages from "./pages/country/pages/CountrysubPages";
import axios from "axios";
import Admin from "./admin/Admin";
import LoginForm from "./admin/login/LoginForm";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContainer() {
  const [destinationData, setDestinationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "2ef777de-b546-4421-871c-d7899916f860"; // Replace 'your_api_key_here' with your actual API key
        const config = {
          headers: {
            "x-api-key": apiKey,
          },
        };

        const response = await axios.get(
          "https://fyserver.vercel.app/getCountries",
          config
        );
        const data = response.data;
        // Process the data here
        setDestinationData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors here
      }
    };

    fetchData();
  }, []);

  if (!destinationData) {
    // You can render a loading indicator here while waiting for data to fetch
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ThreeDots
          visible={true}
          height={80}
          width={80}
          color="#094c87"
          radius={9}
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="admin" element={<LoginForm />} />
          <Route element={<App DestinationData={destinationData} />}>
            <Route index element={<Home DestinationData={destinationData} />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="aboutus" element={<AboutUs />} />
            {destinationData.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<Country CountryData={route} />}
              />
            ))}
            {destinationData.map((route) =>
              route.CountryPackages.map((subroute) => (
                <Route
                  key={subroute.subpath}
                  path={subroute.subpath}
                  element={<CountrysubPages CountrysubPagesData={subroute} />}
                />
              ))
            )}
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.render(<AppContainer />, document.getElementById("root"));
