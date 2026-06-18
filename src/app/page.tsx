import HeroSection from "./components/Hero";
import Header from "./components/Header";
import AboutSection from "./components/About";
//import Services from "./components/Services";
import PortfolioCarousel from "./components/PortfolioCarousel"; 
import RecentWork from "./components/RecentWork";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="">
      <Header/>
      <HeroSection/>
      <AboutSection/>
      {/* <Services/> */}
      <RecentWork/>
      
      <Footer/>
    </div>
  );
}
