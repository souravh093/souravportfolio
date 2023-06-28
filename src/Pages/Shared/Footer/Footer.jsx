import React from "react";
import Container from "../../../components/Container/Container";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <Container>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Email: souravehalder925@gmail.com</p>
            <p className="text-gray-400 mb-2">Phone: +88 01307628955</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-white text-lg font-semibold mb-4">
              Social Media
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-white text-lg font-semibold mb-4">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-2">
              Subscribe to our newsletter for updates and new projects.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white rounded-l w-full py-2 px-4 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#E5EF0C] hover:bg-[#f2ff00] rounded-r px-4 py-2 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="text-center">
          <p className="text-gray-400">
            &copy; 2023 Sourave. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
