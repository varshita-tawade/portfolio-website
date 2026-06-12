import profile from "../assets/profile.jpeg";
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
         Building modern, responsive, and user-centric web applications using React.js, JavaScript, HTML, and CSS. 
         Passionate about clean design, seamless user experiences, and continuous learning in web development.
        </p>

        <div className="hero-buttons">

          <a
            href={cv}
            download
            className="btn"
          >
            Download CV
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