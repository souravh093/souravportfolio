import React, { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import logo from '../../../assets/logo.svg';


const Header = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackground(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header
        className={`py-5 fixed w-full overflow-hidden z-40 ${
          showBackground ? "backdrop-filter backdrop-blur-lg" : ""
        }`}
      >
        <Container>
          <nav className="flex justify-between items-center">
            <div>
              <ScrollLink
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                to="home"
                className="uppercase cursor-pointer flex items-center gap-3 text-2xl text-gray-100"
              >
                <img width={50} src={logo} alt="logo" />
                <h2>Sourave.</h2>
              </ScrollLink>
            </div>

            <div className="md:block hidden">
              <ul className="flex gap-10 text-gray-100">
                <li>
                  <RouterLink to="/">Home</RouterLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                    to="services"
                  >
                    Services
                  </ScrollLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                    to="resume"
                  >
                    Resume
                  </ScrollLink>
                </li>
                <li>
                  <RouterLink to="/works">Projects</RouterLink>
                </li>
              </ul>
            </div>

            <ScrollLink
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              to="contact"
              className="bg-[#DAED1A] hidden md:block cursor-pointer px-5 py-2 rounded-md hover:bg-[#dae766] transition duration-300 shadow-md hover:text-gray-700"
            >
              Hire me
            </ScrollLink>

            <button
              className="md:hidden cursor-pointer block"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? (
                <div className="text-gray-100 text-3xl border border-gray-700 rounded-full p-2">
                  <MdClose />
                </div>
              ) : (
                <div className="text-gray-100 text-3xl border border-gray-700 rounded-full p-2">
                  <FaBars />
                </div>
              )}
            </button>
          </nav>
        </Container>
      </header>
      {toggle && (
        <div className="fixed w-full md:hidden z-50">
          <div className="absolute w-full left-0 top-[86px] bg-[#091530] p-3 border border-gray-700 shadow-md rounded-md">
            <div className="md:hidden block">
              <ul className="flex flex-col gap-1 mb-5 text-center text-gray-100">
                <li>
                  <RouterLink to="/">Home</RouterLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                    to="services"
                  >
                    Services
                  </ScrollLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                    to="resume"
                  >
                    Resume
                  </ScrollLink>
                </li>
                <li>
                  <RouterLink to="/works">Projects</RouterLink>
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <ScrollLink
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                to="contact"
                className="bg-[#DAED1A] md:hidden inline-block cursor-pointer px-5 py-2 rounded-md hover:bg-[#dae766] transition duration-300 shadow-md hover:text-gray-700"
              >
                Hire me
              </ScrollLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
