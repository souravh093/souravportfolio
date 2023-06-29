import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      <div
        className="my-10 grid grid-cols-1 gap-5 md:flex md:gap-6 justify-between text-gray-200"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          style={styles.darkButton}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = styles.darkButtonHover.boxShadow)
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = styles.darkButton.boxShadow)
          }
          className="w-full bg-[#0A1429] border flex items-center justify-center text-2xl py-6 font-bold border-gray-800 rounded-md cursor-pointer hover:shadow-md"
        >
          <Link to="https://github.com/souravh093" target="_blank" className=" flex items-center gap-2">
            <FaGithub /> Github
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          style={styles.darkButton}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = styles.darkButtonHover.boxShadow)
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = styles.darkButton.boxShadow)
          }
          className="w-full bg-[#0A1429] border flex items-center justify-center text-2xl py-6 font-bold border-gray-800 rounded-md cursor-pointer hover:shadow-md"
        >
          <Link to="https://www.linkedin.com/in/sourave-halder-86a360178/" target="_blank" className=" flex items-center gap-2">
            <FaLinkedin /> Linkedin
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          style={styles.darkButton}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = styles.darkButtonHover.boxShadow)
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = styles.darkButton.boxShadow)
          }
          className="w-full bg-[#0A1429] border flex items-center justify-center text-2xl py-6 font-bold border-gray-800 rounded-md cursor-pointer hover:shadow-md"
        >
          <Link to="https://twitter.com/SouraveWeb" target="_blank" className=" flex items-center gap-2">
            <FaTwitter /> Twitter
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          style={styles.darkButton}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = styles.darkButtonHover.boxShadow)
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = styles.darkButton.boxShadow)
          }
          className="w-full bg-[#0A1429] border flex items-center justify-center text-2xl py-6 font-bold border-gray-800 rounded-md cursor-pointer hover:shadow-md"
        >
          <Link to="https://www.facebook.com/profile.php?id=100012269386584" target="_blank" className=" flex items-center gap-2">
            <FaFacebookF /> Facebook
          </Link>
        </motion.div>
      </div>
    </Container>
  );
};

export default Social;
