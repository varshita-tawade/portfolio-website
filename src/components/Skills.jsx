function Skills() {

  const skills = [
    "React.js",
    "JavaScript",
    "TypeScript",
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

  return (
    <section id="skills" className="section">

      <h2 className="section-title">
        Technical Skills
      </h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;