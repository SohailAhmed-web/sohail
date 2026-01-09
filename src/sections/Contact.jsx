/* ============================================
   Contact Section
   - Contact form and contact information
   ============================================ */

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Let's discuss your next project</p>

      <div className="contact-content">
        {/* Contact form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Subject" 
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Your Message" 
              rows="5" 
              required 
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

        {/* Contact information */}
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div>
              <h4>Email</h4>
              <p>veesarak@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <h4>Location</h4>
              <p>Sukkur, Pakistan</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💼</span>
            <div>
              <h4>LinkedIn</h4>
              <p>https://www.linkedin.com/in/sohail-veesar-143744360/</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;