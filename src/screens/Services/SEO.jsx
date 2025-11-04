import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import seoBanner from "../../assets/images/seoBanner.webp";
import LatestTechSec from "../../components/LatestTechSec";

import ServiceAboutSec from "../../components/ServiceAboutSec";
import seoServiceAboutImg from "../../assets/images/seoServiceAboutImg.webp";
import getFoundImg from "../../assets/images/getFoundImg.webp";

import seoBevisibleIcon1 from "../../assets/images/seoBevisibleIcon1.webp";
import seoBevisibleIcon2 from "../../assets/images/seoBevisibleIcon2.webp";
import seoBevisibleIcon3 from "../../assets/images/seoBevisibleIcon3.webp";
import seoBevisibleIcon4 from "../../assets/images/seoBevisibleIcon4.webp";
import seoBevisibleIcon5 from "../../assets/images/seoBevisibleIcon5.webp";

import seoDevWhyChooseImage from "../../assets/images/seoDevWhyChooseImage.webp";
import seoWhyChooseIcon1 from "../../assets/images/seoWhyChooseIcon1.webp";
import seoWhyChooseIcon2 from "../../assets/images/seoWhyChooseIcon2.webp";
import seoWhyChooseIcon3 from "../../assets/images/seoWhyChooseIcon3.webp";
import seoWhyChooseIcon4 from "../../assets/images/seoWhyChooseIcon4.webp";
import WhyCooseUsSec from "../../components/WhyCooseUsSec";

import BlogSec from "../../components/BlogSec";
import TestimonialSec from "../../components/TestimonialSec";
import PackagesSec from "../../components/PackagesSec";
import ReactHelmet from "../../components/ReactHelmet";
import SinglePackageSec from "../../components/PackagesSec/SinglePackageSec";
import { seoPackagesData } from "../../data";

const webUrl = import.meta.env.VITE_WEB_URL;

const beVisibleData = [
  {
    id: 1,
    icon: seoBevisibleIcon1,
    title: "Custom Branding Solutions",
  },
  {
    id: 2,
    icon: seoBevisibleIcon2,
    title: "Security Advancements",
  },
  {
    id: 3,
    icon: seoBevisibleIcon3,
    title: "Designated Project Managers",
  },
  {
    id: 4,
    icon: seoBevisibleIcon4,
    title: "24/7 Design Consultancy",
  },
  {
    id: 5,
    icon: seoBevisibleIcon5,
    title: "Award Winning Designers & Developers",
  },
];

const SEO = () => {
  return (
    <>
      <ReactHelmet
        title="Professional SEO Services in Texas - Boost Your Rankings"
        description="Boost your Google rankings with Texas Web Studios. Our professional SEO services include on-page, off-page, and technical optimization to drive targeted traffic, increase visibility, and generate leads."
        url={`${webUrl}/search-engine-optimization`}
      />

      <DefaultLayout>
        <InnerBanner
          leftCol="col-lg-8"
          bgImage={seoBanner}
          title="Top-Rated Search Engine Optimization Agency in Texas"
          description="At Texas Web Studios, We Ensure that Every Web Page We Create Is Visible on The Search Engines. We Combine Different SEO Strategies to Curate The One that Makes Your Business Rank High!"
          pageName="Services"
        />
        <LatestTechSec
          // className="latestTechLogoSec"
          leftCol="col-xl-5 col-lg-6"
          centerCol="col-xl-4 col-lg-6 mb-lg-4 mb-0"
          rightCol="col-xl-3"
          secTitle="The SEO Tools that Get You Seen."
          description="For Accurate Search Engine Optimisation Marketing in Texas, We Integrate Effective SEO Tools with Our Strategy to Achieve Our Goals."
          categoryTitle={
            <p
              className="categoriesListTitle h3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              SOLUTIONS
            </p>
          }
          solutionList={[
            { name: "Google Search Console" },
            { name: "Google Analytics 4" },
            { name: "Semrush & Ahrefs" },
            { name: "Yoast / Rankmath" },
            { name: "Schema Markup Generators" },
            { name: "Moz Local & Brightlocal" },
            { name: "SEO Reporting" },
          ]}
          btnText="Discover More Services"
          rightP="Our SEO Services Are Driven by Industry-Leading Tools that Help Us Audit Websites, Research Keywords, Analyse Competitors, and Track Performance. Every Decision We Make Is Backed by Insights, Not Assumptions. From Google Search Console to Semrush, Ahrefs, Yoast, and Moz, We Use a Full Suite of Tools to Understand Where Your Site Stands and What It Needs to Rank Higher. These Tools Help Us Build a Custom SEO Strategy Tailored to Your Business, Audience, and Goals."
        />
        <ServiceAboutSec
          className="bgPink"
          // rowClass="flex-row-reverse"
          leftCol="col-xl-7 col-lg-6 order-lg-1 order-2"
          rightCol="col-xl-5 col-lg-6 order-lg-2 order-1"
          // secTagClass="blackColor"
          secTag="SEARCH ENGINE OPTIMIZATION"
          secTitle={`We Crack The Algorithm Demands for Lasting Results!`}
          description="Search Engines Keep Changing, but Your Rankings Shouldn’t. At Texas Web Studios, We Stay Ahead of Every Update, Big or Small. We Study What The Algorithms Reward, Then Tailor Your Off-Page and On-Page SEO Strategy to Meet Those Exact Signals. The Result? Your Site Stays Visible, Relevant, and Trusted, Even Long After The Trends Fade Away."
          image={seoServiceAboutImg}
        />

        <section className="getFoundSeo sec-padding bgBlack">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div
                  className="getFoundSeoImg"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <img
                    src={getFoundImg}
                    alt="Get Found by The Right Audience Across Every Search Engine"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="getFoundSeoContent">
                  <h2
                    className="secTitle"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    Get Found by The Right Audience Across Every Search Engine
                  </h2>
                  <p data-aos="fade-left" data-aos-delay="400">
                    Getting Found Online Isn’t Luck; It’s a Strategy that
                    Requires Critical Thinking and Consistent Efforts. At Texas
                    Web Studios, We Optimize Every Part of Your Website to Help
                    You Climb The Search Ranks and Stay in Front of The Right
                    Audience, Right When They’re Searching.{" "}
                    <span className="redColor">We offer</span>
                  </p>
                  <ul className="packageCardList">
                    {[
                      "Keyword Strategies Based on User Intent.",
                      "Optimized Meta Tags, Titles, and Descriptions.",
                      "Mobile-Friendliness and Fast Web Performance.",
                      "Technical Site Audits and On-Page Improvements.",
                      "Ongoing Performance Tracking and Adjustments.",
                    ].map((item, listIndex) => (
                      <li
                        key={listIndex}
                        data-aos="fade-left"
                        data-aos-delay={listIndex * 150}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="beVisibleIconsData">
                {beVisibleData.map((item, index) => (
                  <div
                    className="beVisibleIconData"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                  >
                    <img src={item.icon} alt={item.title} />
                    <h3 className="beVisibleIconData-title">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <WhyCooseUsSec
          secTag={<h2 className="sec-tag">WHY CHOOSE US</h2>}
          // secTitle="Here’s Why Clients Stick with Us"
          secTitle={
            <h2 className="secTitle" data-aos="fade-right" data-aos-delay="200">
              Here’s Why Clients Stick with Us
            </h2>
          }
          secDescription="Our Seo Agency, Texas, Focuses on What Actually Works. From Understanding Your Audience to Making The Right Technical Moves, Our SEO Process Is Built for Growth, Relevance, and Results that Last Beyond The Latest Trends."
          image={seoDevWhyChooseImage}
          // leftP=""
          leftSubTitle={
            <h3
              className="whyChooseRightTitle"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Witness Higher Rankings with The Right Strategies.
            </h3>
          }
          btnText="Get a Quote"
          list={[
            {
              image: seoWhyChooseIcon1,
              title: (
                <h4 className="whyChooseListItemTitle">Audience Targeting</h4>
              ),
              description:
                "We Study Real Data to Understand Your Ideal Customer and Build SEO Strategies that Speak Directly to Them.",
            },
            {
              image: seoWhyChooseIcon2,
              title: (
                <h4 className="whyChooseListItemTitle">Regular SEO Audits</h4>
              ),
              description:
                "Our Audits Catch Issues Early, Track Progress, and Keep Your Website Aligned with Search Engine Standards.",
            },
            {
              image: seoWhyChooseIcon3,
              title: (
                <h4 className="whyChooseListItemTitle">
                  Schema Markup Integration
                </h4>
              ),
              description:
                "We Add Structured Data to Boost Your Appearance in Rich Results and Improve Search Engine Understanding of Your Content.",
            },
            {
              image: seoWhyChooseIcon4,
              title: (
                <h4 className="whyChooseListItemTitle">Content Optimization</h4>
              ),
              description:
                "We Fine-Tune Every Piece of Content to Rank Better, Engage More Visitors, and Increase Time on Site.",
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
          packagesName={seoPackagesData}
        />
        <TestimonialSec
          className="bgBlack"
          secTag="TESTIMONIALS"
          secTitle={
            <h2 className="secTitle" data-aos="fade-right" data-aos-delay="200">
              Words from Our Clients Who Trust Us.
            </h2>
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

export default SEO;
