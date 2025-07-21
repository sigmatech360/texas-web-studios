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

const LogoDesign = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        leftCol="col-xxl-6 col-lg-7"
        bgImage={logoDesignBanenr}
        title="Iconic Logo Designs For Iconic Brands"
        description="Your Brand’s First Impression Is Your Logo. And We Ensure That You Get It Right! With Iconic Logo Designs That Speak Your Stories For You, We Believe In Creating Identities With Our Custom Logo Designs In California."
        pageName="Services"
      />
      <LatestTechSec
        // className="latestTechLogoSec"
        leftCol="col-lg-5"
        centerCol="col-lg-4"
        rightCol="col-lg-3"
        secTitle="Pick The Logo Style You Love!"
        description="Your Brand Deserves A Logo That Fits Its Voice, Industry, And Audience. Here Are The Main Types We Offer:"
        categoryTitle="THE TYPES:"
        solutionList={[
          { name: "Wordmarks (Text Logos)" },
          { name: "Lettermarks (Initial Logos)" },
          { name: "Brandmarks (Symbol Or Icon Logos)" },
          { name: "Combination Marks (Text + Symbol)" },
          { name: "Emblems (Badge Style Logos)" },
          { name: "Mascot Logos" },
          { name: "Abstract Logos" },
        ]}
        btnText="Explore Our Designs"
        rightP="Our Logo Design Services In Texas Are Made To Match Your Business Identity, Industry Tone, And Customer Appeal. Whether You Prefer Bold Icons Or Clean Text-Based Branding, Our Team Helps You Choose A Logo Style That Communicates Your Message Clearly And Leaves A Lasting Impression. Each Logo Is Unique, Scalable, And Built To Perform Across Digital And Print Platforms."
      />

      <ServiceAboutSec
        className="bgPink"
        // rowClass="flex-row-reverse"
        leftCol="col-lg-7 order-2"
        rightCol="col-lg-5 order-1"
        // secTagClass="blackColor"
        secTag="LOGO DESIGN"
        secTitle={`Logo Design Backed By Skill And The Right Tools`}
        description="Every Logo We Create Starts With A Strategy And The Right Tools To Bring It To Life. We Build Visual Identities That Stand The Test Of Time. Our Professional Logo Designs Are Tailored To Your Industry And Brand Personality. Whether You Need A Fresh Design Or A Complete Rebrand, We’re Equipped To Deliver A Logo That Works Everywhere Your Business Does."
        image={logoServiceAboutImg}
      />

      <section className="logoSinglePortfolio sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="secHead">
                <p className="sec-tag">PORTFOLIO</p>
                <h3 className="secTitle">
                  An Art Gallery Of Our Business Logo Designs That Manifested
                  Success
                </h3>
              </div>
              <div className="logoSinglePortfolioImg">
                <img
                  src={logoSinglePotfolioImg}
                  alt="An Art Gallery Of Our Business Logo Designs That Manifested
                  Success"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyCooseUsSec
        secTag="WHY CHOOSE US"
        secTitle="Logo Qualities That Make Us Your Ideal Choice"
        secDescription="Our Mobile Applications Are Made To Work Smoothly Across Different Platforms; We Add Technologically Enhanced Features That Ensure Cybersecurity And Ensure Your App Works Seamlessly Everywhere."
        image={logoDevWhyChooseImage}
        leftP="We Make Logo Designs For Websites With A Purpose As We Blend Creativity, Strategy, And Brand Psychology To Deliver Results That Stick."
        // leftSubTitle=""
        // btnText=""
        list={[
          {
            image: logoDevWhyChooseIcon1,
            title: "Brand-Aligned Aesthetics",
            description:
              "Every Design Reflects Your Brand’s Voice, Values, And Industry Presence.",
          },
          {
            image: logoDevWhyChooseIcon2,
            title: "Professional Precision",
            description:
              "Clean Lines, Smart Spacing, And Thoughtful Balance Define Every Logo We Deliver.",
          },
          {
            image: logoDevWhyChooseIcon3,
            title: "Color Psychology",
            description:
              "We Choose Colors That Influence Emotion And Create Strong Audience Connections.",
          },
          {
            image: logoDevWhyChooseIcon4,
            title: "Fonts Diversity",
            description:
              "From Bold To Elegant, We Use Font Styles That Match Your Brand's Personality And Tone.",
          },
        ]}
      />

      <PackagesSec
        className="bgPink"
        secTag="PRICING"
        title="Flexible Pricing Packages"
        description="Every Business Has Different Needs, So We Offer Custom Pricing For Each Of Our Services. Our Packages Include Basic, Pro, And Premium, Designed To Match Where You Are And Where You’re Headed. Whether You Are Starting Fresh Or Looking To Scale, You Will Get The Right Solution At The Right Price. So Find The Package That Fits You Best, Or Consult Us For A Custom Package!"
      />
      <TestimonialSec
        className="bgBlack"
        secTag="TESTIMONIALS"
        secTitle="Listen To Our Happy Clients"
        testimonialData={[
          {
            id: 1,
            name: "Sarah Mitchell",
            designation: "Marketing Manager, Brightpath Solutions",
            descrition:
              "Texas Web Studio Built Us A Fast Website. We Are Now Able To Update Our Content Without The Need For Any Developer.",
          },
          {
            id: 2,
            name: "Jason Lee",
            designation: "Founder, Urbannest Interiors",
            descrition:
              "Their CMS Solution Helped Our Team Save Time And Stay In Control. Everything Works Smoothly Across Devices. Highly Recommend!",
          },
          {
            id: 3,
            name: "Jason Lee",
            designation: "Founder, Urbannest Interiors",
            descrition:
              "Their CMS Solution Helped Our Team Save Time And Stay In Control. Everything Works Smoothly Across Devices. Highly Recommend!",
          },
        ]}
      />
      <BlogSec />
    </DefaultLayout>
  );
};

export default LogoDesign;
