import { projects } from '../data/projects';

/* ============================================
   Projects Section
   - Showcase of featured projects and work
   ============================================ */

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">Some of my best work</p>

      {/* Projects grid display */}
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <span className="project-icon">{project.icon}</span>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
