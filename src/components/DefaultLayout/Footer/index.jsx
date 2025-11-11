import { Link } from "react-router-dom";

import logo from "../../../assets/images/headerLogo.webp";

import facebookAndIcon from "../../../assets/images/facebookAndIcon.webp";
import youtubeAndIcon from "../../../assets/images/youtubeAndIcon.webp";
import behanceAndIcon from "../../../assets/images/behanceAndIcon.webp";
import dribbleAndIcon from "../../../assets/images/dribbleAndIcon.webp";
import twitterAndIcon from "../../../assets/images/twitterAndIcon.webp";
import instagramAndIcon from "../../../assets/images/instagramAndIcon.webp";
import linkedinAndIcon from "../../../assets/images/linkedinAndIcon.webp";
import dmca from "../../../assets/images/footer/DMCA.webp";
import clutch from "../../../assets/images/footer/clutch-icon.png";
import trustPilot from "../../../assets/images/footer/trust-pilot.webp";

import mapIcon from "../../../assets/images/mapIcon.webp";
import phoneIcon from "../../../assets/images/phoneIcon.webp";
import emailIcon from "../../../assets/images/emailIcon.webp";

import "./style.css";
import ObfuscatedEmail from "../../ObfuscatedEmail";
import PhoneLink from "../../PhoneLink";
import { BiLogoZoom } from "react-icons/bi";
import { TbBrandZoom } from "react-icons/tb";
import ZoomLink from "../../ZoomLink";

const Footer = () => {
  const handleOpenChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize(); // or toggle(), or popup()
    } else {
      console.warn("Tawk_API not available yet.");
    }
  };
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
          href="https://www.youtube.com/@TexasWebStudios"
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
          href="https://www.behance.net/texaswebstudioss"
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
        {/* <a
          href="https://www.instagram.com/texaswebstudios/"
          className="footerSocialIcon footerSocialdribble"
          target="_blank"
          aria-label="dribble"
          rel="noopener noreferrer"
        >
          <img
            src={instagramAndIcon}
            alt="dribble"
            width="160"
            height="27"
            loading="lazy"
          />
        </a> */}
        <a
          href="https://www.instagram.com/texaswebstudios/"
          className="footerSocialIcon footerSocialinstagram"
          target="_blank"
          aria-label="dribble"
          rel="noopener noreferrer"
        >
          <img
            src={instagramAndIcon}
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
                  Trusted by Texas, we are here to make your brand witness
                  digital success with smart strategies.
                </p>
                <div className="footerIcons mt-4">
                  {/* <div className="footerIcon">
                    <a href="">
                      <img src={dmca} alt="DMCA" />
                    </a>
                  </div> */}
                  <div className="footerIcon dmca-icon">
                    <a href="https://clutch.co/profile/texas-web-studios">
                      <img src={clutch} alt="DMCA" />
                    </a>
                  </div>
                  <div className="footerIcon crunchBase-icon">
                    <a href="https://www.crunchbase.com/organization/texas-web-studios">
                      cb
                    </a>
                  </div>
                  <div className="footerIcon trustPilot-icon">
                    <a href="https://www.trustpilot.com/review/texaswebstudios.com">
                      <img src={trustPilot} alt="DMCA" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-3 col-md-3 mb-md-0 mb-4">
                  <div className="footer-links">
                    <h5 className="footer-title">Quick Links</h5>
                    <ul className="footer-links">
                      <li>
                        <Link to={"/"}>Home</Link>
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
                    <h5 className="footer-title">Useful Links</h5>
                    <ul className="footer-links">
                      <li>
                        <Link to={"/privacy-policy"}>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to={"/terms-and-condition"}>
                          Terms & Conditions
                        </Link>
                      </li>
                      {/* <li>
                        <Link to={""} onClick={handleOpenChat}>
                          Support
                        </Link>
                      </li> */}
                      {/* <li>
                        <Link to={"/"}>Disclaimer</Link>
                      </li>
                      <li>
                        <Link to={"/"}>FAQ</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-md-0">
                  <div className="footer-links">
                    <h5 className="footer-title">Contact</h5>

                    <div className="officeDetails">
                      <div className="officeDetailItem">
                        <img src={mapIcon} alt="Map Icon" />
                        <p className="officeDetailItemText text-white">
                           1000 Main St, Houston, TX 77002, United States
                        </p>
                      </div>
                      <div className="officeDetailItem">
                        <img src={mapIcon} alt="Map Icon" />
                        <p className="officeDetailItemText text-white">
                         Office 603, 6<sup>th</sup> floor, Business Avenue karachi, pakistan
                        </p>
                      </div>
                      <div className="officeDetailItem">
                        <img src={phoneIcon} alt="Map Icon" />
                        {/* <TbBrandZoom size={24} color="#d41f14" /> */}
                        {/* <PhoneLink
                          phoneNumber="+17139364992"
                          label={"+1 (713) 936-4992"}
                          className="officeDetailItemText text-white"
                        /> */}
                        <ZoomLink
                          zoomLink="https://zoom.us/j/17139364992" // Replace with your actual Zoom link
                          className="officeDetailItemText text-white"
                          label="+1 (713) 936-4992"
                        />
                      </div>
                      <div className="officeDetailItem">
                        <img src={phoneIcon} alt="Map Icon" />
                        {/* <PhoneLink
                          phoneNumber="+13462505428"
                          label={"+1 (346) 250-5428"}
                          className="officeDetailItemText text-white"
                        /> */}
                        <PhoneLink
                          phoneNumber="+13462505428"
                          label={"+1 (346) 250-5428"}
                          className="officeDetailItemText text-white"
                        />
                      </div>

                      <div className="officeDetailItem">
                        <img src={emailIcon} alt="Map Icon" />
                        <ObfuscatedEmail className="officeDetailItemText text-white" />
                      </div>
                    </div>
                    {/* <ul className="footer-links">
                      <li>8 AM - 5 PM , Monday - Saturday</li>
                      <li>8 AM - 5 PM , Monday - Saturday</li>
                    </ul> */}
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
