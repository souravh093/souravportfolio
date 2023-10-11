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
                      to="https://biomed-3abc5.web.app/"
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
                  src="https://firebasestorage.googleapis.com/v0/b/vertex-32ce6.appspot.com/o/Screenshot_38.png?alt=media&token=bc21bcde-ed5a-4deb-8763-092c6bc8f296&_gl=1*1qha4bm*_ga*NzYxODY2MzQ0LjE2ODk5NjcwMDg.*_ga_CW55HF8NVT*MTY5NzA0MjE5MC42OS4xLjE2OTcwNDMyMTUuNi4wLjA."
                  alt="project 2"
                />
              </div>
              <div className="text-gray-200">
                <h2 className="text-3xl font-bold mb-3">Vertex</h2>
                <p className="text-gray-300">
                  Vertex is a full-stack MERN project. It is a blog site where
                  users can read blogs and also write blogs. The home page shows
                  the treading and recent blog. Users can search blogs by title.
                  Users can comment on the blog. Users have to log in to write
                  blogs and users have a dashboard where user can see his/her
                  blogs and also can delete their blogs. Users can see how many
                  people read his/her blog. Users can see how many comments on
                  his/her blog.
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
