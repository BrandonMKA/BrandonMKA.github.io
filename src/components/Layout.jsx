import { NavLink, Outlet } from "react-router-dom";
import { contact } from "../data/siteData";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { href: contact.resume, label: "Résumé", external: true },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  return (
    <>
      <header className="siteHeader">
        <nav className="navbar" aria-label="Primary navigation">
          <NavLink className="brand" to="/">
            <span className="brandName">Brandon Aulac</span>
            <span className="brandRole">Software · Data · Cloud</span>
          </NavLink>

          <div className="navLinks">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="navLink"
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive ? "navLink active" : "navLink"
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}

            <ThemeToggle />
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="siteFooter">
        <div>
          <strong>Brandon Aulac</strong>
          <span>Software · Data · Analytics</span>
        </div>

        <div className="footerLinks">
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={contact.resume} target="_blank" rel="noreferrer">
            Résumé
          </a>
          <a href={`mailto:${contact.email}`}>Email</a>
        </div>
      </footer>
    </>
  );
}
