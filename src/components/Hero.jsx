import profile from "../assets/profile.jpeg";
import cv from "../assets/Varshita_Tawade_CV.pdf";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="greeting">
          Hello, I'm
        </p>

        <h1>
          Varshita Tawade
        </h1>

        <h2 className="typing-text">
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "Web Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="hero-description">
          Building modern, responsive, and user-centric web applications
          using React.js, JavaScript, HTML, and CSS.
          Passionate about creating seamless digital experiences and
          continuously improving my development skills.
        </p>

        

<a
  href={cv}
  download
  className="btn"
>
  <FaDownload /> Download CV
</a>

      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="image-container">
          <img
            src={profile}
            alt="Varshita Tawade"
            className="profile-image"
          />
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;