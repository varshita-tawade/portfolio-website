import { motion } from "framer-motion";

function Education() {
const education = [
{
year: "2026",
degree: "B.Sc Computer Science",
college: "Mumbai University",

},
{
year: "2023",
degree: "Higher Secondary Certificate",
college: "Padmavati Venkatesh Jr. College",
},
{
year: "2021",
degree: "Secondary School Certificate",
college: "Saraswati Vidyalaya",
},
];

return ( <section id="education" className="section">


  <motion.h2
    className="section-title"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false }}
  >
    Education
  </motion.h2>

  <div className="education-grid">

    {education.map((item, index) => (
      <motion.div
        key={index}
        className="education-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.2,
        }}
        viewport={{ once: false }}
      >
        <div className="education-year">
          {item.year}
        </div>

        <h3>{item.degree}</h3>

        <p>{item.college}</p>

        {item.score && (
          <h4>{item.score}</h4>
        )}
      </motion.div>
    ))}

  </div>

</section>


);
}

export default Education;
