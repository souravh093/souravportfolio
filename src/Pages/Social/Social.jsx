import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";

const Social = () => {
  const styles = {
    darkButton: {
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
      transition: "box-shadow 0.3s ease",
    },
    darkButtonHover: {
      boxShadow: "0 8px 12px rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <Container>
      <div className="my-10 flex gap-6 justify-between text-gray-200">
        <Link
          style={styles.darkButton}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = styles.darkButtonHover.boxShadow)
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = styles.darkButton.boxShadow)
          }
          className="w-full bg-[#0A1429] border flex items-center justify-center text-2xl py-6 font-bold border-gray-800 rounded-md cursor-pointer hover:shadow-md"
        >
          <div className=" flex items-center gap-2">
            <FaGithub /> Github
          </div>
        </Link>
        <Link
          style={styles.darkButton}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = styles.darkButtonHover.boxShadow)
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = styles.darkButton.boxShadow)
          }
          className="w-full bg-[#0A1429] border flex items-center justify-center text-2xl py-6 font-bold border-gray-800 rounded-md cursor-pointer hover:shadow-md"
        >
          <div className=" flex items-center gap-2">
            <FaLinkedin /> Linkedin
          </div>
        </Link>
        <Link
          style={styles.darkButton}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = styles.darkButtonHover.boxShadow)
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = styles.darkButton.boxShadow)
          }
          className="w-full bg-[#0A1429] border flex items-center justify-center text-2xl py-6 font-bold border-gray-800 rounded-md cursor-pointer hover:shadow-md"
        >
          <div className=" flex items-center gap-2">
            <FaTwitter /> Twitter
          </div>
        </Link>
        <Link
          style={styles.darkButton}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = styles.darkButtonHover.boxShadow)
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = styles.darkButton.boxShadow)
          }
          className="w-full bg-[#0A1429] border flex items-center justify-center text-2xl py-6 font-bold border-gray-800 rounded-md cursor-pointer hover:shadow-md"
        >
          <div className=" flex items-center gap-2">
            <FaFacebookF /> Facebook
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default Social;
