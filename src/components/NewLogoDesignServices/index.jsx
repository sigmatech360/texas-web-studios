import React from "react";
import Slider from "react-slick";
import serviceicon1 from "../../assets/images/services/logodesign/serviceicon1.svg";
import serviceicon2 from "../../assets/images/services/logodesign/serviceicon2.svg";
import serviceicon3 from "../../assets/images/services/logodesign/serviceicon3.svg";
import service1 from "../../assets/images/services/logodesign/service1.webp";
import service2 from "../../assets/images/services/logodesign/service2.webp";
import service3 from "../../assets/images/services/logodesign/service3.webp";

const NewLogoDesignServices = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576, // mobile portrait
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="logodesign-services-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="logodesign-service-head">
              <h6 className="shorttop-head text-white">Logo Designs</h6>
              <h2 className="mainhead text-white">Our Logo Design Expertise</h2>
              <p>
                Our designers bring every style to life with clarity and
                personality. Some of our most loved logo types include:
              </p>
            </div>
          </div>
        </div>

        {/* Slider Start */}
        <Slider {...settings} className="logodesign-service-slider">
          {/* CARD 1 */}
          <div className="slide-item">
            <div className="logodesign-service-card">
              <div className="logodesign-service-cardhead">
                <h4>Combination Mark Logos</h4>
                <img src={serviceicon1} alt="img" />
              </div>
              <div className="logodesign-service-cardtxt">
                <p>
                  This style merges an iconic symbol with a strong wordmark,
                  giving your brand a visual identity and a typographic anchor.
                  It’s flexible, memorable, and perfect for businesses that want
                  instant recognition across digital and print spaces.
                </p>
              </div>
              <div className="logodesign-service-cardimg">
                <img src={service1} alt="img" />
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="slide-item">
            <div className="logodesign-service-card">
              <div className="logodesign-service-cardhead">
                <h4>Mascot Logos</h4>
                <img src={serviceicon2} alt="img" />
              </div>
              <div className="logodesign-service-cardtxt">
                <p>
                  Mascots create emotional energy. They look fun, approachable,
                  and full of character. This logo style is great for brands
                  that want personality, storytelling potential, and a friendly
                  face that audiences can connect with in their everyday feeds.
                </p>
              </div>
              <div className="logodesign-service-cardimg">
                <img src={service2} alt="img" />
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="slide-item">
            <div className="logodesign-service-card">
              <div className="logodesign-service-cardhead">
                <h4>Wordmark Logos</h4>
                <img src={serviceicon3} alt="img" />
              </div>
              <div className="logodesign-service-cardtxt">
                <p>
                  Wordmarks strip everything down to clean, powerful typography.
                  They rely on well-crafted lettering to express who you are.
                  Perfect for brands that want a crisp identity built on
                  precision, style, and the power of a well-chosen typeface.
                </p>
              </div>
              <div className="logodesign-service-cardimg">
                <img src={service3} alt="img" />
              </div>
            </div>
          </div>

          {/* CARD 1 */}
          <div className="slide-item">
            <div className="logodesign-service-card">
              <div className="logodesign-service-cardhead">
                <h4>Combination Mark Logos</h4>
                <img src={serviceicon1} alt="img" />
              </div>
              <div className="logodesign-service-cardtxt">
                <p>
                  This style merges an iconic symbol with a strong wordmark,
                  giving your brand a visual identity and a typographic anchor.
                  It’s flexible, memorable, and perfect for businesses that want
                  instant recognition across digital and print spaces.
                </p>
              </div>
              <div className="logodesign-service-cardimg">
                <img src={service1} alt="img" />
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="slide-item">
            <div className="logodesign-service-card">
              <div className="logodesign-service-cardhead">
                <h4>Mascot Logos</h4>
                <img src={serviceicon2} alt="img" />
              </div>
              <div className="logodesign-service-cardtxt">
                <p>
                  Mascots create emotional energy. They look fun, approachable,
                  and full of character. This logo style is great for brands
                  that want personality, storytelling potential, and a friendly
                  face that audiences can connect with in their everyday feeds.
                </p>
              </div>
              <div className="logodesign-service-cardimg">
                <img src={service2} alt="img" />
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="slide-item">
            <div className="logodesign-service-card">
              <div className="logodesign-service-cardhead">
                <h4>Wordmark Logos</h4>
                <img src={serviceicon3} alt="img" />
              </div>
              <div className="logodesign-service-cardtxt">
                <p>
                  Wordmarks strip everything down to clean, powerful typography.
                  They rely on well-crafted lettering to express who you are.
                  Perfect for brands that want a crisp identity built on
                  precision, style, and the power of a well-chosen typeface.
                </p>
              </div>
              <div className="logodesign-service-cardimg">
                <img src={service3} alt="img" />
              </div>
            </div>
          </div>
        </Slider>
        {/* Slider End */}
      </div>
    </section>
  );
};

export default NewLogoDesignServices;
