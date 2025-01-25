import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import Services from "./components/services";
import Trainingprograms from "./components/trainingprograms";
import Whychooseus from "./components/whychooseus";
import Upcomingtraining from "./components/upcomingtraining";
import Previoustraining from "./components/previoustraining";
import Footer from "./components/footer";
import Contact from "./components/contact";

export default function Home() {
  return (
   <div>
 <Navbar />
 <Hero />
 <About />
 <Services />
 <Trainingprograms />
 <Whychooseus />
 <Upcomingtraining />
 <Previoustraining />
 <Contact />
 <Footer />    

    </div>
  );
}
