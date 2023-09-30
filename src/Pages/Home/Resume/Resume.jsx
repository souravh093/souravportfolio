import React from "react";
import Container from "../../../components/Container/Container";
import resumeImage from "../../../assets/resume.png";
import {
  FaChrome,
  FaElementor,
  FaFigma,
  FaGithub,
  FaNpm,
  FaWordpress,
} from "react-icons/fa";
import { SiAdobeillustrator, SiVercel } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";

const Resume = () => {
  return (
    <div className="mt-28" id="resume">
      <Container>
        <div className="border border-gray-800 bg-[#091530] px-10 rounded-md py-12">
          <header className="mb-20">
            <h2 className="text-4xl font-semibold text-gray-100">Resume</h2>
          </header>
          <div className="text-gray-100 grid md:grid-cols-3 gap-10">
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
            <div className="mx-auto">
              <img
                className="w-60"
                src="https://firebasestorage.googleapis.com/v0/b/toy-tree.appspot.com/o/resume.png?alt=media&token=d8eaaa11-384b-49b3-9adf-02e1a2fbe1da&_gl=1*t84l4o*_ga*NzYxODY2MzQ0LjE2ODk5NjcwMDg.*_ga_CW55HF8NVT*MTY5NjA2Nzc2NS41NC4xLjE2OTYwNjc5MjMuNjAuMC4w"
                alt=""
              />
            </div>
            <div>
              <div>
                <h2 className="font-semibold text-xl uppercase mb-2">
                  Education
                </h2>
                <p>Govt B.M College, Barishal, Bangladesh</p>
                <p>BBA Honours 4th year in Management 2017-2018</p>
              </div>
              <hr className="my-5" />
              <div>
                <h2 className="font-semibold text-xl uppercase mb-2">
                  Languages
                </h2>
                <p>Bangla: Native</p>
                <p>English: Comfortable</p>
              </div>
              <hr className="my-5" />
              <div>
                <h2 className="font-semibold text-xl uppercase mb-2">
                  HOBBIES
                </h2>
                <p>Personal Coding Projects, Playing Football,</p>
                <p>Open Source Contribution</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-20 text-gray-200 my-20">
            <div>
              <h2 className="text-2xl font-semibold">Skills</h2>
              <hr className="my-5" />
              <div className="flex flex-wrap gap-5">
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  HTML
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  CSS
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Bootstrap
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  TailwindCSS
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Matrial UI
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  JavaScript
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  NextJS
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Redux
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Socket.IO
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Firebase
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Express
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  MongoDB
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Tools I use every day</h2>
              <hr className="my-5" />
              <div className="flex flex-wrap gap-5">
                <div className="bg-[#16203B] p-5 rounded-md">
                  <FaFigma className="text-4xl" />
                </div>
                <div className="bg-[#16203B] p-5 rounded-md">
                  <SiAdobeillustrator className="text-4xl" />
                </div>
                <div className="bg-[#16203B] p-5 rounded-md">
                  <BiLogoNetlify className="text-4xl" />
                </div>
                <div className="bg-[#16203B] p-5 rounded-md">
                  <SiVercel className="text-4xl" />
                </div>
                <div className="bg-[#16203B] p-5 rounded-md">
                  <FaGithub className="text-4xl" />
                </div>
                <div className="bg-[#16203B] p-5 rounded-md">
                  <FaNpm className="text-4xl" />
                </div>
                <div className="bg-[#16203B] p-5 rounded-md">
                  <TbBrandVscode className="text-4xl" />
                </div>
                <div className="bg-[#16203B] p-5 rounded-md">
                  <FaChrome className="text-4xl" />
                </div>
                <div className="bg-[#16203B] p-5 rounded-md">
                  <FaWordpress className="text-4xl" />
                </div>
                <div className="bg-[#16203B] p-5 rounded-md">
                  <FaElementor className="text-4xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-200 my-20">
            <h2 className="text-2xl font-semibold">Interpersonal skills</h2>
            <hr className="my-5" />
            <div className="flex flex-wrap gap-5">
              <div className="bg-[#16203B] p-5 rounded-md">
                <h2>Effective Communication</h2>
              </div>
              <div className="bg-[#16203B] p-5 rounded-md">
                <h2>Collaboration</h2>
              </div>
              <div className="bg-[#16203B] p-5 rounded-md">
                <h2>Problem-solving</h2>
              </div>
              <div className="bg-[#16203B] p-5 rounded-md">
                <h2>Conflict Resolution</h2>
              </div>
              <div className="bg-[#16203B] p-5 rounded-md">
                <h2>Adaptability</h2>
              </div>
              <div className="bg-[#16203B] p-5 rounded-md">
                <h2>Leadership</h2>
              </div>
              <div className="bg-[#16203B] p-5 rounded-md">
                <h2>Time Management</h2>
              </div>
              <div className="bg-[#16203B] p-5 rounded-md">
                <h2>Presentation Skills</h2>
              </div>
              <div className="bg-[#16203B] p-5 rounded-md">
                <h2>Cultural Sensitivity</h2>
              </div>
              <div className="bg-[#16203B] p-5 rounded-md">
                <h2>Team Building</h2>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
