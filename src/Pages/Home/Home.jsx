import React from "react";
import Banner from "./Banner/Banner";
import Social from "../Social/Social";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "../../components/Projects/Projects";
const Home = () => {
  return (
    <>
      <Banner />
      <Social />
      <Services />
      <Resume />
      <Projects />
    </>
  );
};

export default Home;
