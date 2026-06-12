import { motion } from "framer-motion";

function About() {
return ( <section id="about" className="section">


  <motion.h2
    className="section-title"
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: false }}
  >
    About Me
  </motion.h2>

  <motion.div
    className="about-card"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.8,
      ease: "easeOut"
    }}
    viewport={{
      once: false,
      amount: 0.3
    }}
  >
    <p>
      I'm a passionate Frontend Developer and
      B.Sc Computer Science Graduate from
      Mumbai University.

      I specialize in building responsive,
      user-friendly and scalable web applications
      using React.js, JavaScript, HTML5 and CSS3.

      During my internship at Techoceanhub,
      I gained practical experience in React,
      Redux Toolkit, REST APIs and Agile development.

      I enjoy solving real-world problems through
      technology and continuously learning modern
      web development practices.
    </p>
  </motion.div>

</section>


);
}

export default About;
