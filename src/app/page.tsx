import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Trainingprograms from "./components/trainingprograms";
import Whychooseus from "./components/whychooseus";
import Upcomingtraining from "./components/upcomingtraining";
// import Previoustraining from "./components/previoustraining";
import Contact from "./components/contact";

export default function Home() {
  return (
   <div>

 <Hero />
 <About />
 <Trainingprograms />
 <Services />
 <Whychooseus />
 <Upcomingtraining />
 {/* <Previoustraining /> */}
 <Contact />
 

    </div>
  );
}
