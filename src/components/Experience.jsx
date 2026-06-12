import { motion } from "framer-motion";

function Experience() {
return ( <section id="experience" className="section">


  <motion.h2
    className="section-title"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false }}
  >
    Experience
  </motion.h2>

  <motion.div
    className="experience-card"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: false }}
  >

    <div className="experience-header">

      <div>
        <h3>Frontend Web Developer Intern</h3>
        <h4>Techoceanhub</h4>
      </div>

      <span className="experience-date">
        Mar 2026 – May 2026
      </span>

    </div>

    <ul>
      <li>Developed responsive user interfaces using React.js.</li>
      <li>Built reusable React components for scalability.</li>
      <li>Implemented Redux Toolkit and Context API.</li>
      <li>Integrated REST APIs for dynamic data handling.</li>
      <li>Optimized website performance and responsiveness.</li>
      <li>Collaborated with developers using Agile methodology.</li>
    </ul>

  </motion.div>

</section>


);
}

export default Experience;
