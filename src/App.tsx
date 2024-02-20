import Brands from "./components/Brands";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import HeroNoImage from "./components/HeroNoImage";
import { Section } from "./components/Section";

function App() {
  return (
    <div className="w-full h-screen p-0 m-0 ">
      <Hero />
      <Brands />
      <Section />
      <HeroNoImage />
      <Footer />
    </div>
  );
}

export default App;
