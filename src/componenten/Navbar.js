import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stijlen/App.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <Link to="/" className="navbar-brand">
        <img src="../fotos/logo.webp" alt="bigband logo" className="brand-logo" />
      </Link>
      <button
        className={`navbar-toggler hamburger-menu ${menuOpen ? 'open' : ''}`}
        type="button"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item" onClick={closeMenu}>
            <Link to="/" className="nav-link text-center">
              Home
            </Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link to="/Repertoire" className="nav-link text-center">
              Repertoire
            </Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link to="/luisteren" className="nav-link text-center">
              Luisteren
            </Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link to="/referenties" className="nav-link text-center">
              Referenties
            </Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link to="/boekingen/contact" className="nav-link text-center">
              Boekingen/Contact
            </Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link to="/overons" className="nav-link text-center">
              Over Ons
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
