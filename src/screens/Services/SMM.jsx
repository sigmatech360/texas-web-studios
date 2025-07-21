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
const testimonialData = [
  {
    title: "How Do You Track Campaign Performance?",
    description:
      "We Use Advanced Tools To Monitor Engagement, Reach, Conversions, And ROI Across All Platforms.",
  },
  {
    title: "Will You Create Content For My Social Media?",
    description:
      "Yes, We Handle Everything From Content Planning To Keyword-Optimized, Scroll-Stopping Posts And Ads.",
  },
  {
    title: "Can I Approve Content Before It Goes Live?",
    description:
      "Yes, We Share Calendars And Previews So You’re Always In Control Of What Goes Out.",
  },
  {
    title: "What Makes Your Social Media Marketing Services Different?",
    description:
      "We Focus On Full-Funnel Strategy, ROI-Driven Automation, And Creative That Actually Converts, Not Just Likes And Follows.",
  },
]; 

const SMM = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        leftCol="col-lg-7"
        // rightCol="col-lg-6"
        bgImage={smmBanner}
        title={`Social <br/> Media Marketing`}
        description="Build Buzz, Grow Engagement, And Turn Followers Into Loyal Customers Through Strategic And Creative Social Media Marketing In Texas."
        pageName="Services"
      />

      <LatestTechSec
        // className="latestTechLogoSec"
        leftCol="col-xxl-5 col-lg-6"
        centerCol="col-xxl-7 col-lg-6"
        rightCol="col-lg-3"
        secTitle="Social Media Marketing That Sparks Conversations"
        description="In Today’s Digital-First World, Having A Strong Presence On Social Platforms Is Not Optional; Rather Essential. The Approach Of Our Social Media Marketing Agency In Texas Is Rooted In Creativity, Data, And Strategy To Help Brands Like Yours Connect With The Right Audience, At The Right Time, On The Right Platform."
        categoryTitle="PLATFORMS"
        solutionList={[
          { name: "Meta Ads" },
          { name: "Google Ads" },
          { name: "Tiktok Ads" },
          { name: "Youtube Ads" },
        ]}
        categoryTitle2="WHAT YOU GET WITH US"
        solutionList2={[
          {
            name: "Advanced Campaign Execution Built On Social Media Marketing Tools And Platforms.",
          },
          {
            name: "Keyword-Optimized Content Creation To Support Social Media Advertising Campaigns.",
          },
          {
            name: "Integration With Tools To Deliver Top-Tier Social Media Marketing Services.",
          },
          {
            name: "ROI-Focused Automation That Sets Us Apart From Typical Social Media Management Companies.",
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
        secTitle={`Get Visible On <br/> The Right Platform`}
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
        secTag="WHY CHOOSE US"
        secTitle="Why Texas Web Studios Is Your Social Media Growth Partner"
        secDescription="From Daily Content To High-Converting Campaigns, We Provide Strategy, Creativity, And Measurable Results."
        image={smmWhyChooseImage}
        leftP="No Brand Can Survive Without A Strong Digital Presence. We Don’t Just Help Our Clients Survive; We Help Them Grow, Scale, And Succeed In Today’s Digital World."
        leftSubTitle="With Us, Here, Create Your Future Brand"
        btnText="Book A Call"
        list={[
          {
            image: customDevWhyChooseIcon1,
            title: "Platform Expertise Across All Channels",
            description:
              "We Manage Ads On Meta, Tiktok, Youtube, And Google Ads, Offering A One-Stop Solution For All.",
          },
          {
            image: customDevWhyChooseIcon2,
            title: "Creative That Converts",
            description:
              "Our Team Knows How To Turn Impressions Into Results Through Strategic Social Media Marketing Services.",
          },
          {
            image: customDevWhyChooseIcon3,
            title: "Performance-Driven",
            description:
              "We Use Data, Testing, And Optimization To Run High-Performing Social Media Advertising Campaigns.",
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
        image={smmFaqImg}
      />
      <BookCallSec
        title="Start Your Journey To Better Business"
        btnText="Get A Quote"
      />
      <BlogSec />
    </DefaultLayout>
  );
};

export default SMM;
