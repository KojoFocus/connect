import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-lg sticky-top">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" className="navbar-brand">
          Connect <span className="text-danger">Pro</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            border: 'none',
            outline: 'none', // This removes the focus outline
          }}
        >
          {menuOpen ? (
            <FaTimes style={{ fontSize: '1.5rem', color: '#F4A261' }} />
          ) : (
            <FaBars style={{ fontSize: '1.5rem', color: '#F4A261' }} />
          )}
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`}
          id="navbarNav"
          style={{ justifyContent: 'flex-end' }}
        >
          <ul className="navbar-nav" style={{
            ...(menuOpen && {
              flexDirection: 'column',
              alignItems: 'flex-end',
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '1rem',
              marginTop: '10px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }),
          }}>
            <NavItem href="/" label="Home" number="01" onClick={handleLinkClick} />
            <NavItem href="#section_2" label="About" number="02" onClick={handleLinkClick} />
            <NavItem href="#section_3" label="Services" number="03" onClick={handleLinkClick} />
            <NavItem href="#section_4" label="Projects" number="04" onClick={handleLinkClick} />
            <NavItem href="#section_5" label="Contact" number="05" onClick={handleLinkClick} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{
  href: string;
  label: string;
  number: string;
  onClick: () => void;
}> = ({ href, label, number, onClick }) => {
  return (
    <li className="nav-item" style={{ width: '100%', textAlign: 'right', padding: '0.5rem 0' }}>
      <Link href={href} className="nav-link click-scroll" onClick={onClick} style={{ color: '#F4A261' }}>
        <small className="small-title" style={{ marginRight: '0.5rem' }}>
          <strong className="text-warning">{number}</strong>
        </small>
        {label}
      </Link>
    </li>
  );
};

export default Navbar;