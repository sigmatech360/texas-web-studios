import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import pricingBanner from "../../assets/images/pricingBanner.webp";
import pricingLetsWorkTogether from "../../assets/images/pricingLetsWorkTogether.webp";

import pricingSuccessImg1 from "../../assets/images/pricingSuccessImg1.webp";
import pricingSuccessImg2 from "../../assets/images/pricingSuccessImg2.webp";

import PackagesSec from "../../components/PackagesSec";

const secureProcessData = [
  {
    id: 1,
    title: "Multiple Payment Metodhs",
    description:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been.",
  },
  {
    id: 2,
    title: "Secure Transaction",
    description:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been.",
  },
  {
    id: 3,
    title: "Money Back Guarantee",
    description:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been.",
  },
];

const Pricing = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={pricingBanner}
        title="Pricing"
        description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Mi Eget Mauris Pharetra Et Ultrices."
        pageName="Pricing"
      />

      <PackagesSec
        className="bgWhite"
        secTag="PRICING PLAN"
        title="Your Partner For Software Innovation"
        description="While We Understand Our Competitive Landscape, Our Core Value Lies In Providing Quality Over Quantity. Our Transparent And Fair Logo Design Pricing Packages, Including Our Entire Range Of Branding And Web Design Services, Ensure You Find The Perfect Fit For Your Budget And Brand Needs. We Prioritize Dedicated Effort And Personalized Attention, Guaranteeing Unique And Impactful Solutions For Each Brand, Unlike Those Focused On Quantity."
      />

      <section className="secureProcess sec-padding ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="secureProcessContent">
                <p className="sec-tag">SECURE PROCESS</p>
                <h3 className="secTitle">Easy To Order, Easy To Pay</h3>
                <p>
                  One Website, One Fixed Price, No Hidden Fees. All Service
                  Details Are Included In One Attractive Price, And Certain
                  Bonuses
                </p>
              </div>
              <div className="secureProcessList">
                {secureProcessData.map((item, index) => (
                  <div className="secureProcessListItem" key={index}>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
                <div className="secureProcessImages">
                    <div>
                        <img src={pricingSuccessImg1}  className="img-fluid" alt="Img 1" />
                    </div>
                    <div>
                        <img src={pricingSuccessImg2} className="img-fluid"  alt="Img 1" />
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
                <h3 className="secTitle">Get Your Project Started Today</h3>
                <p>
                  At Our Company, We Value Clear Communication Throughout The
                  Design Process. We Encourage You To Talk To Us – Whether You
                  Have A New Project, Questions About Our Logo Pricing, Or Want
                  To Provide Feedback On Our Services. We Know Navigating The
                  World Of Logo Design Can Be Overwhelming. From Free Logo
                  Generators Online To Expensive Design Agencies, There Are
                  Countless Options. But What If You Want A High-Quality And
                  Professional Logo Maker, Without Breaking The Bank?
                </p>
                <p>
                  That's Where We Come In! We Offer A Range Of Transparent Logo
                  Pricing Packages To Fit Any Startup Or Established Business.
                  Unlike A Free Logo Maker, Business Logo Creator, Or A Website
                  That Limits Your Creativity, We Focus On Personalized
                  Attention And Creating A Unique Logo That Perfectly Represents
                  Your Brand.
                </p>
                <div className="d-flex justify-content-center flex-wrap gap-3 mt-5">
                  <button className="theme-btn">Get Started Now</button>
                  <button className="theme-btn">View Portfolio</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="letsWorkTogether">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="secHead">
                <h3 className="secTitle">Let’s Work Together.</h3>
                <p>
                  At Our Company, We Value Communication And Understand The
                  Importance Of Open Dialogue Between Our Team And Our Clients.
                  That's Why We Encourage You To Talk To Us – Whether It's To
                  Discuss A New Project, Ask A Question, Or Provide Feedback On
                  Our Services.
                </p>
                <button className="theme-btn">Get Started Now</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="letsWorkTogetherImgDiv">
                <img
                  src={pricingLetsWorkTogether}
                  className="img-fluid"
                  alt="Open Dialogue Between Our Team And Our Clients."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Pricing;
