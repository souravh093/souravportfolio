import React, { useEffect, useRef } from "react";
import Container from "../Container/Container";
import { motion, useAnimation } from "framer-motion";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

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

          <div className="grid grid-cols-2 mt-24 gap-10">
            <div className="bg-[#091530] p-10 rounded-xl">
              <div className="w-full h-[300px] mb-5">
                <img
                  className="w-full h-full object-cover rounded-xl object-top transition-all duration-1000 ease-in-out hover:object-bottom"
                  src={project1}
                  alt="project 1"
                />
              </div>
              <div className="text-gray-200">
                <h2 className="text-4xl font-bold mb-3">MusicMaestro</h2>
                <p className="text-lg">
                  The Music Summer Camp School MERN website is a
                  mobile-responsive platform with dark mode, role management,
                  authentication and authorization using Firebase and JWT, and
                  visually appealing animations. Students can easily enroll in
                  classes and make payments securely.
                </p>
              </div>
            </div>
            <div>
              <div className="w-full h-[300px]">
                <img
                  className="w-full h-full object-cover object-top transition-all duration-1000 ease-in-out hover:object-bottom"
                  src={project2}
                  alt="project 2"
                />
              </div>
              <div></div>
            </div>
            <div>
              <div className="w-full h-[300px]">
                <img
                  className="w-full h-full object-cover object-top transition-all duration-1000 ease-in-out hover:object-bottom"
                  src={project3}
                  alt="project 3"
                />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
