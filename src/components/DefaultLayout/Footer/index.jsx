import { Link } from "react-router-dom";

import logo from "../../../assets/images/headerLogo.webp";

import facebookAndIcon from "../../../assets/images/facebookAndIcon.webp";
import youtubeAndIcon from "../../../assets/images/youtubeAndIcon.webp";
import behanceAndIcon from "../../../assets/images/behanceAndIcon.webp";
import dribbleAndIcon from "../../../assets/images/dribbleAndIcon.webp";
import twitterAndIcon from "../../../assets/images/twitterAndIcon.webp";
import linkedinAndIcon from "../../../assets/images/linkedinAndIcon.webp";

import "./style.css";

const Footer = () => {
  return (
    <>
      <section className="footerSocialIcons">
        <a
          href="https://www.facebook.com/people/Texas-Web-Studios/61560915854148/"
          className="footerSocialIcon footerSocialFacebook"
          target="_blank"
          aria-label="Facebook"
          rel="noopener noreferrer"
        >
          <img
            src={facebookAndIcon}
            alt="Facebook"
            width="160"
            height="27"
            loading="lazy"
          />
        </a>
        <a
          href=""
          className="footerSocialIcon footerSocialYoutube"
          target="_blank"
          aria-label="Youtube"
          rel="noopener noreferrer"
        >
          <img
            src={youtubeAndIcon}
            alt="Youtube"
            width="160"
            height="27"
            loading="lazy"
          />
        </a>
        <a
          href=""
          className="footerSocialIcon footerSocialBehance"
          target="_blank"
          aria-label="Behance"
          rel="noopener noreferrer"
        >
          <img
            src={behanceAndIcon}
            alt="Behance"
            width="160"
            height="27"
            loading="lazy"
          />
        </a>
        <a
          href=""
          className="footerSocialIcon footerSocialdribble"
          target="_blank"
          aria-label="dribble"
          rel="noopener noreferrer"
        >
          <img
            src={dribbleAndIcon}
            alt="dribble"
            width="160"
            height="27"
            loading="lazy"
          />
        </a>
        <a
          href="https://x.com/texaswebstudios"
          className="footerSocialIcon footerSocialTwitter"
          target="_blank"
          aria-label="Twitter"
          rel="noopener noreferrer"
        >
          <img
            src={twitterAndIcon}
            alt="Twitter"
            width="160"
            height="27"
            loading="lazy"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/texas-webs-tudios/"
          className="footerSocialIcon footerSocialLinkedin"
          target="_blank"
          aria-label="Linkedin"
          rel="noopener noreferrer"
        >
          <img src={linkedinAndIcon} alt="Linkedin" />
        </a>
      </section>
      <section className="mainFooter bgBlack">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-lg-0 mb-4">
              <div className="footerAbout">
                <Link to={"/"} className="footerLogo">
                  <img src={logo} alt="Texas Logo" />
                </Link>
                <p>
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And
                  Typesetting Industry. Lorem Ipsum Has Been.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-3 col-md-3 mb-md-0 mb-4">
                  <div className="footer-links">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-links">
                      <li>
                        <Link to={"/about"}>Home</Link>
                      </li>
                      <li>
                        <Link to={"/about"}>About Us</Link>
                      </li>
                      <li>
                        <Link to={"/pricing"}>Pricing</Link>
                      </li>
                      <li>
                        <Link to={"/portfolio"}>Portfolio</Link>
                      </li>
                      <li>
                        <Link to={"/blog"}>Blogs</Link>
                      </li>
                      <li>
                        <Link to={"/contact"}>Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 mb-md-0 mb-4">
                  <div className="footer-links">
                    <h4 className="footer-title">Useful Links</h4>
                    <ul className="footer-links">
                      <li>
                        <Link to={"/privacy-policy"}>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to={"/terms-and-condition"}>
                          Terms & Conditions
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>Disclaimer</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Support</Link>
                      </li>
                      <li>
                        <Link to={"/"}>FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-md-0">
                  <div className="footer-links">
                    <h4 className="footer-title">Work Hours</h4>
                    <ul className="footer-links">
                      <li>8 AM - 5 PM , Monday - Saturday</li>
                      <li>8 AM - 5 PM , Monday - Saturday</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footerCopyright bgBlack">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="footerCopyrightP">
                Copyright © {new Date().getFullYear()}. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
