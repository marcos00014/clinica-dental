import { useEffect, useState } from "react";
import iconodental from "../../assets/iconodental.png";
import { navLinks } from "../../data";

function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "navbar-scrolled" : ""} ${
        menuOpen ? "navbar-open" : ""
      }`}
    >
      <a href="#" className="logo" onClick={closeMenu}>
        <img src={iconodental} alt="Logo dental" className="navbar-logo" />
        <span>Sonrisa Clara</span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="nav-links">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeSection === link.id ? "active-nav" : ""}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
