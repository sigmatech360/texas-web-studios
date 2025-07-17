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
          <img src={facebookAndIcon} alt="Facebook" />
        </a>
        <a
          href=""
          className="footerSocialIcon footerSocialYoutube"
          aria-label="Youtube"
          rel="noopener noreferrer"
        >
          <img src={youtubeAndIcon} alt="Youtube" />
        </a>
        <a
          href=""
          className="footerSocialIcon footerSocialBehance"
          aria-label="Behance"
          rel="noopener noreferrer"
        >
          <img src={behanceAndIcon} alt="Behance" />
        </a>
        <a
          href=""
          className="footerSocialIcon footerSocialdribble"
          aria-label="dribble"
          rel="noopener noreferrer"
        >
          <img src={dribbleAndIcon} alt="dribble" />
        </a>
        <a
          href="https://x.com/texaswebstudios"
          className="footerSocialIcon footerSocialTwitter"
          target="_blank"
          aria-label="Twitter"
          rel="noopener noreferrer"
        >
          <img src={twitterAndIcon} alt="Twitter" />
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
            <div className="col-lg-4">
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
                <div className="col-lg-3">
                  <div className="footer-links">
                    <h6 className="footer-title">Quick Links</h6>
                    <ul className="footer-links">
                      <li>
                        <Link to={"/"}>About Us</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Services</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Cases</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Pricing</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footer-links">
                    <h6 className="footer-title">Useful Links</h6>
                    <ul className="footer-links">
                      <li>
                        <Link to={"/"}>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Terms & Conditions</Link>
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
                <div className="col-lg-6">
                  <div className="footer-links">
                    <h6 className="footer-title">Work Hours</h6>
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
                Copyright © 2024. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
