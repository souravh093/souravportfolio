import React, { useEffect, useRef } from "react";
import Container from "../../../components/Container/Container";
import { motion, useAnimation } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const projectRef = useRef(null);
  const controls = useAnimation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ewk3d4z",
        "template_syvxnh8",
        form.current,
        "iU03RD3qHk93jhuvc"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Successfully Email Send");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
    <div id="contact">
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
              Contact With Me
            </h2>
            <p>
              Enhancing User Experiences with Innovative Web Development. Get in
              Touch!
            </p>
          </motion.div>
          <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
            <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="mt-12 flex flex-col gap-8"
              >
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your Name</span>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Enter your name"
                    className="bg-gray-800 py-4 px-6 placeholder-gray-500 text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">
                    Your email
                  </span>
                  <input
                    type="email"
                    name="form_email"
                    placeholder="Enter your email"
                    className="bg-gray-800 py-4 px-6 placeholder-gray-500 text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">
                    Your Message
                  </span>
                  <textarea
                    rows={7}
                    name="message"
                    placeholder="Enter your message"
                    className="bg-gray-800 py-4 px-6 placeholder-gray-500 text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>

                <button
                  type="submit"
                  className="bg-gray-800 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md"
                >
                  Send
                </button>
              </form>
            </div>

            <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
              <Player src="contact.json" loop autoplay />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
