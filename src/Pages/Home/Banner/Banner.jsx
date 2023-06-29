import React from "react";
import Container from "../../../components/Container/Container";
import { FaDownload } from "react-icons/fa";
import bannerImage from "../../../assets/banner.jpg";
import image from "../../../assets/myimage.png";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

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
    <div
      style={bannerContainerStyle}
      className="bg-no-repeat relative"
      id="home"
    >
      <Container>
        <div className="grid md:grid-cols-2 items-center w-full min-h-[calc(100vh-230px)] relative md:h-screen pt-20 md:pt-0">
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="text-gray-100 font-bold text-4xl md:text-6xl leading-tight">
              Hey, I am <br /> Sourave Halder <br /> React Developer
            </h2>
            <p className="text-gray-200 my-5 text-lg font-semibold">
              Unleashing the full potential of the web with React: Crafting
              captivating and cutting-edge digital experiences
            </p>
            <button
              onClick={handleDownload}
              className="bg-[#DAED1A] px-5 py-4 flex items-center gap-2 rounded-md hover:bg-[#dae766] transition duration-300 shadow-md hover:text-gray-700"
            >
              Download Resume <FaDownload />
            </button>
          </motion.div>
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative hidden md:block"
          >
            <Player
              className="z-10"
              src="/backgroundanimation.json"
              loop
              autoplay
            />
            <img className="absolute top-0 p-24 left-6" src={image} alt="" />
          </motion.div>
          <div className="absolute cursor-pointer xs:bottom-10 bottom-10 w-full flex justify-center items-center">
            <ScrollLink
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              to="social"
            >
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-gray-300 mb-1"
                />
              </div>
            </ScrollLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
