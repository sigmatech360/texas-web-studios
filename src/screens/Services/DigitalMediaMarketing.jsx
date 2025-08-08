import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import digitalMarketingBanner from "../../assets/images/digitalMarketingBanner.webp";
import LatestTechSec from "../../components/LatestTechSec";

import ServiceAboutSec from "../../components/ServiceAboutSec";
import digitalMarketingServiceAboutImg from "../../assets/images/digitalMarketingServiceAboutImg.webp";

import WhyCooseUsSec from "../../components/WhyCooseUsSec";
import digitakMarketingWhyChooseImage from "../../assets/images/digitakMarketingWhyChooseImage.webp";
import digitalMarketingWhyChooseIcon1 from "../../assets/images/digitalMarketingWhyChooseIcon1.webp";
import digitalMarketingWhyChooseIcon2 from "../../assets/images/digitalMarketingWhyChooseIcon2.webp";
import digitalMarketingWhyChooseIcon3 from "../../assets/images/digitalMarketingWhyChooseIcon3.webp";
import PackagesSec from "../../components/PackagesSec";
import ContactPageContactSec from "../../components/ContactPageContactSec";
import FAQSec from "../../components/FAQSec";
import BookCallSec from "../../components/BookCallSec";
import BlogSec from "../../components/BlogSec";

import digitalMarketingFaqImg from "../../assets/images/digitalMarketingFaqImg.webp";
import ReactHelmet from "../../components/ReactHelmet";
const webUrl = import.meta.env.VITE_WEB_URL;

const testimonialData = [
  {
    title: "What Is Digital Marketing?",
    description:
      "Digital Marketing Promotes Your Brand Online Using Strategies Like SEO, Social Media, and Paid Ads.",
  },
  {
    title: "How Long Does It Take to See Results?",
    description:
      "Typically, Results Start Showing Within 3 to 6 Months, Depending on Your Strategy.",
  },
  {
    title: "Do I Need Both SEO and Paid Ads?",
    description:
      "Yes, Combining Both Gives Faster, Cost-Effective, and Sustainable Growth.",
  },
  {
    title: "Is Digital Marketing Suitable for Small Businesses?",
    description:
      "Absolutely, It’s One of The Most Cost-Effective Ways to Grow Online.",
  },
];

const DigitalMediaMarketing = () => {
  return (
    <>
      <ReactHelmet
        title="Digital Marketing That Grows Brands – Texas Web Studios"
        description="Boost brand growth with digital media marketing from Texas Web Studios. We craft data-driven campaigns across social, search, and display to maximize results."
        // keywords=""
        url={`${webUrl}/digital-media-marketing`}
        // url="https://texaswebstudios.com/digital-media-marketing"
      />
      <DefaultLayout>
        <InnerBanner
          bgImage={digitalMarketingBanner}
          title="Digital Marketing"
          description="Show up exactly where your audience is, with a data-driven digital marketing company in Texas that drives awareness, boosts engagement, and fuels growth."
          pageName="Services"
        />
        <LatestTechSec
          // className="latestTechLogoSec"
          leftCol="col-lg-5"
          centerCol="col-lg-3"
          rightCol="col-lg-4"
          secTitle="Next-Gen Digital Marketing Strategies for Growth"
          description="At Texas Web Studio, we power your campaigns with the most advanced marketing platform in the industry. From real-time analytics to ad performance tracking, our integrated tech stack is built to deliver smarter decisions, deeper insights, and digital marketing strategies in Texas that convert. No guess work, just pure optimization to win."
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
            { name: "Real-Time Analytics" },
            { name: "Targeted Ad Campaigns" },
            { name: "Cross-Platform Tracking" },
            { name: "E-Commerce Optimization" },
            { name: "Advanced SEO Tools" },
            { name: "Automated Reporting" },
            { name: "Conversion Tracking" },
            { name: "ROI Optimization" },
          ]}
          // categoryTitle2="WHAT YOU GET WITH US"
          // solutionList2={[
          //   { name: "Advanced Campaign Execution Built on Social Media Marketing Tools and Platforms." },
          //   { name: "Keyword-Optimized Content Creation to Support Social Media Advertising Campaigns." },
          //   { name: "Integration with Tools to Deliver Top-Tier Social Media Marketing Services." },
          //   { name: "ROI-Focused Automation that Sets Us Apart from Typical Social Media Management Companies." },
          // ]}
          btnText="See Full Tech Stack"
          rightP="Our digital marketing services in Texas combine the power of both organic and paid strategies to give your business the best of both worlds. We use organic methods to optimize the website for speed, responsiveness, and higher Google rankings. Paired with targeted inorganic campaigns like paid ads, you get results very fast."
          // rightP2=""
        />

        <ServiceAboutSec
          className="bgPink"
          // rowClass="flex-row-reverse"
          leftCol="col-lg-6 order-2"
          rightCol="col-lg-6 order-1"
          // secTagClass="blackColor"
          // secTag="CUSTOM WEB DEVELOPMENT"
          secTitle={`Reach More Customers Through Effective Marketing`}
          description="The digital world is moving fast, and so should your strategies. With so much competition around, our digital marketing services in Texas help you stay ahead of your competitors. Using a full-stack approach of organic and inorganic strategies, we create cost-effective yet powerful campaigns that focus on awareness, reach, and conversions to help your business grow in a smarter, more sustainable way."
          // listClass="grid mt-3"
          // list={[
          //   "Audience Targeting",
          //   "Content Planning",
          //   "Creative Campaigns",
          //   "Engagement Boosting",
          //   "Performance Tracking",
          //   "Platform Optimization",
          //   "Paid Ad Management",
          //   "Trend-Based Strategy",
          // ]}
          image={digitalMarketingServiceAboutImg}
        />

        <WhyCooseUsSec
          secTag={<h2 className="sec-tag">WHY CHOOSE US</h2>}
          secTitle={
            <h2 className="secTitle" data-aos="fade-right" data-aos-delay="200">
              All-In-One Digital Marketing for Real Business Growth
            </h2>
          }
          image={digitakMarketingWhyChooseImage}
          leftP="By Addressing The Full Marketing Funnel, We Help Businesses Grow Through Expert Optimization and Targeted Paid Ads, Always Aligned with One Clear Goal: Driving Real, Measurable Success for Our Clients."
          leftSubTitle={
            <h4
              className="whyChooseRightTitle"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Trusted Digital Marketing Agency in Texas
            </h4>
          }
          btnText="Book a Call"
          list={[
            {
              image: digitalMarketingWhyChooseIcon1,
              title: (
                <h3 className="whyChooseListItemTitle">
                  Full-Funnel Marketing Expertise
                </h3>
              ),
              description:
                "From Awareness to Conversion, We Cover Every Stage of The Journey.",
            },
            {
              image: digitalMarketingWhyChooseIcon2,
              title: (
                <h3 className="whyChooseListItemTitle">
                  Strategic Ad & SEO Integration
                </h3>
              ),
              description:
                "Smart Blend of Paid Campaigns and Organic Optimization for Maximum Impact.",
            },
            {
              image: digitalMarketingWhyChooseIcon3,
              title: (
                <h3 className="whyChooseListItemTitle">Results that Matter</h3>
              ),
              description:
                "Focused on Delivering Real, Measurable Growth and Not Just Vanity Metrics.",
            },
            // {
            //   image: customDevWhyChooseIcon4,
            //   title: "Performance Optimization",
            //   description:
            //     "We Optimize Your Website’s Speed, Structure, and Code to Ensure Faster Loading Times, Better User Experience, and Improved Search Engine Performance.",
            // },
          ]}
        />

        {/* <PackagesSec
          className="bgBlack"
          secTag="PRICING"
          title="Flexible Pricing Packages"
          description="Every Business Has Different Needs, so We Offer Custom Pricing for Each of Our Services. Our Packages Include Basic, Pro, and Premium, Designed to Match Where You Are and Where You’re Headed. Whether You Are Starting Fresh or Looking to Scale, You Will Get The Right Solution at The Right Price. So Find The Package that Fits You Best, or Consult Us for a Custom Package!"
        /> */}

        <ContactPageContactSec
          secTag="CONTACT US"
          secTitle="Ready to Unlockgrowth? Let’s Talk"
          description="Explore Our Top Services or Reach Out for a Custom Strategy Built Just for Your Brand."
        />

        <FAQSec
          secTag="FREQUENTLY ASKED QUESTIONS"
          secTitle="We’ve Got All Your Answers"
          testimonials={testimonialData}
          image={digitalMarketingFaqImg}
        />
        <BookCallSec
          title="Start Your Journey to Better Business"
          btnText="Get a Quote"
        />
        <BlogSec />
      </DefaultLayout>
    </>
  );
};

export default DigitalMediaMarketing;
