import React from "react";
import Banner from "./Banner/Banner";
import Social from "../Social/Social";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "../../components/Projects/Projects";
import Cv from "./Cv/Cv";
import Contact from "./Contact/Contact";
const Home = () => {
  return (
    <>
      <Banner />
      <Social />
      <Services />
      <Resume />
      <Projects />
      <Cv />
      <Contact />
    </>
  );
};

export default Home;
