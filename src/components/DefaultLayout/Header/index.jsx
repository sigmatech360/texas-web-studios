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
    <Navbar expand="lg" className="mainNavBar bgBlack" data-bs-theme="dark">
      <Container>
        <Link to={"/"} className="navbar-brand">
          <img src={logo} alt="Texas Logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
                  to="/web-design"
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                >
                  Web Design
                </NavDropdown.Item>

                {/* CMS Development & Inner Pages */}
                <div className="nav-subdropdown-wrapper">
                  <NavDropdown.Item
                    as={Link}
                    to="/cms-development"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                  >
                    CMS Development
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
                      to="/ecommerce-development"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                    >
                      Ecommerce Development
                    </NavDropdown.Item>
                     <NavDropdown.Item
                      as={Link}
                      to="/wordpress-development"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                    >
                      Wordpress Development
                    </NavDropdown.Item>
                  </div>
                </div>

                {/* Digital Marketing & Inner Pages */}
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


                {/* Custom Web Development & Inner Pages */}
              <div className="nav-subdropdown-wrapper">
                <NavDropdown.Item
                  as={Link}
                  to="/custom-web-development"
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                >
                  Custom Development
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
                      to="/frontend-development"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                    >
                      Frontend Development
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/backend-development"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                    >
                      Backend Development
                    </NavDropdown.Item>
                  </div>
                </div>
                

                {/* App Development & Inner Pages */}
                <div className="nav-subdropdown-wrapper">
                <NavDropdown.Item
                  as="button"
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                >
                  App Development
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
                      to="/mobile-app-development"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                    >
                      Mobile App Development
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/web-app-development"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                    >
                      Web App Development
                    </NavDropdown.Item>
                 </div>
              </div>

                {/* Hosting & Domain  Inner Pages */}
                <div className="nav-subdropdown-wrapper">
                  <NavDropdown.Item
                    as="button"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Hosting & Domain Services{" "}
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
                      to="/domain-registeration"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                    >
                      Domain Registeration
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/domain-transfer"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                    >
                      Domain Transfer
                    </NavDropdown.Item>
                  </div>
                </div>

                
                {/* Brand Identity  Inner Pages */}
                <div className="nav-subdropdown-wrapper">
                  <NavDropdown.Item
                    as="button"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Brand Identity{" "}
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
                      to="/brand-strategy"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                    >
                      Brand Strategy
                    </NavDropdown.Item>
                     <NavDropdown.Item
                      as={Link}
                      to="/brand-voice"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                    >
                      Brand Voice
                    </NavDropdown.Item>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            {/* Location Pages */}
            <Dropdown id="services-dropdown">
              <Dropdown.Toggle
                as="button"
                className={`custom-toggle nav-link`}
                aria-expanded="false"
              >
                Locations
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="nav-subdropdown-wrapper">
                  <NavDropdown.Item as="button" onClick={(e) => e.stopPropagation()}>
                    Dallas{" "}
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
                      to="/app-development-dallas"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                    >
                      Mobile App Development
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/wordpress-development-dallas"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                    >
                      Wordpress Development
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/react-development-dallas"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                    >
                      Reactjs Development
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/ecommerce-development-dallas"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                    >
                      Ecommerce Development
                    </NavDropdown.Item>
                     <NavDropdown.Item
                      as={Link}
                      to="/domain-registeration-dallas"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                    >
                      Domain Registeration
                    </NavDropdown.Item>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            <NavLink to={"/pricing"} className={`nav-link`}>
              Packages
            </NavLink>
            <NavLink to={"/portfolio"} className={`nav-link`}>
              Portfolio
            </NavLink>
            <NavLink to={"/blog"} className={`nav-link`}>
              Blog
            </NavLink>
            <NavLink to={"/contact"} className={`nav-link contact-navLink`}>
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
