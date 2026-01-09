/* ============================================
   Navbar Component
   - Navigation links, branding, and hamburger menu
   ============================================ */

const Navbar = ({ activeSection, isMenuOpen, setIsMenuOpen, scrolled }) => {
  const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'testimonials', 'contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo/Branding */}
      <div className="logo">SA</div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={activeSection === item ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
