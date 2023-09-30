import React from "react";
import Container from "../../../components/Container/Container";
import cv from "../../../assets/cv.jpg";
import { FaDownload } from "react-icons/fa";

const Cv = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/souraveresume .pdf";
    downloadLink.download = "souraveresume .pdf";
    downloadLink.click();
  };
  return (
    <div
      style={{
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/toy-tree.appspot.com/o/cv.jpg?alt=media&token=04689cca-316a-4eed-a41f-fbf6310340f3&_gl=1*yp5szd*_ga*NzYxODY2MzQ0LjE2ODk5NjcwMDg.*_ga_CW55HF8NVT*MTY5NjA2Nzc2NS41NC4xLjE2OTYwNjgyNTkuNjAuMC4w)`,
      }}
      className="bg-black my-28 bg-opacity-70  bg-no-repeat bg-cover bg-center bg-blend-multiply py-10 text-white"
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-5 items-center">
          <div>
            <h2 className="md:text-4xl text-3xl font-semibold md:leading-snug w-full">
              Ready to embark on a development journey? Get my resume and let's
              make it happen!
            </h2>
          </div>
          <div>
            <h3 className="max-w-lg md:text-xl mb-5">
              I am a Frontend Web Developer. Who are excited about unique ideas
              and help
            </h3>
            <button
              onClick={handleDownload}
              className="bg-[#DAED1A] text-gray-700 px-5 py-4 flex items-center gap-2 rounded-md hover:bg-[#dae766] transition duration-300 shadow-md hover:text-gray-700"
            >
              Download Resume <FaDownload />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cv;
