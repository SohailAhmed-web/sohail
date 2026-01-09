import { testimonials } from '../data/testimonials';

/* ============================================
   Testimonials Section
   - Client and colleague feedback
   ============================================ */

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <h2 className="section-title">What People Say</h2>
      <p className="section-subtitle">Kind words from clients and colleagues</p>

      {/* Testimonials cards grid */}
      <div className="testimonials-grid">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="testimonial-card">
            <div className="testimonial-header">
              <span className="testimonial-image">{testimonial.image}</span>
              <div className="testimonial-info">
                <h4>{testimonial.name}</h4>
                <p className="role">{testimonial.role}</p>
              </div>
            </div>
            <p className="feedback">"{testimonial.feedback}"</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
