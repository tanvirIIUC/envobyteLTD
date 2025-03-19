import ClientsReviews from "../components/modules/home/ClientsReviews";
import Contact from "../components/modules/home/Contact";
import Details from "../components/modules/home/Details";
import DigitalServices from "../components/modules/home/DigitalServices";
import Faq from "../components/modules/home/Faq";
import HeroSection from "../components/modules/home/HeroSection";
import OurProcess from "../components/modules/home/OurProcess";
import TeamMembers from "../components/modules/home/TeamMembers";
import UxUiPortfolio from "../components/modules/home/UxUiPortfolio";

const Home = () => {
  return <div className="max-w-[1900px] mx-auto ">
    <div className="bg-[#04135B]">
      <HeroSection />
      <DigitalServices />
    </div>
    <Details/>
    <UxUiPortfolio/>
    <OurProcess/>
    <ClientsReviews/>
    <TeamMembers/>
    <Faq/>
    <Contact/>
  </div>;
};
export default Home;