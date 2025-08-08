import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import logoDesignBanenr from "../../assets/images/logoDesignBanenr.webp";
import LatestTechSec from "../../components/LatestTechSec";
import ServiceAboutSec from "../../components/ServiceAboutSec";

import logoServiceAboutImg from "../../assets/images/logoServiceAboutImg.webp";
import PackagesSec from "../../components/PackagesSec";
import TestimonialSec from "../../components/TestimonialSec";
import BlogSec from "../../components/BlogSec";
import WhyCooseUsSec from "../../components/WhyCooseUsSec";

import logoDevWhyChooseImage from "../../assets/images/logoDevWhyChooseImage.webp";
import logoDevWhyChooseIcon1 from "../../assets/images/mobDevWhyChooseIcon1.webp";
import logoDevWhyChooseIcon2 from "../../assets/images/mobDevWhyChooseIcon2.webp";
import logoDevWhyChooseIcon3 from "../../assets/images/mobDevWhyChooseIcon3.webp";
import logoDevWhyChooseIcon4 from "../../assets/images/mobDevWhyChooseIcon4.webp";

import logoSinglePotfolioImg from "../../assets/images/logoSinglePotfolioImg.webp";
import ReactHelmet from "../../components/ReactHelmet";
import SinglePackageSec from "../../components/PackagesSec/SinglePackageSec";
import { logoPackagesData } from "../../data";

const webUrl = import.meta.env.VITE_WEB_URL;

const LogoDesign = () => {
  return (
    <>
      <ReactHelmet
        title="Custom Logo Design Services - Texas Web Studios"
        description="Stand out with a custom logo design service from Texas Web Studios. We create brand-focused logos that capture your identity and leave a lasting impression."
        // keywords=""
        url={`${webUrl}/logo-design`}
        // url="https://texaswebstudios.com/logo-design"
      />
      <DefaultLayout>
        <InnerBanner
          leftCol="col-xxl-6 col-lg-7"
          bgImage={logoDesignBanenr}
          title="Iconic Logo Designs for Iconic Brands"
          description="Your Brand’s First Impression Is Your Logo. and We Ensure that You Get It Right! with Iconic Logo Designs that Speak Your Stories for You, We Believe in Creating Identities with Our Custom Logo Designs in California."
          pageName="Services"
        />
        <LatestTechSec
          // className="latestTechLogoSec"
          leftCol="col-lg-5"
          centerCol="col-lg-4"
          rightCol="col-lg-3"
          secTitle="Pick The Logo Style You Love!"
          description="Your Brand Deserves a Logo that Fits Its Voice, Industry, and Audience. Here Are The Main Types We Offer:"
          categoryTitle={
            <p
              className="categoriesListTitle h3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              THE TYPES:
            </p>
          }
          solutionList={[
            { name: "Wordmarks (Text Logos)" },
            { name: "Lettermarks (Initial Logos)" },
            { name: "Brandmarks (Symbol or Icon Logos)" },
            { name: "Combination Marks (Text + Symbol)" },
            { name: "Emblems (Badge Style Logos)" },
            { name: "Mascot Logos" },
            { name: "Abstract Logos" },
          ]}
          btnText="Explore Our Designs"
          targetSecId="singleLogoPortfolio"
          rightP="Our Logo Design Services in Texas Are Made to Match Your Business Identity, Industry Tone, and Customer Appeal. Whether You Prefer Bold Icons or Clean Text-Based Branding, Our Team Helps You Choose a Logo Style that Communicates Your Message Clearly and Leaves a Lasting Impression. Each Logo Is Unique, Scalable, and Built to Perform Across Digital and Print Platforms."
        />

        <ServiceAboutSec
          className="bgPink"
          // rowClass="flex-row-reverse"
          leftCol="col-lg-7 order-2"
          rightCol="col-lg-5 order-1"
          // secTagClass="blackColor"
          secTag="LOGO DESIGN"
          secTitle={`Logo Design Backed by Skill and The Right Tools`}
          description="Every Logo We Create Starts with a Strategy and The Right Tools to Bring It to Life. We Build Visual Identities that Stand The Test of Time. Our Professional Logo Designs Are Tailored to Your Industry and Brand Personality. Whether You Need a Fresh Design or a Complete Rebrand, We’re Equipped to Deliver a Logo that Works Everywhere Your Business Does."
          image={logoServiceAboutImg}
        />

        <section
          className="logoSinglePortfolio sec-padding"
          id="singleLogoPortfolio"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="secHead">
                  <p className="sec-tag">PORTFOLIO</p>
                  <h2
                    className="secTitle"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    An Art Gallery of Our Business Logo Designs that Manifested
                    Success
                  </h2>
                </div>
                <div
                  className="logoSinglePortfolioImg"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <img
                    src={logoSinglePotfolioImg}
                    alt="An Art Gallery of Our Business Logo Designs that Manifested
                  Success"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyCooseUsSec
          // secTag="WHY CHOOSE US"
          secTag={<p className="sec-tag">WHY CHOOSE US</p>}
          // secTitle="Logo Qualities that Make Us Your Ideal Choice"
          secTitle={
            <h2 className="secTitle" data-aos="fade-right" data-aos-delay="200">
              Logo Qualities that Make Us Your Ideal Choice
            </h2>
          }
          secDescription="Our Mobile Applications Are Made to Work Smoothly Across Different Platforms; We Add Technologically Enhanced Features that Ensure Cybersecurity and Ensure Your App Works Seamlessly Everywhere."
          image={logoDevWhyChooseImage}
          leftP="We Make Logo Designs for Websites with a Purpose As We Blend Creativity, Strategy, and Brand Psychology to Deliver Results that Stick."
          // leftSubTitle={
          //   <h4
          //     className="whyChooseRightTitle"
          //     data-aos="fade-right"
          //     data-aos-delay="400"
          //   >
          //   </h4>
          // }
          // btnText=""
          list={[
            {
              image: logoDevWhyChooseIcon1,
              title: (
                <h3 className="whyChooseListItemTitle">
                  Brand-Aligned Aesthetics
                </h3>
              ),
              description:
                "Every Design Reflects Your Brand’s Voice, Values, and Industry Presence.",
            },
            {
              image: logoDevWhyChooseIcon2,
              title: (
                <h3 className="whyChooseListItemTitle">
                  Professional Precision
                </h3>
              ),
              description:
                "Clean Lines, Smart Spacing, and Thoughtful Balance Define Every Logo We Deliver.",
            },
            {
              image: logoDevWhyChooseIcon3,
              title: (
                <h3 className="whyChooseListItemTitle">Color Psychology</h3>
              ),
              description:
                "We Choose Colors that Influence Emotion and Create Strong Audience Connections.",
            },
            {
              image: logoDevWhyChooseIcon4,
              title: (
                <h3 className="whyChooseListItemTitle">Fonts Diversity</h3>
              ),
              description:
                "From Bold to Elegant, We Use Font Styles that Match Your Brand's Personality and Tone.",
            },
          ]}
        />

        {/* <PackagesSec
          className="bgPink"
          secTag="PRICING"
          title="Flexible Pricing Packages"
          description="Every Business Has Different Needs, so We Offer Custom Pricing for Each of Our Services. Our Packages Include Basic, Pro, and Premium, Designed to Match Where You Are and Where You’re Headed. Whether You Are Starting Fresh or Looking to Scale, You Will Get The Right Solution at The Right Price. So Find The Package that Fits You Best, or Consult Us for a Custom Package!"
        /> */}
        <SinglePackageSec
          className="bgPink"
          secTag="PRICING"
          title="Flexible Pricing Packages"
          description="Every Business Has Different Needs, so We Offer Custom Pricing for Each of Our Services. Our Packages Include Basic, Pro, and Premium, Designed to Match Where You Are and Where You’re Headed. Whether You Are Starting Fresh or Looking to Scale, You Will Get The Right Solution at The Right Price. So Find The Package that Fits You Best, or Consult Us for a Custom Package!"
          packagesName={logoPackagesData}
        />
        <TestimonialSec
          className="bgBlack"
          secTag="TESTIMONIALS"
          secTitle={
            <h3 className="secTitle" data-aos="fade-right" data-aos-delay="200">
              Listen to Our Happy Clients
            </h3>
          }
          testimonialData={[
            {
              id: 1,
              name: "Sarah Mitchell",
              designation: "Marketing Manager, Brightpath Solutions",
              descrition:
                "Texas Web Studio Built Us a Fast Website. We Are Now Able to Update Our Content Without The Need for Any Developer.",
            },
            {
              id: 2,
              name: "Jason Lee",
              designation: "Founder, Urbannest Interiors",
              descrition:
                "Their CMS Solution Helped Our Team Save Time and Stay in Control. Everything Works Smoothly Across Devices. Highly Recommend!",
            },
            {
              id: 3,
              name: "Jason Lee",
              designation: "Founder, Urbannest Interiors",
              descrition:
                "Their CMS Solution Helped Our Team Save Time and Stay in Control. Everything Works Smoothly Across Devices. Highly Recommend!",
            },
          ]}
        />
        <BlogSec />
      </DefaultLayout>
    </>
  );
};

export default LogoDesign;
