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
      college: "Padmavati Venkatesh Jr College",
     
    },
    {
      year: "2021",
      degree: "Secondary School Certificate",
      college: "Saraswati Vidyalaya",
     
    }
  ];

  return (
    <section id="education" className="section">

      <h2 className="section-title">
        Education
      </h2>

      <div className="timeline">

        {education.map((item, index) => (
          <div className="timeline-item" key={index}>

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="year">
                {item.year}
              </span>

              <h3>
                {item.degree}
              </h3>

              <p>
                {item.college}
              </p>

              <h4>
                {item.score}
              </h4>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Education;