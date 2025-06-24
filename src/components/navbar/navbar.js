import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPhone } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setActiveMobileDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMobileDropdown = (dropdownName) => {
    setActiveMobileDropdown(
      activeMobileDropdown === dropdownName ? null : dropdownName
    );
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Left Section - Logo */}
        <div className="navbar-left">
          <Link to="/">
            <img
              src="../images/skystacklogo.png"
              alt="Sky Stack Technologies Logo"
              className="nav-logo"
            />
          </Link>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="navbar-center">
          <div className="navbar-links">
            <NavLink to="/" className="nav-link" exact activeClassName="active">
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className="nav-link"
              activeClassName="active"
            >
              About
            </NavLink>

            <div
              className={`nav-dropdown ${
                activeDropdown === "services" ? "active" : ""
              }`}
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown("services")}
              >
                Services{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="dropdown-icon"
                />
              </button>
              <div className="dropdown-menu">
                <NavLink
                  to="/web-design"
                  className="dropdown-item"
                  activeClassName="active"
                >
                  Web Design
                </NavLink>
                <NavLink
                  to="/web-development"
                  className="dropdown-item"
                  activeClassName="active"
                >
                  Web Development
                </NavLink>
                <NavLink
                  to="/mobile-app-development"
                  className="dropdown-item"
                  activeClassName="active"
                >
                  Mobile App Development
                </NavLink>
                <NavLink
                  to="/crm"
                  className="dropdown-item"
                  activeClassName="active"
                >
                  CRM
                </NavLink>
                <NavLink
                  to="/digital-marketing"
                  className="dropdown-item"
                  activeClassName="active"
                >
                  Digital Marketing
                </NavLink>
              </div>
            </div>

            <div
              className={`nav-dropdown ${
                activeDropdown === "portfolio" ? "active" : ""
              }`}
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown("portfolio")}
              >
                Portfolio{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="dropdown-icon"
                />
              </button>
              <div className="dropdown-menu">
                <NavLink
                  to="/recent-projects"
                  className="dropdown-item"
                  activeClassName="active"
                >
                  Recent Projects
                </NavLink>
                <NavLink
                  to="/case-studies"
                  className="dropdown-item"
                  activeClassName="active"
                >
                  Client Case Studies
                </NavLink>
              </div>
            </div>

            <NavLink to="/blog" className="nav-link" activeClassName="active">
              Blog
            </NavLink>
            <NavLink
              to="/contactus"
              className="nav-link"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Right Section - Phone Button */}
        <div className="navbar-right">
          <a href="tel:1300000000" className="phone-button">
            <FontAwesomeIcon icon={faPhone} className="phone-icon" />
            <span>1300 000 000</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-navbar ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-nav-container">
          <NavLink
            to="/"
            className="mobile-nav-link"
            exact
            activeClassName="active"
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className="mobile-nav-link"
            activeClassName="active"
            onClick={toggleMobileMenu}
          >
            About
          </NavLink>

          <div className="mobile-nav-dropdown">
            <button
              className="mobile-nav-link dropdown-toggle"
              onClick={() => toggleMobileDropdown("services")}
            >
              Services{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`dropdown-icon ${
                  activeMobileDropdown === "services" ? "active" : ""
                }`}
              />
            </button>
            <div
              className={`dropdown-menu ${
                activeMobileDropdown === "services" ? "active" : ""
              }`}
            >
              <NavLink
                to="/web-design"
                className="dropdown-item"
                activeClassName="active"
                onClick={toggleMobileMenu}
              >
                Web Design
              </NavLink>
              <NavLink
                to="/web-development"
                className="dropdown-item"
                activeClassName="active"
                onClick={toggleMobileMenu}
              >
                Web Development
              </NavLink>
              <NavLink
                to="/mobile-app-development"
                className="dropdown-item"
                activeClassName="active"
                onClick={toggleMobileMenu}
              >
                Mobile App Development
              </NavLink>
              <NavLink
                to="/digital-marketing"
                className="dropdown-item"
                activeClassName="active"
                onClick={toggleMobileMenu}
              >
                Digital Marketing
              </NavLink>
            </div>
          </div>

          <div className="mobile-nav-dropdown">
            <button
              className="mobile-nav-link dropdown-toggle"
              onClick={() => toggleMobileDropdown("portfolio")}
            >
              Portfolio{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`dropdown-icon ${
                  activeMobileDropdown === "portfolio" ? "active" : ""
                }`}
              />
            </button>
            <div
              className={`dropdown-menu ${
                activeMobileDropdown === "portfolio" ? "active" : ""
              }`}
            >
              <NavLink
                to="/recent-projects"
                className="dropdown-item"
                activeClassName="active"
                onClick={toggleMobileMenu}
              >
                Recent Projects
              </NavLink>
              <NavLink
                to="/case-studies"
                className="dropdown-item"
                activeClassName="active"
                onClick={toggleMobileMenu}
              >
                Client Case Studies
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/blog"
            className="mobile-nav-link"
            activeClassName="active"
            onClick={toggleMobileMenu}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className="mobile-nav-link"
            activeClassName="active"
            onClick={toggleMobileMenu}
          >
            Contact
          </NavLink>
          <a href="tel:1300000000" className="mobile-phone-button">
            <FontAwesomeIcon icon={faPhone} className="phone-icon" />
            <span>1300 000 000</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
