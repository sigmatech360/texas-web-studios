import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import smmBanner from "../../assets/images/smmBanner.webp";
import WhyCooseUsSec from "../../components/WhyCooseUsSec";
import PackagesSec from "../../components/PackagesSec";
import BlogSec from "../../components/BlogSec";

import ServiceAboutSec from "../../components/ServiceAboutSec";
import smmServiceAboutImg from "../../assets/images/smmServiceAboutImg.webp";

import smmWhyChooseImage from "../../assets/images/smmWhyChooseImage.webp";
import customDevWhyChooseIcon1 from "../../assets/images/customDevWhyChooseIcon1.webp";
import customDevWhyChooseIcon2 from "../../assets/images/customDevWhyChooseIcon2.webp";
import customDevWhyChooseIcon3 from "../../assets/images/customDevWhyChooseIcon3.webp";

import FAQSec from "../../components/FAQSec";
// import customDevWhyChooseIcon4 from "../../assets/images/customDevWhyChooseIcon4.webp";

import smmFaqImg from "../../assets/images/smmFaqImg.webp";
import BookCallSec from "../../components/BookCallSec";
import ContactPageContactSec from "../../components/ContactPageContactSec";
import LatestTechSec from "../../components/LatestTechSec";
import ReactHelmet from "../../components/ReactHelmet";
import SinglePackageSec from "../../components/PackagesSec/SinglePackageSec";
import { smmPackagesData } from "../../data";
const webUrl = import.meta.env.VITE_WEB_URL;

const testimonialData = [
  {
    title: "How Do You Track Campaign Performance?",
    description:
      "We manage campaigns on Meta, TikTok, YouTube, and Google Ads for maximum reach and performance.",
  },
  {
    title: "How do you track campaign performance?",
    description:
      "We use advanced tools to monitor engagement, reach, conversions, and ROI across all platforms.",
  },
  {
    title: "Will you create content for my social media?",
    description:
      "Yes, we handle everything from content planning to keyword-optimized, scroll-stopping posts and ads.",
  },
  {
    title: "Can I approve content before it goes live?",
    description:
      "Yes, we share calendars and previews so you’re always in control of what goes out.",
  },
  {
    title: "What makes your social media marketing services different?",
    description:
      "We focus on full-funnel strategy, ROI-driven automation, and creative that actually converts, not just likes and follows.",
  },
];

const SMM = () => {
  return (
    <>
      <ReactHelmet
        title="Boost Your Brand with SMM – Texas Web Studios"
        description="Maximize your online reach with expert social media marketing services. Texas Web Studios helps brands grow with targeted Facebook and Instagram advertising strategies that deliver real results."
        url={`${webUrl}/social-media-marketing`}
      />
      <DefaultLayout>
        <InnerBanner
          leftCol="col-lg-7"
          // rightCol="col-lg-6"
          bgImage={smmBanner}
          title={`Social <br/> Media Marketing`}
          description="Build Buzz, Grow Engagement, and Turn Followers Into Loyal Customers Through Strategic and Creative Social Media Marketing in Texas."
          pageName="Services"
        />

        <LatestTechSec
          // className="latestTechLogoSec"
          leftCol="col-xxl-5 col-lg-6"
          centerCol="col-xxl-7 col-lg-6"
          rightCol="col-lg-3"
          secTitle="Social Media Marketing that Sparks Conversations"
          description="In Today’s Digital-First World, Having a Strong Presence on Social Platforms Is Not Optional; Rather Essential. The Approach of Our Social Media Marketing Agency in Texas Is Rooted in Creativity, Data, and Strategy to Help Brands Like Yours Connect with The Right Audience, at The Right Time, on The Right Platform."
          categoryTitle={
            <h3
              className="categoriesListTitle h3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              PLATFORMS
            </h3>
          }
          solutionList={[
            { name: "Meta Ads" },
            { name: "Google Ads" },
            { name: "Tiktok Ads" },
            { name: "Youtube Ads" },
          ]}
          categoryTitle2="What You Get by Collaborating with Us"
          solutionList2={[
            {
              name: "Advanced Campaign Execution Built on Social Media Marketing Tools and Platforms.",
            },
            {
              name: "Keyword-Optimized Content Creation to Support Social Media Advertising Campaigns.",
            },
            {
              name: "Integration with Tools to Deliver Top-Tier Social Media Marketing Services.",
            },
            {
              name: "ROI-Focused Automation that Sets Us Apart from Typical Social Media Management Companies.",
            },
          ]}
          btnText="Check Out Our Full Tech Stack"
          // rightP=""
          // rightP2=""
        />

        <ServiceAboutSec
          className="bgPink"
          // rowClass="flex-row-reverse flex-lg-row-reverse"
          leftCol="col-lg-7 order-2"
          rightCol="col-lg-5 order-1"
          // secTagClass="blackColor"
          // secTag="CUSTOM WEB DEVELOPMENT"
          secTitle={`Get Visible on <br/> The Right Platform`}
          description="Connect with the right audience at the right platform through strategic social media marketing in Texas. We use all major social platforms and advanced targeting to make sure your ads reach the right audience, right where they already are, boosting visibility, engagement, and real conversions. Our expert strategies focus on:"
          listClass="grid mt-3"
          list={[
            "Audience Targeting",
            "Content Planning",
            "Creative Campaigns",
            "Engagement Boosting",
            "Performance Tracking",
            "Platform Optimization",
            "Paid Ad Management",
            "Trend-Based Strategy",
          ]}
          image={smmServiceAboutImg}
        />

        <WhyCooseUsSec
          secTag={<h2 className="sec-tag">WHY CHOOSE US</h2>}
          secTitle={
            <h3 className="secTitle" data-aos="fade-right" data-aos-delay="200">
              Why Texas Web Studios Is Your Social Media Growth Partner
            </h3>
          }
          secDescription="From Daily Content to High-Converting Campaigns, We Provide Strategy, Creativity, and Measurable Results."
          image={smmWhyChooseImage}
          leftP="No Brand Can Survive Without a Strong Digital Presence. We Don’t Just Help Our Clients Survive; We Help Them Grow, Scale, and Succeed in Today’s Digital World."
          leftSubTitle={
            <h4
              className="whyChooseRightTitle"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              With Us, Here, Create Your Future Brand
            </h4>
          }
          btnText="Book a Call"
          list={[
            {
              image: customDevWhyChooseIcon1,
              title: (
                <p className="whyChooseListItemTitle">
                  Platform Expertise Across All Channels
                </p>
              ),
              description:
                "We Manage Ads on Meta, Tiktok, Youtube, and Google Ads, Offering a One-Stop Solution for All.",
            },
            {
              image: customDevWhyChooseIcon2,
              title: (
                <p className="whyChooseListItemTitle">Creative that Converts</p>
              ),
              description:
                "Our Team Knows How to Turn Impressions Into Results Through Strategic Social Media Marketing Services.",
            },
            {
              image: customDevWhyChooseIcon3,
              title: (
                <p className="whyChooseListItemTitle">Performance-Driven</p>
              ),
              description:
                "We Use Data, Testing, and Optimization to Run High-Performing Social Media Advertising Campaigns.",
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
          description="Every business has different needs, so we offer custom pricing for each of our services. Our packages include Basic, Pro, and Premium, designed to match where you are and where you’re headed. Whether you are starting fresh or looking to scale, you will get the right solution at the right price. So find the package that fits you best, or consult us for a custom package!"
        /> */}
        <SinglePackageSec
          className="bgBlack"
          secTag="PRICING"
          title="Flexible Pricing Packages"
          description="Every business has different needs, so we offer custom pricing for each of our services. Our packages include Basic, Pro, and Premium, designed to match where you are and where you’re headed. Whether you are starting fresh or looking to scale, you will get the right solution at the right price. So find the package that fits you best, or consult us for a custom package!"
          packagesName={smmPackagesData}
        />
        <ContactPageContactSec
          secTag="CONTACT US"
          secTitle="Ready to Unlock Growth? Let’s Talk"
          description="Explore our top services or reach out for a custom strategy built just for your brand."
        />
        <FAQSec
          secTag="FREQUENTLY ASKED QUESTIONS"
          secTitle="We’ve Got All Your Answers"
          testimonials={testimonialData}
          image={smmFaqImg}
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

export default SMM;
