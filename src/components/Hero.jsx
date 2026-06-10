import profile from "../assets/profile.jpg";
import cv from "../assets/Varshita_Tawade_CV.pdf";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-left">

        <p className="greeting">
          Hello, I'm
        </p>

        <h1>
          Varshita <span>Tawade</span>
        </h1>

        <h2>
          Frontend Developer
        </h2>

        <p className="hero-description">
          Motivated Frontend Developer and B.Sc Computer Science Graduate
          with hands-on experience in React.js, JavaScript, HTML5, CSS3,
          Redux Toolkit and REST API Integration.

          Passionate about building responsive, scalable and modern
          web applications.
        </p>

        <div className="hero-buttons">

          <a
            href={cv}
            download
            className="btn"
          >
            Download CV
          </a>

          <a
            href="https://www.linkedin.com/in/varshita-tawade-139b23392/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/varshita-tawade"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            GitHub
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="image-container">

          <img
            src={profile}
            alt="Varshita Tawade"
            className="profile-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;