import { services } from '../data/services';

/* ============================================
   About Section
   - Personal introduction and services offered
   ============================================ */

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Crafting digital solutions with passion</p>

      <div className="about-content">
        {/* Personal introduction */}
        <div className="about-text">
          <h3>Hello! I'm Sohail Ahmed</h3>
          <p>
            Software engineer with 2+ years of experience building scalable web
            applications using modern technologies.
          </p>
        </div>

        {/* Services offered */}
        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
