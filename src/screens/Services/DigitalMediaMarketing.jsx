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

const testimonialData = [
  {
    title: "What Is Digital Marketing?",
    description:
      "Digital Marketing Promotes Your Brand Online Using Strategies Like SEO, Social Media, And Paid Ads.",
  },
  {
    title: "How Long Does It Take To See Results?",
    description:
      "Typically, Results Start Showing Within 3 To 6 Months, Depending On Your Strategy.",
  },
  {
    title: "Do I Need Both SEO And Paid Ads?",
    description:
      "Yes, Combining Both Gives Faster, Cost-Effective, And Sustainable Growth.",
  },
  {
    title: "Is Digital Marketing Suitable For Small Businesses?",
    description:
      "Absolutely, It’s One Of The Most Cost-Effective Ways To Grow Online.",
  },
];


const DigitalMediaMarketing = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={digitalMarketingBanner}
        title="Digital Marketing"
        description="Show Up Exactly Where Your Audience Is, With A Data-Driven Digital Marketing Company In Texas That Drives Awareness, Boosts Engagement, And Fuels Growth."
        pageName="Services"
      />
      <LatestTechSec
        // className="latestTechLogoSec"
        leftCol="col-lg-5"
        centerCol="col-lg-3"
        rightCol="col-lg-4"
        secTitle="Next-Gen Digital Marketing Strategies For Growth"
        description="At Texas Web Studio, We Power Your Campaigns With The Most Advanced Marketing Platform In The Industry. From Real-Time Analytics To Ad Performance Tracking, Our Integrated Tech Stack Is Built To Deliver Smarter Decisions, Deeper Insights, And Digital Marketing Strategies In Texas That Convert. No Guess Work, Just Pure Optimization To Win."
        categoryTitle="SOLUTIONS"
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
        //   { name: "Advanced Campaign Execution Built On Social Media Marketing Tools And Platforms." },
        //   { name: "Keyword-Optimized Content Creation To Support Social Media Advertising Campaigns." },
        //   { name: "Integration With Tools To Deliver Top-Tier Social Media Marketing Services." },
        //   { name: "ROI-Focused Automation That Sets Us Apart From Typical Social Media Management Companies." },
        // ]}
        btnText="See Full Tech Stack"
        rightP="Our Digital Marketing Services In Texas Combine The Power Of Both Organic And Paid Strategies To Give Your Business The Best Of Both Worlds. We Use Organic Methods To Optimize The Website For Speed, Responsiveness, And Higher Google Rankings. Paired With Targeted Inorganic Campaigns Like Paid Ads, You Get Results Very Fast."
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
        description="The Digital World Is Moving Fast, And So Should Your Strategies. With So Much Competition Around, Our Digital Marketing Services In Texas Help You Stay Ahead Of Your Competitors. Using A Full-Stack Approach Of Organic And Inorganic Strategies, We Create Cost-Effective Yet Powerful Campaigns That Focus On Awareness, Reach, And Conversions To Help Your Business Grow In A Smarter, More Sustainable Way."
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
        secTag="WHY CHOOSE US"
        secTitle="All-In-One Digital Marketing For Real Business Growth"
        secDescription="We Help Brands Connect With Their Audience And Fully Utilize The Promise, Power, And Potential Of The Web."
        image={digitakMarketingWhyChooseImage}
        leftP="By Addressing The Full Marketing Funnel, We Help Businesses Grow Through Expert Optimization And Targeted Paid Ads, Always Aligned With One Clear Goal: Driving Real, Measurable Success For Our Clients."
        leftSubTitle="Trusted Digital Marketing Agency In Texas"
        btnText="Book A Call"
        list={[
          {
            image: digitalMarketingWhyChooseIcon1,
            title: "Full-Funnel Marketing Expertise",
            description:
              "From Awareness To Conversion, We Cover Every Stage Of The Journey.",
          },
          {
            image: digitalMarketingWhyChooseIcon2,
            title: "Strategic Ad & SEO Integration",
            description:
              "Smart Blend Of Paid Campaigns And Organic Optimization For Maximum Impact.",
          },
          {
            image: digitalMarketingWhyChooseIcon3,
            title: "Results That Matter",
            description:
              "Focused On Delivering Real, Measurable Growth And Not Just Vanity Metrics.",
          },
          // {
          //   image: customDevWhyChooseIcon4,
          //   title: "Performance Optimization",
          //   description:
          //     "We Optimize Your Website’s Speed, Structure, And Code To Ensure Faster Loading Times, Better User Experience, And Improved Search Engine Performance.",
          // },
        ]}
      />

      <PackagesSec
        className="bgBlack"
        secTag="PRICING"
        title="Flexible Pricing Packages"
        description="Every Business Has Different Needs, So We Offer Custom Pricing For Each Of Our Services. Our Packages Include Basic, Pro, And Premium, Designed To Match Where You Are And Where You’re Headed. Whether You Are Starting Fresh Or Looking To Scale, You Will Get The Right Solution At The Right Price. So Find The Package That Fits You Best, Or Consult Us For A Custom Package!"
      />

      <ContactPageContactSec
        secTag="CONTACT US"
        secTitle="Ready To Unlockgrowth? Let’s Talk"
        description="Explore Our Top Services Or Reach Out For A Custom Strategy Built Just For Your Brand."
      />

      <FAQSec
        secTag="FREQUENTLY ASKED QUESTIONS"
        secTitle="We’ve Got All Your Answers"
        testimonials={testimonialData}
        image={digitalMarketingFaqImg}
      />
      <BookCallSec
        title="Start Your Journey To Better Business"
        btnText="Get A Quote"
      />
      <BlogSec />
    </DefaultLayout>
  );
};

export default DigitalMediaMarketing;
