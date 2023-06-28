import React from "react";
import Container from "../../../components/Container/Container";
import { FaDownload } from "react-icons/fa";
import bannerImage from "../../../assets/banner.jpg";
import image from "../../../assets/myimage.png";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

const Banner = () => {
  const bannerContainerStyle = {
    backgroundImage: `url(${bannerImage})`,
  };

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/souraveresume .pdf";
    downloadLink.download = "souraveresume .pdf"; 
    downloadLink.click();
  };


  return (
    <div style={bannerContainerStyle}>
      <Container>
        <div className="grid grid-cols-2 items-center w-full min-h-screen">
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="text-gray-100 font-bold text-6xl leading-tight">
              Hey, I am <br /> Sourave Halder <br /> React Developer
            </h2>
            <p className="text-gray-200 my-5 text-lg font-semibold">
              Unleashing the full potential of the web with React: Crafting
              captivating and cutting-edge digital experiences
            </p>
            <button onClick={handleDownload} className="bg-[#DAED1A] px-5 py-4 flex items-center gap-2 rounded-md hover:bg-[#dae766] transition duration-300 shadow-md hover:text-gray-700">
              Download Resume <FaDownload />
            </button>
          </motion.div>
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <Player
              className="z-10"
              src="/backgroundanimation.json"
              loop
              autoplay
            />
            <img className="absolute top-0 p-24 left-6" src={image} alt="" />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
