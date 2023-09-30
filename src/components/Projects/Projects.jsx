import React, { useEffect, useRef } from "react";
import Container from "../Container/Container";
import { motion, useAnimation } from "framer-motion";
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
          <div className="text-gray-200 text-center">
            <h2 className="text-gray-100 text-3xl md:text-5xl font-bold mb-5">
              Let's Check my Projects
            </h2>
            <p className="max-w-2xl mx-auto text-lg">
              I've been working on some exciting projects lately, showcasing my
              skills as a developer. From building interactive web applications
              to creating intuitive user interfaces, my recent projects
              highlight my passion for creating impactful digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 mt-10 gap-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-[#091530] p-5 rounded-xl border border-gray-700"
            >
              <div className="w-full h-[250px] mb-5">
                <img
                  className="w-full h-full object-cover rounded-xl object-top transition-all duration-[5s] ease-linear hover:object-bottom"
                  src="https://firebasestorage.googleapis.com/v0/b/toy-tree.appspot.com/o/project4.png?alt=media&token=b4d2dc08-ce02-4a7f-8ad5-1e59edbc819a&_gl=1*10jgrh9*_ga*NzYxODY2MzQ0LjE2ODk5NjcwMDg.*_ga_CW55HF8NVT*MTY5NjA2Nzc2NS41NC4xLjE2OTYwNjgwMjMuNjAuMC4w"
                  alt="project 3"
                />
              </div>
              <div className="text-gray-200">
                <h2 className="text-3xl font-bold mb-3">Biomed Team Project</h2>
                <p className="text-gray-300">
                  This is Full Stack MERN Team project. This project is
                  Evaluation Type so any Instructor create task and any user can
                  apply particular task when he apply then they submitted task
                  then instructor evaluate the task and give some reword also.
                  User and Instructor can communication each other using message
                  and live video conversation as well. This project we use
                  Latest technology like socket.IO, Firestorage and many more.
                </p>
                <div className="mt-5">
                  <div className="flex justify-between gap-5">
                    <div className="flex items-center gap-2">
                      <Link
                        to="https://github.com/souravh093/biomed-servers"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        Client <FaGithub />
                      </Link>{" "}
                      <Link
                        to="https://github.com/souravh093/biomed-clients"
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
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-[#091530] p-5 rounded-xl border border-gray-700"
            >
              <div className="w-full h-[250px] mb-5">
                <img
                  className="w-full h-full object-cover rounded-xl object-top transition-all duration-[5s] ease-linear hover:object-bottom"
                  src="https://firebasestorage.googleapis.com/v0/b/toy-tree.appspot.com/o/project1.png?alt=media&token=562e87b0-8ea9-4c3c-8a09-3f05c4670a8b&_gl=1*1icusmy*_ga*NzYxODY2MzQ0LjE2ODk5NjcwMDg.*_ga_CW55HF8NVT*MTY5NjA2Nzc2NS41NC4xLjE2OTYwNjgxNjkuMTIuMC4w"
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
                      to="https://musicmaestro-2b4f6.web.app/"
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
                  className="w-full h-full object-cover rounded-xl object-top transition-all duration-[5s] ease-linear hover:object-bottom"
                  src="https://firebasestorage.googleapis.com/v0/b/toy-tree.appspot.com/o/project2.png?alt=media&token=c44806b6-24df-4c84-97f1-fc689cc37f09&_gl=1*9osrd8*_ga*NzYxODY2MzQ0LjE2ODk5NjcwMDg.*_ga_CW55HF8NVT*MTY5NjA2Nzc2NS41NC4xLjE2OTYwNjgxMjYuNTUuMC4w"
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
