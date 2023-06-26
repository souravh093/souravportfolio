import React from "react";
import Container from "../../../components/Container/Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-5 fixed w-full overflow-hidden">
      <Container>
        <nav className="flex justify-between items-center">
          <div>
            <h2 className="uppercase text-2xl text-gray-100">souravehalder.</h2>
          </div>
          
          <div>
            <ul className="flex gap-10 text-gray-100">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Projects</Link>
              </li>
            </ul>
          </div>

          <button className="bg-[#DAED1A] px-5 py-2 rounded-md hover:bg-[#dae766] transition duration-300 shadow-md hover:text-gray-700">
            Hire me
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
