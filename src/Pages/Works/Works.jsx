import React from "react";
import Container from "../../components/Container/Container";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <div className="py-20 h-auto text-gray-200">
      <div className="text-center bg-[#091530] py-10">
        <h2 className="text-5xl font-bold mb-3">Recent Works</h2>
        <p className="max-w-xl mx-auto">
          There is my recent work. This projects is build my confident and This
          projects when i create it gain my experience
        </p>
      </div>
      <Container>
        <div className="mt-20 flex flex-col gap-10">
          <div className="grid md:grid-cols-2 items-center gap-10 border p-5 rounded-xl border-gray-700">
            <div className="w-full h-[500px]">
              <img
                src={project1}
                alt="project1"
                className="w-full h-full object-cover object-top transition-all duration-[5s] ease-linear hover:object-bottom"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-5">MusicMaestro</h2>
              <p>
                {" "}
                The Music Summer Camp School MERN website is a mobile-responsive
                platform with dark mode, role management, authentication and
                authorization using Firebase and JWT, and visually appealing
                animations. Students can easily enroll in classes and make
                payments securely.
              </p>
              <div className="mt-5 flex flex-wrap gap-5">
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React Router
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Firebase
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  MongoDB
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  JWT
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React Query
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Axios
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  TailwindCSS
                </span>
              </div>

              <div className="mt-5 flex gap-20 items-center text-xl ">
                <div className="flex items-center gap-2">
                  <Link
                    to="https://github.com/souravh093/musicmestro-client"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    Client <FaGithub />
                  </Link>{" "}
                  <Link
                    to="https://github.com/souravh093/musicmestro-server"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    Server <FaGithub />
                  </Link>
                </div>
                <Link
                  to="https://github.com/souravh093/musicmestro-client"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  Live Demo <BsBoxArrowInUpRight />
                </Link>
              </div>
            </div>
          </div>


          <div className="grid md:grid-cols-2 items-center gap-10 border p-5 rounded-xl border-gray-700">
            <div className="w-full h-[500px]">
              <img
                src={project2}
                alt="project2"
                className="w-full h-full object-cover object-top transition-all duration-[5s] ease-linear hover:object-bottom"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-5">Toy Tree</h2>
              <p>
                {" "}
                The web application is a responsive platform that offers
                conditional navigation, private routes, user authentication via
                Firebase, and various sections such as Banners, Galleries,
                Categories, Trending Toys, and Top Rated Toys. Users can explore
                and search for toys, view their own added toys on the My Toys
                page, and even add new toys to the application. Additionally,
                there is a Blog page featuring FAQs. Overall, the application
                provides a seamless and secure experience for toy enthusiasts.
              </p>
              <div className="mt-5 flex flex-wrap gap-5">
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React Router
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Firebase
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  MongoDB
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  TailwindCSS
                </span>
              </div>

              <div className="mt-5 flex gap-20 items-center text-xl ">
                <div className="flex items-center gap-2">
                  <Link
                    to="https://github.com/souravh093/musicmestro-client"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    Client <FaGithub />
                  </Link>{" "}
                  <Link
                    to="https://github.com/souravh093/musicmestro-server"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    Server <FaGithub />
                  </Link>
                </div>
                <Link
                  to="https://github.com/souravh093/musicmestro-client"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  Live Demo <BsBoxArrowInUpRight />
                </Link>
              </div>
            </div>
          </div>


          <div className="grid md:grid-cols-2 items-center gap-10 border p-5 rounded-xl border-gray-700">
            <div className="w-full h-[500px]">
              <img
                src={project3}
                alt="project3"
                className="w-full h-full object-cover object-top transition-all duration-[5s] ease-linear hover:object-bottom"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-5">Shape Route</h2>
              <p>
                {" "}
                This Chef Recipe project, built with React, React Router Dom,
                and Firebase, features a responsive navigation bar with login
                functionality. The web application includes a banner section, a
                chefs section with six items, and a View Recipes button. Each
                recipe contains detailed information, such as ingredients and
                cooking method, along with a favorite button. The home page is
                fully responsive, and users can register and log in using email
                and password or through Google and GitHub.
              </p>
              <div className="mt-5 flex flex-wrap gap-5">
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React Router
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Firebase
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  MongoDB
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  JWT
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React Query
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Axios
                </span>
              </div>

              <div className="mt-5 flex gap-20 items-center text-xl ">
                <div className="flex items-center gap-2">
                  <Link
                    to="https://github.com/souravh093/musicmestro-client"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    Client <FaGithub />
                  </Link>{" "}
                  <Link
                    to="https://github.com/souravh093/musicmestro-server"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    Server <FaGithub />
                  </Link>
                </div>
                <Link
                  to="https://github.com/souravh093/musicmestro-client"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  Live Demo <BsBoxArrowInUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Link to="https://github.com/souravh093?tab=repositories" target="_blank" className="flex items-center justify-center mt-10">
        <motion.div whileHover={{scale: 1.1}}>
          <button className="bg-[#16203B] py-4 px-10 rounded-lg hover:bg-[#1b2647]">
            Show more
          </button>
        </motion.div>
      </Link>
    </div>
  );
};

export default Works;
