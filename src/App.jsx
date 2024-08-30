import "./App.css";
import { NavbarWithMegaMenu } from "./components/NavBar";
import AppFooter from "./components/AppFooter";
import "boxicons";
import { Outlet } from "react-router-dom";

function App({DestinationData}) {
  return (
    <>
      <NavbarWithMegaMenu DestinationData={DestinationData} />
      <Outlet />
      <AppFooter />
    </>
  );
}

export default App;
