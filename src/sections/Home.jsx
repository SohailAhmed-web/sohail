/* ============================================
   Home Section (Hero)
   - Main landing section with introduction
   ============================================ */

const Home = () => {
  return (
    <section id="home" className="hero">
      {/* Animated background particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <div className="hero-label">24/7 Available for Freelance</div>
        <h1>Sohail Ahmed</h1>
        <h2>
          Frontend Software Engineer
        </h2>
        <p>
          I’m a Frontend Software Engineer focused on crafting modern, scalable, and high-performance user interfaces. I specialize in building responsive, pixel-perfect, and user-centric web experiences, transforming complex ideas into clean, intuitive, and accessible digital solutions using modern JavaScript frameworks, performance-driven design, and best UI/UX practices.
        </p>

        {/* Call-to-action buttons */}
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">Explore My Work</a>
          <a href="#contact" className="btn btn-secondary">Let's Connect</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
