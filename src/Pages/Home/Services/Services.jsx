import React, { useEffect, useRef } from "react";
import Container from "../../../components/Container/Container";
import { SiReactivex } from "react-icons/si";
import { AiFillDashboard, AiOutlineMobile } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { motion, useAnimation } from "framer-motion";

const Services = () => {
  const cardRef = useRef(null);
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [controls]);

  return (
    <div className="mt-20" id="services">
      <Container>
        <div
          className="grid md:grid-cols-5 gap-5 items-center"
        >
          <h2 className="text-gray-100 text-3xl md:text-5xl col-span-2 font-bold">
            Expertise Services! Let is Check it out
          </h2>

          <p className="text-gray-200 col-span-3 text-lg">
            These services cater to businesses seeking frontend solutions that
            leverage the power of React to create exceptional user experiences,
            responsive websites, stunning interfaces, and scalable applications,
            backed by expert consulting and support throughout the development
            process.
          </p>
        </div>
        <div className="grid md:grid-cols-3 mt-16 gap-10">
          <div
          >
            <Tilt className="bg-[#091530] cursor-pointer rounded-md  p-10">
              <div className="bg-[#dbed1a1f] inline-block p-5 rounded-full mb-5">
                <SiReactivex className="text-5xl text-[#DAED1A]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-200">
                Custom React Development Solutions
              </h2>
              <p className="text-gray-200 my-5">
                Crafting tailored React applications that meet your unique
                business needs with precision and elegance.
              </p>
              <Link className="text-gray-200 flex items-center gap-2">
                Learn More <BsArrowUpRight />
              </Link>
            </Tilt>
          </div>

          <div
          >
            <Tilt className="bg-[#091530] cursor-pointer rounded-md  p-10">
              <div className="bg-[#dbed1a1f] inline-block p-5 rounded-full mb-5">
                <AiOutlineMobile className="text-5xl text-[#DAED1A]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-200">
                Responsive React Web Development
              </h2>
              <p className="text-gray-200 my-5">
                Building responsive and mobile-friendly websites using React to
                ensure optimal performance across devices.
              </p>
              <Link className="text-gray-200 flex items-center gap-2">
                Learn More <BsArrowUpRight />
              </Link>
            </Tilt>
          </div>

          <div
          >
            <Tilt className="bg-[#091530] cursor-pointer rounded-md  p-10">
              <div className="bg-[#dbed1a1f] inline-block p-5 rounded-full mb-5">
                <AiFillDashboard className="text-5xl text-[#DAED1A]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-200">
                React Performance Optimization
              </h2>
              <p className="text-gray-200 my-5">
                Optimizing React applications for enhanced speed and
                performance, ensuring smooth interactions and minimal load times
              </p>
              <Link className="text-gray-200 flex items-center gap-2">
                Learn More <BsArrowUpRight />
              </Link>
            </Tilt>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
