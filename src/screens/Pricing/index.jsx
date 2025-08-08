import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import pricingBanner from "../../assets/images/pricingBanner.webp";
import pricingLetsWorkTogether from "../../assets/images/pricingLetsWorkTogether.webp";

import pricingSuccessImg1 from "../../assets/images/pricingSuccessImg1.webp";
import pricingSuccessImg2 from "../../assets/images/pricingSuccessImg2.webp";

import PackagesSec from "../../components/PackagesSec";
import { useModal } from "../../context/ModalContext";
import { Link } from "react-router-dom";
import ReactHelmet from "../../components/ReactHelmet";

const secureProcessData = [
  {
    id: 1,
    title: "Multiple Payment Metodhs",
    description:
      "Transactions shouldn’t be a hassle for you; we allow multiple payment options, so nothing becomes an obstacle to a smooth partnership.",
  },
  {
    id: 2,
    title: "Secure Transaction",
    description:
      "Your trust matters to us. That’s why every transaction is protected with enhanced security, because peace of mind should come standard.",
  },
  {
    id: 3,
    title: "Money Back Guarantee",
    description:
      "Not satisfied? No worries. If we don’t deliver what we promise, you’ll get your money back. Simple as that.",
  },
];

const webUrl = import.meta.env.VITE_WEB_URL;

const Pricing = () => {
  const { setShowModal } = useModal();
  const handleOpenChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize(); // or toggle(), or popup()
    } else {
      console.warn("Tawk_API not available yet.");
    }
  };
  return (
    <>
      <ReactHelmet
        title="Affordable Pricing Plans - Texas Web Studios"
        description="Affordable pricing plans for web design, development, SEO, and digital marketing services. Find the right package for your business at Texas Web Studios."
        // keywords=""
        url={`${webUrl}/pricing`}
      />
      <DefaultLayout>
        <InnerBanner
          bgImage={pricingBanner}
          title="Pricing"
          description="Different businesses require different services and different levels of help, which is why we offer diverse packages made to suit your brand's needs."
          pageName="Pricing"
        />

        <PackagesSec
          className="bgWhite"
          secTag="PRICING PLAN"
          title="Flexible Pricing Packages"
          description="Our packages include Basic, Pro, and Premium, designed to match where you are and where you’re headed. Whether you are starting fresh or looking to scale, you will get the right solution at the right price. So find the package that fits you best, or consult us for a custom package!"
        />

        <section className="secureProcess sec-padding ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="secureProcessContent">
                  <p className="sec-tag">SECURE PROCESS</p>
                  <h2
                    className="secTitle"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    Easy to Order, Easy to Pay
                  </h2>
                  <p data-aos="fade-right" data-aos-delay="400">
                    One Website, One Fixed Price, No Hidden Fees. All Service
                    Details Are Included in One Attractive Price, and Certain
                    Bonuses
                  </p>
                </div>
                <div className="secureProcessList">
                  {secureProcessData.map((item, index) => (
                    <div
                      className="secureProcessListItem"
                      key={index}
                      data-aos="fade-right"
                      data-aos-delay={index * 200}
                    >
                      <p className="secureProcessListItemTitle">{item.title}</p>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="secureProcessImages">
                  <div data-aos="fade-left" data-aos-delay="200">
                    <img
                      src={pricingSuccessImg1}
                      className="img-fluid"
                      alt="Img 1"
                    />
                  </div>
                  <div data-aos="fade-left" data-aos-delay="400">
                    <img
                      src={pricingSuccessImg2}
                      className="img-fluid"
                      alt="Img 1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="getStartProjec bgBlack sec-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="getStartProjecContent">
                  <h2
                    className="secTitle"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Get Your Project Started Today
                  </h2>
                  <p data-aos="fade-up" data-aos-delay="400">
                    At Texas Web Studios, we value our clients more than
                    anything else, and one way to keep you satisfied is through
                    transparent communication with affordable prices. Our utmost
                    priority is you and your business. To support our idea of
                    perfection, we hire the best teams, be it web developers,
                    logo designers, social media experts, or SEO pros; our team
                    is unbeaten and only brings success to the table.’
                  </p>

                  <div
                    className="d-flex justify-content-center flex-wrap gap-3 mt-2"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <Link to="/contact" className="theme-btn">
                      Get a Professional Today
                    </Link>
                    <Link
                      to={""}
                      onClick={handleOpenChat}
                      className="theme-btn"
                    >
                      Let’s Talk
                    </Link>
                    {/* <Link to={"/portfolio"} className="theme-btn">
                      View Portfolio
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="letsWorkTogether">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="secHead">
                  <h2
                    className="secTitle"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    Let’s Run a Free Audit on Your Website!
                  </h2>
                  <p data-aos="fade-right" data-aos-delay="400">
                    You are just one step away from making your business a known
                    BRAND! Reach out to us today and let us run a complete audit
                    to identify your pain points and design strategies for
                    future growth!
                  </p>
                  <button
                    className="theme-btn"
                    data-aos="fade-right"
                    data-aos-delay="600"
                    onClick={() => setShowModal(true)}
                  >
                    Contact Us Now!
                  </button>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div
                  className="letsWorkTogetherImgDiv"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <img
                    src={pricingLetsWorkTogether}
                    className="img-fluid"
                    alt="Open Dialogue between Our Team and Our Clients."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};

export default Pricing;
