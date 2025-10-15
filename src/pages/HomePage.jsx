import About from "../components/sections/About";
import Contact from "../components/sections/contact";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Restaurant from "../components/sections/Restaurant";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Restaurant />
      <Features />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
