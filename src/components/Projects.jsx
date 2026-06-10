function Projects() {
  return (
    <section id="projects" className="section">

      <h2 className="section-title">
        Projects
      </h2>

      <div className="projects-grid">

        <div className="project-card">

          <h3>
            Happy Paws – Smart Pet Care Platform
          </h3>

          <p>
            AI-powered pet care platform integrated
            with Google Gemini API.
          </p>

          <ul>
            <li>Google Gemini API</li>
            <li>Pet Service Booking</li>
            <li>Pet Care Blog</li>
            <li>Responsive Design</li>
          </ul>

        </div>

        <div className="project-card">

          <h3>
            Marble & Tiles Inventory Management
          </h3>

          <p>
            Billing and inventory management software
            for stock and customer handling.
          </p>

          <ul>
            <li>Billing System</li>
            <li>Inventory Tracking</li>
            <li>Customer Management</li>
            <li>Sales Management</li>
          </ul>

        </div>

      </div>

    </section>
  );
}

export default Projects;