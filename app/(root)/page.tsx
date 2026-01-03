// Components imports
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import About from "@/sections/home/About";
import Explore from "@/sections/home/Explore";
import GetStarted from "@/sections/home/GetStarted";
import Hero from "@/sections/home/Hero";
import WhatsNew from "@/sections/home/WhatsNew";
import World from "@/sections/home/World";

export default async function Home() {
  return (
    <div className="overflow-hidden bg-primary-black" suppressHydrationWarning>
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
