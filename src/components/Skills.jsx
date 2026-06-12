import { motion } from "framer-motion";

function Skills() {
const skills = [
"React.js",
"JavaScript",
"HTML5",
"CSS3",
"Tailwind CSS",
"Bootstrap",
"Redux Toolkit",
"Context API",
"REST APIs",
"Git",
"GitHub",
"Vite",
"Responsive Design",
"SEO",
"Agile"
];

return ( <section id="skills" className="section">


  <motion.h2
    className="section-title"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
  >
    Technical Skills
  </motion.h2>

  <motion.p
    className="skills-subtitle"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false }}
  >
    Technologies and tools I use to build modern web applications.
  </motion.p>

  <div className="skills-wrapper">
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        className="skill-pill"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: index * 0.04
        }}
        viewport={{ once: false }}
      >
        {skill}
      </motion.div>
    ))}
  </div>

</section>


);
}

export default Skills;
