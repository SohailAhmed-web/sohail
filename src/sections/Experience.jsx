import { experience } from '../data/experience';

/* ============================================
   Experience Section
   - Professional work history and experience
   ============================================ */

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Work Experience</h2>
      <p className="section-subtitle">My professional journey</p>

      {/* Experience timeline */}
      <div className="experience-timeline">
        {experience.map((job, i) => (
          <div key={i} className="experience-card">
            <div className="experience-header">
              <h3>{job.position}</h3>
              <span className="duration">{job.duration}</span>
            </div>
            <p className="company">{job.company}</p>
            <p className="description">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
