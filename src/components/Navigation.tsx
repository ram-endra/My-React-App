import { useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Journal", href: "#journal" },
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <a className="site-brand" href="#top" aria-label="Morrow home">
        <span className="brand-mark" aria-hidden="true">
          M
        </span>
        <span>My App</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>

      <nav
        className={`primary-navigation${menuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          className="contact-link"
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

export default Navigation;
