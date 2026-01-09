import { skills } from '../data/skills';

/* ============================================
   Skills Section
   - Technical skills, tools, and expertise
   ============================================ */

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Expertise</h2>
      <p className="section-subtitle">Technologies and tools I work with</p>

      {/* Skills categories grid */}
      <div className="skills-grid">
        {skills.map((skillGroup, i) => (
          <div key={i} className="skills-category">
            <h3>{skillGroup.category}</h3>
            <div className="skills-list">
              {skillGroup.items.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
