import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { id: 1, label: "Home", to: "home" },
    { id: 2, label: "About", to: "about" },
    { id: 3, label: "Projects", to: "projects" },
    { id: 4, label: "Skills", to: "skills" },
    { id: 5, label: "Contact", to: "contact" },
  ];

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">Venkata Eswar</div>
        <div className="desktop-links">
          {links.map(({ id, label, to }) => (
            <Link
              key={id}
              to={to}
              smooth
              duration={500}
              className="nav-link"
            >
              {label}
            </Link>
          ))}
        </div>
        <button
          className="menu-button"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {navOpen && (
        <div className="mobile-menu">
          {links.map(({ id, label, to }) => (
            <Link
              key={id}
              to={to}
              smooth
              duration={500}
              onClick={() => setNavOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
