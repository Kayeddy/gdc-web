import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Explore from "@/sections/Explore";
import GetStarted from "@/sections/GetStarted";
import Hero from "@/sections/Hero";
import WhatsNew from "@/sections/WhatsNew";
import World from "@/sections/World";

export default function Home() {
  return (
    <div className="overflow-hidden bg-primary-black">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="z-0 gradient-03" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="z-0 gradient-04" />
        <WhatsNew />
      </div>
      <World />
      <Footer />
    </div>
  );
}
