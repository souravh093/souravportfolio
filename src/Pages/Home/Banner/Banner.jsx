import React from "react";
import Container from "../../../components/Container/Container";
import { FaDownload } from "react-icons/fa";
import bannerImage from "../../../assets/banner.jpg";
import image from "../../../assets/myimage.png"
import { Player } from "@lottiefiles/react-lottie-player";

const Banner = () => {
  const bannerContainerStyle = {
    backgroundImage: `url(${bannerImage})`,
  };
  return (
    <div style={bannerContainerStyle}>
      <Container>
        <div className="grid grid-cols-2 items-center w-full min-h-screen">
          <div>
            <h2 className="text-gray-100 font-bold text-6xl leading-tight">
              Hey, I am <br /> Sourave Halder <br /> React Developer
            </h2>
            <p className="text-gray-200 my-5 text-lg font-semibold">
              Unleashing the full potential of the web with React: Crafting
              captivating and cutting-edge digital experiences
            </p>
            <button className="bg-[#DAED1A] px-5 py-4 flex items-center gap-2 rounded-md hover:bg-[#dae766] transition duration-300 shadow-md hover:text-gray-700">
              Download Resume <FaDownload />
            </button>
          </div>
          <div className="relative">
            <Player
              className="z-10"
              src="/backgroundanimation.json"
              loop
              autoplay
            />
            <img className="absolute top-0 p-24 left-6" src={image} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
