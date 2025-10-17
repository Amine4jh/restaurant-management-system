import About from "../components/homepage/sections/About";
import Contact from "../components/homepage/sections/contact";
import Features from "../components/homepage/sections/Features";
import Hero from "../components/homepage/sections/Hero";
import Restaurant from "../components/homepage/sections/Restaurant";
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
