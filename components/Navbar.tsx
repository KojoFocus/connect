import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-lg sticky-top">
      <div className="container">

        <Link href="" className="navbar-brand">
          Connect <span className="text-danger">Pro</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link click-scroll">
                <small className="small-title">
                  <strong className="text-warning">01</strong>
                </small>{' '}
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#section_2" className="nav-link click-scroll">
                <small className="small-title">
                  <strong className="text-warning">02</strong>
                </small>{' '}
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#section_3" className="nav-link click-scroll">
                <small className="small-title">
                  <strong className="text-warning">03</strong>
                </small>{' '}
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#section_4" className="nav-link click-scroll">
                <small className="small-title">
                  <strong className="text-warning">04</strong>
                </small>{' '}
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#section_5" className="nav-link click-scroll">
                <small className="small-title">
                  <strong className="text-warning">05</strong>
                </small>{' '}
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
