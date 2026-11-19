import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Deep-Sky Objects", path: "/deep-sky" },
  { label: "Exoplanets", path: "/exoplanets" },
  { label: "Meteor Showers", path: "/meteors" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Application brand */}
        <Link to="/" className="navbar-brand">
          <span className="brand-icon" aria-hidden="true">
            ✦
          </span>
          Night Sky Explorer
        </Link>

        {/* Navigation links */}
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
