import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Main = () => {
  return <div className="max-w-[1900px]">
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>;
};
export default Main;