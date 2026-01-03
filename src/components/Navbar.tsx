import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/navbar.css';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="navbar-logo"
          >
            Portfolio.
          </button>

          {/* Desktop Menu */}
          <ul className="navbar-desktop">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="navbar-menu-button"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`navbar-overlay ${mobileMenuOpen ? 'visible' : ''}`} onClick={() => setMobileMenuOpen(false)} />

      {/* Mobile Menu */}
      <div className={`navbar-mobile ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="navbar-mobile-header">
          <span className="navbar-logo">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)} className="navbar-close-button">
            <X size={24} />
          </button>
        </div>
        <ul className="navbar-mobile-links">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="mobile-link"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
