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
        // title=""
        // description=""
        // keywords=""
        url={`${webUrl}/search-engine-optimization`}
        // url="https://texaswebstudios.com/search-engine-optimization"
      />
      <DefaultLayout>
        <InnerBanner
          leftCol="col-lg-8"
          bgImage={seoBanner}
          title="Top-Rated Search Engine Optimization Agency in Texas"
          description="At Texas Web Studios, We Ensure That Every Web Page We Create Is Visible On The Search Engines. We Combine Different SEO Strategies To Curate The One That Makes Your Business Rank High!"
          pageName="Services"
        />
        <LatestTechSec
          // className="latestTechLogoSec"
          leftCol="col-xl-5 col-lg-6"
          centerCol="col-xl-4 col-lg-6 mb-lg-4 mb-0"
          rightCol="col-xl-3"
          secTitle="The SEO Tools That Get You Seen."
          description="For Accurate Search Engine Optimisation Marketing in Texas, We Integrate Effective SEO Tools With Our Strategy To Achieve Our Goals."
          categoryTitle="SOLUTIONS"
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
          rightP="Our SEO Services Are Driven By Industry-Leading Tools That Help Us Audit Websites, Research Keywords, Analyse Competitors, And Track Performance. Every Decision We Make Is Backed By Insights, Not Assumptions. From Google Search Console To Semrush, Ahrefs, Yoast, And Moz, We Use A Full Suite Of Tools To Understand Where Your Site Stands And What It Needs To Rank Higher. These Tools Help Us Build A Custom SEO Strategy Tailored To Your Business, Audience, And Goals."
        />
        <ServiceAboutSec
          className="bgPink"
          // rowClass="flex-row-reverse"
          leftCol="col-xl-7 col-lg-6 order-lg-1 order-2"
          rightCol="col-xl-5 col-lg-6 order-lg-2 order-1"
          // secTagClass="blackColor"
          secTag="SEARCH ENGINE OPTIMIZATION"
          secTitle={`We Crack The Algorithm Demands For Lasting Results!`}
          description="Search Engines Keep Changing, But Your Rankings Shouldn’t. At Texas Web Studios, We Stay Ahead Of Every Update, Big Or Small. We Study What The Algorithms Reward, Then Tailor Your Off-Page And On-Page SEO Strategy To Meet Those Exact Signals. The Result? Your Site Stays Visible, Relevant, And Trusted, Even Long After The Trends Fade Away."
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
                    alt="Get Found By The Right Audience Across Every Search Engine"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="getFoundSeoContent">
                  <h3
                    className="secTitle"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    Get Found By The Right Audience Across Every Search Engine
                  </h3>
                  <p data-aos="fade-left" data-aos-delay="400">
                    Getting Found Online Isn’t Luck; It’s A Strategy That
                    Requires Critical Thinking And Consistent Efforts. At Texas
                    Web Studios, We Optimize Every Part Of Your Website To Help
                    You Climb The Search Ranks And Stay in Front Of The Right
                    Audience, Right When They’re Searching.
                  </p>
                  <ul className="packageCardList">
                    {[
                      "Keyword Strategies Based On User Intent.",
                      "Optimized Meta Tags, Titles, And Descriptions.",
                      "Mobile-Friendliness And Fast Web Performance.",
                      "Technical Site Audits And On-Page Improvements.",
                      "Ongoing Performance Tracking And Adjustments.",
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
                    <h4 className="beVisibleIconData-title">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <WhyCooseUsSec
          secTag="WHY CHOOSE US"
          secTitle="Here’s Why Clients Stick With Us"
          secDescription="Our Seo Agency, Texas, Focuses On What Actually Works. From Understanding Your Audience To Making The Right Technical Moves, Our SEO Process Is Built For Growth, Relevance, And Results That Last Beyond The Latest Trends."
          image={seoDevWhyChooseImage}
          // leftP=""
          leftSubTitle="Witness Higher Rankings With The Right Strategies."
          btnText="Get A Quote"
          list={[
            {
              image: seoWhyChooseIcon1,
              title: "Audience Targeting",
              description:
                "We Study Real Data To Understand Your Ideal Customer And Build SEO Strategies That Speak Directly To Them.",
            },
            {
              image: seoWhyChooseIcon2,
              title: "Regular SEO Audits",
              description:
                "Our Audits Catch Issues Early, Track Progress, And Keep Your Website Aligned With Search Engine Standards.",
            },
            {
              image: seoWhyChooseIcon3,
              title: "Schema Markup Integration",
              description:
                "We Add Structured Data To Boost Your Appearance in Rich Results And Improve Search Engine Understanding Of Your Content.",
            },
            {
              image: seoWhyChooseIcon4,
              title: "Content Optimization",
              description:
                "We Fine-Tune Every Piece Of Content To Rank Better, Engage More Visitors, And Increase Time On Site.",
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
          secTitle="Words From Our Clients Who Trust Us."
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
                "Their CMS Solution Helped Our Team Save Time And Stay in Control. Everything Works Smoothly Across Devices. Highly Recommend!",
            },
            {
              id: 3,
              name: "Jason Lee",
              designation: "Founder, Urbannest Interiors",
              descrition:
                "Their CMS Solution Helped Our Team Save Time And Stay in Control. Everything Works Smoothly Across Devices. Highly Recommend!",
            },
          ]}
        />
        <BlogSec />
      </DefaultLayout>
    </>
  );
};

export default SEO;
