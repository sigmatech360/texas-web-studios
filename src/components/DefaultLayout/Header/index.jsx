import React from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../../assets/images/headerLogo.webp";

import "./style.css";
import { Dropdown, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="mainNavBar bgBlack" data-bs-theme="dark">
      <Container>
        <Link to={"/"} className="navbar-brand">
          <img src={logo} alt="Texas Logo" />
        </Link>
        <Nav className="ms-auto">
          <NavLink to={"/"} className={`nav-link`}>
            Home
          </NavLink>
          <NavLink to={"/about"} className={`nav-link`}>
            About Us
          </NavLink>
          {/* <NavLink to={"/"} className={`nav-link`}>
            Services
          </NavLink> */}

          <Dropdown id="services-dropdown">
            <Dropdown.Toggle
              as="button"
              className={`custom-toggle nav-link ${
                location.pathname.startsWith("/logo-design") ||
                location.pathname.startsWith("/web-development") ||
                location.pathname.startsWith("/cms-development") ||
                location.pathname.startsWith("/digital-media-marketing") ||
                location.pathname.startsWith("/social-media-marketing") ||
                location.pathname.startsWith("/search-engine-optimization") ||
                location.pathname.startsWith("/custom-web-development") ||
                location.pathname.startsWith("/mobile-app-development")
                  ? "active"
                  : ""
              }`}
              aria-expanded="false"
            >
              Services
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <NavDropdown.Item
                as={Link}
                to="/logo-design"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
              >
                Logo Design
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/web-development"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
              >
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/cms-development"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
              >
                CMS Development
              </NavDropdown.Item>
              <div className="nav-subdropdown-wrapper">
                <NavDropdown.Item
                  as={Link}
                  to="/digital-media-marketing"
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                >
                  Digital Marketing{" "}
                  <span className="submenu-icon d-none d-lg-inline">
                    <FaCaretRight />
                  </span>
                  <span className="submenu-icon d-inline d-lg-none">
                    <FaCaretDown />
                  </span>
                </NavDropdown.Item>
                <div className="nav-subdropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/social-media-marketing"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                  >
                    Social Media Marketing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/search-engine-optimization"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                  >
                    SEO
                  </NavDropdown.Item>
                </div>
              </div>

              <NavDropdown.Item
                as={Link}
                to="/custom-web-development"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
              >
                Custom Development
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/mobile-app-development"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
              >
                Mobile App Development
              </NavDropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <NavLink to={"/pricing"} className={`nav-link`}>
            Packages
          </NavLink>
          <NavLink to={"/portfolio"} className={`nav-link`}>
            Portfolio
          </NavLink>
          <NavLink to={"/contact"} className={`nav-link contact-navLink`}>
            Contact Us
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
