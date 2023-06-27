import React from "react";
import Container from "../../../components/Container/Container";

const Resume = () => {
  return (
    <div className="mt-28">
      <Container>
        <div className="border border-gray-800 bg-[#091530] px-10 rounded-md py-12">
          <header className="mb-20">
            <h2 className="text-4xl font-semibold text-gray-100">Resume</h2>
          </header>
          <div className="text-gray-100 grid grid-cols-3 ">
            <div>
              <div className="flex item-center gap-10">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Sourave Halder</h2>
                  <h3>React Developer</h3>
                </div>
                <div className="flex items-center gap-3">
                  <h1 className="text-5xl font-bold text-[#DBEE19]">6</h1>
                  <p>
                    Month <br /> Experience
                  </p>
                </div>
              </div>
              <hr className="my-5" />
              <div>
                <p className="text-lg">
                  Hi there! My name is Sourave Halder and I am a React developer
                  with expertise in JavaScript and front-end development.
                  Skilled in building scalable web applications using React.js
                  and related technologies. Strong problem-solving abilities and
                  a passion for staying updated with the latest industry trends.
                </p>
              </div>
            </div>
            <div>
              
            </div>
            <div></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
