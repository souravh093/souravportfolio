import React, { useEffect, useRef } from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

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
    <Container>
      <motion.dev
        initial={{ x: -200, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        ref={cardRef}
        className="my-10 flex gap-6 justify-between text-gray-200"
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
          <Link to="/contact" className=" flex items-center gap-2">
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
          <div className=" flex items-center gap-2">
            <FaLinkedin /> Linkedin
          </div>
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
          <div className=" flex items-center gap-2">
            <FaTwitter /> Twitter
          </div>
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
          <div className=" flex items-center gap-2">
            <FaFacebookF /> Facebook
          </div>
        </motion.div>
      </motion.dev>
    </Container>
  );
};

export default Social;
