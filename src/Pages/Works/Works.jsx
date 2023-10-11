import React from "react";
import Container from "../../components/Container/Container";
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
                src="https://firebasestorage.googleapis.com/v0/b/toy-tree.appspot.com/o/project4.png?alt=media&token=b4d2dc08-ce02-4a7f-8ad5-1e59edbc819a&_gl=1*10jgrh9*_ga*NzYxODY2MzQ0LjE2ODk5NjcwMDg.*_ga_CW55HF8NVT*MTY5NjA2Nzc2NS41NC4xLjE2OTYwNjgwMjMuNjAuMC4w"
                alt="project3"
                className="w-full h-full object-cover object-top transition-all duration-[5s] ease-linear hover:object-bottom"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-5">Biomed Team Project</h2>
              <p>
                {" "}
                This is Full Stack MERN Team project. This project is Evaluation
                Type so any Instructor create task and any user can apply
                particular task when he apply then they submitted task then
                instructor evaluate the task and give some reword also. User and
                Instructor can communication each other using message and live
                video conversation as well. This project we use Latest
                technology like socket.IO, Firestorage and many more.
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
                  Socket.IO
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Zigocloude
                </span>
              </div>

              <div className="mt-5 flex gap-20 items-center text-xl ">
                <div className="flex items-center gap-2">
                  <Link
                    to="https://github.com/souravh093/biomed-clients"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    Client <FaGithub />
                  </Link>{" "}
                  <Link
                    to="https://github.com/souravh093/biomed-servers"
                    target="_blank"
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

          <div className="grid md:grid-cols-2 items-center gap-10 border p-5 rounded-xl border-gray-700">
            <div className="w-full h-[500px]">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/toy-tree.appspot.com/o/project1.png?alt=media&token=562e87b0-8ea9-4c3c-8a09-3f05c4670a8b&_gl=1*1icusmy*_ga*NzYxODY2MzQ0LjE2ODk5NjcwMDg.*_ga_CW55HF8NVT*MTY5NjA2Nzc2NS41NC4xLjE2OTYwNjgxNjkuMTIuMC4w"
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
                  to="https://musicmaestro-2b4f6.web.app/"
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
                src="https://firebasestorage.googleapis.com/v0/b/vertex-32ce6.appspot.com/o/Screenshot_38.png?alt=media&token=bc21bcde-ed5a-4deb-8763-092c6bc8f296&_gl=1*1qha4bm*_ga*NzYxODY2MzQ0LjE2ODk5NjcwMDg.*_ga_CW55HF8NVT*MTY5NzA0MjE5MC42OS4xLjE2OTcwNDMyMTUuNi4wLjA."
                alt="project2"
                className="w-full h-full object-cover object-top transition-all duration-[5s] ease-linear hover:object-bottom"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-5">Toy Tree</h2>
              <p>
                Vertex is a full-stack MERN project. It is a blog site where
                users can read blogs and also write blogs. The home page shows
                the treading and recent blog. Users can search blogs by title.
                Users can comment on the blog. Users have to log in to write
                blogs and users have a dashboard where user can see his/her
                blogs and also can delete their blogs. Users can see how many
                people read his/her blog. Users can see how many comments on
                his/her blog.
              </p>
              <div className="mt-5 flex flex-wrap gap-5">
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Redux
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  RTK Query
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
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Express.js
                </span>
              </div>

              <div className="mt-5 flex gap-20 items-center text-xl ">
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
        </div>
      </Container>
      <Link
        to="https://github.com/souravh093?tab=repositories"
        target="_blank"
        className="flex items-center justify-center mt-10"
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <button className="bg-[#16203B] py-4 px-10 rounded-lg hover:bg-[#1b2647]">
            Show more
          </button>
        </motion.div>
      </Link>
    </div>
  );
};

export default Works;
