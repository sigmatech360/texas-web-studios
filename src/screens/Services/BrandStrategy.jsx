import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import herobanner from "../../assets/images/services/brandstrategy/herobanner.webp";
import innerimg from "../../assets/images/services/brandstrategy/herobanner-inner-img.webp";
import aboutimg from "../../assets/images/services/brandstrategy/aboutimg.webp";
import chooseimg from "../../assets/images/services/brandstrategy/chooseimg.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import BookCallSec from "../../components/BookCallSec";
import LocationContact from "../../components/LocationContact";
import BlogSec from "../../components/BlogSec";
import BrandStrategyService from "../../components/BrandStrategyService";

const BrandStrategy = () => {



  return (
    <>
      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner domain-registeration-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={herobanner}
          bannerImg={innerimg}
          title="Build a Brand that Turns Heads and Wins Hearts!"
          description="At Texas Web Studios, we believe great brands don’t just sell; instead, they connect. Our brand strategy services in Texas help you understand what makes your business truly special and transform it into a story your audience can’t ignore. From positioning and messaging to identity and experience, we build brands that leave a mark."
          btntxt="Schedule Your Strategy Call"
        />

        <WordPressPerformanceSection
          reverse
          minihead="Why Strategy Matters"
          miniheadclass="shorttop-head"
          secTitle1="Your Brand is More than a Business,"
          secTitle2="It’s a Living Experience"
          description="Every successful brand starts with a solid strategy. Without one, it’s just noise. As a leading brand strategy agency in Texas, we dig deeper than surface‑level visuals. We understand your purpose, your market, and the emotions that drive your customers towards your brand. We turn insights into action plans and design brands that people trust, remember, and advocate for."
          descriptiontwo="Whether you’re building from scratch or reimagining your identity, we help you define your story, your tone, and your space in the market, all with clarity and confidence."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Discover How We Do It"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn"
        />

        <BrandStrategyService />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection domain-register-choose domain-unique-sec"
          miniheadclass="shorttop-head"
          minihead="At Texas Web Studios"
          secTitle1="Because Your Brand Deserves"
          secTitle2="A Unique Domain"
          description="Our goal is to make domain registration in Texas simple and accessible for every growing business. For your convenience, we have hired professionals who provide fast set-up, use proficient tools to give you a smooth experience, and offer affordability so that no hustling business hesitates before reaching out to us. "
          whyChooseList={[
            "Instant Domain Activation",
            "24/7 Expert Support",
            "Transparent Pricing",
            "Easy Renewals & Transfers",
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Professionals"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <BookCallSec
          title="Let’s Discuss Your Business Goals"
          btnText="Book a Call"
        />

        <LocationContact
          secClass="ecommerce-contact-sec"
          minihead="Contact Us"
          mainhead="Let’s Get Your Domain Registered Today"
          secPara="Got questions or need expert help choosing your domain? Reach out now, and our team will happily guide you every step."
          btntxt="Send Message"
        />

        <BlogSec />
      </DefaultLayout>
    </>
  );
};

export default BrandStrategy;
