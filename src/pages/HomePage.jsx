import About from "../components/sections/About";
import Contact from "../components/sections/contact";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Restaurant from "../components/sections/Restaurant";
import Footer from "../layouts/Footer";
import Header from "../layouts/header";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Restaurant />
      <Features />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
