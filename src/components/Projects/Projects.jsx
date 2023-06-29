import React, { useEffect, useRef } from "react";
import Container from "../Container/Container";
import { motion, useAnimation } from "framer-motion";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({ x: 0, opacity: 1 });
        }
      });
    }, options);

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, [controls]);
  return (
    <div className="mt-28">
      <Container>
        <div>
          <motion.div
            ref={projectRef}
            initial={{ x: -200, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            className="text-gray-200 text-center"
          >
            <h2 className="text-gray-100 text-5xl font-bold mb-5">
              Let's Check my Projects
            </h2>
            <p className="max-w-2xl mx-auto text-lg">
              I've been working on some exciting projects lately, showcasing my
              skills as a developer. From building interactive web applications
              to creating intuitive user interfaces, my recent projects
              highlight my passion for creating impactful digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 mt-10 gap-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-[#091530] p-5 rounded-xl border border-gray-700"
            >
              <div className="w-full h-[250px] mb-5">
                <img
                  className="w-full h-full object-cover rounded-xl object-top transition-all duration-1000 ease-in-out hover:object-bottom"
                  src={project1}
                  alt="project 1"
                />
              </div>
              <div className="text-gray-200">
                <h2 className="text-3xl font-bold mb-3">MusicMaestro</h2>
                <p className="text-gray-300">
                  The Music Summer Camp School MERN website is a
                  mobile-responsive platform with dark mode, role management,
                  authentication and authorization using Firebase and JWT, and
                  visually appealing animations. Students can easily enroll in
                  classes and make payments securely.
                </p>
                <div className="mt-5">
                  <div className="flex justify-between gap-5">
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
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-[#091530] p-5 rounded-xl border border-gray-700"
            >
              <div className="w-full h-[250px] mb-5">
                <img
                  className="w-full h-full object-cover rounded-xl object-top transition-all duration-1000 ease-in-out hover:object-bottom"
                  src={project2}
                  alt="project 2"
                />
              </div>
              <div className="text-gray-200">
                <h2 className="text-3xl font-bold mb-3">Toy Tree</h2>
                <p className="text-gray-300">
                  This responsive web app has conditional navigation, private
                  routes, user authentication with Firebase, and sections for
                  Banners, Galleries, Categories, Trending Toys, and Top Rated
                  Toys. Users can explore, search, add, and view their own toys.
                  The app also includes a Blog page with FAQs. It's a seamless
                  and secure experience for toy enthusiasts.
                </p>
                <div className="mt-5">
                  <div className="flex justify-between gap-5">
                    <div className="flex items-center gap-2">
                      <Link
                        to="https://github.com/souravh093/toy-tree-client"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        Client <FaGithub />
                      </Link>{" "}
                      <Link
                        to="https://github.com/souravh093/toy-tree-server"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        Server <FaGithub />
                      </Link>
                    </div>
                    <Link
                      to="https://toy-tree.web.app/"
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      Live Demo <BsBoxArrowInUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-[#091530] p-5 rounded-xl border border-gray-700"
            >
              <div className="w-full h-[250px] mb-5">
                <img
                  className="w-full h-full object-cover rounded-xl object-top transition-all duration-1000 ease-in-out hover:object-bottom"
                  src={project3}
                  alt="project 3"
                />
              </div>
              <div className="text-gray-200">
                <h2 className="text-3xl font-bold mb-3">Shape Route</h2>
                <p className="text-gray-300">
                  This Chef Recipe project is a responsive web app with login
                  functionality. It includes a banner section, a chefs section,
                  and recipe details with a favorite button. The home page is
                  fully responsive, and users can register and log in via email,
                  password, or Google/GitHub.
                </p>
                <div className="mt-5">
                  <div className="flex justify-between gap-5">
                    <div className="flex items-center gap-2">
                      <Link
                        to="https://github.com/souravh093/assingnment-10-client"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        Client <FaGithub />
                      </Link>{" "}
                      <Link
                        to="https://github.com/souravh093/assignment-10-server"
                        className="flex items-center gap-2"
                      >
                        Server <FaGithub />
                      </Link>
                    </div>
                    <Link
                      to="https://chip-recipe-client.web.app/"
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      Live Demo <BsBoxArrowInUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
