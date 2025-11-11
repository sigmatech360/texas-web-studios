import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import mobileAppDevBanner from "../../assets/images/locationpages/wordpress-development-dallas/herobanner.webp";
import gooddesign from "../../assets/images/locationpages/wordpress-development-dallas/gooddesignbg.webp";
import support1 from "../../assets/images/locationpages/wordpress-development-dallas/gurrantee.svg";
import support2 from "../../assets/images/locationpages/wordpress-development-dallas/support.svg";
import support3 from "../../assets/images/locationpages/wordpress-development-dallas/ownership.svg";
import support4 from "../../assets/images/locationpages/wordpress-development-dallas/money.svg";
import support5 from "../../assets/images/locationpages/wordpress-development-dallas/Pentool.svg";
import aboutimg from "../../assets/images/locationpages/wordpress-development-dallas/aboutimg.webp";
import PackagesSec from "../../components/PackagesSec";
import LocationSupport from "../../components/LocationSupport/Index";
import LocationContact from "../../components/LocationContact";
import LocationFaqs from "../../components/LocationFaqs";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";

const WordpressDevelopmentTD = () => {

  const faqsData = [
    {
      header:
        "How long does it take to develop a mobile app in Los Angeles, CA?",
      content:
        "The duration depends on the project's complexity, but ideally, a medium-sized app takes between 8 and 16 weeks from design to deployment. For larger apps or ERP solutions, we create a detailed roadmap by breaking the project into sprints. This way, development stays transparent, and you can see your app come to life with every implementation phase clearly demonstrated.",
    },
    {
      header: "What platforms do you specialize in for app development?",
      content:
        "We offer both Android and iOS app development in Los Angeles, CA, along with cross-platform solutions built for speed, scalability, and consistent user experience across devices.",
    },
    {
      header: "Do you offer post-launch app support and maintenance?",
      content:
        "Yes, we believe app maintenance is as vital as good app development, as it keeps the platform fast and reliable! We offer ongoing technical support, updates, and optimization services to ensure your app stays fast, secure, and compatible with the latest operating systems.",
    },
    {
      header:
        "Can you integrate my app with existing business systems or APIs?",
      content:
        "Absolutely, whether it’s CRM, ERP, or custom APIs, our custom mobile app development services in Los Angeles, CA, ensure smooth integration with your existing ecosystem, without any downtime.",
    },
    {
      header:
        "What makes California Web Coders different from other app development companies in Los Angeles?",
      content:
        "We don’t just build apps; we build growth engines. Every decision is made to maximize engagement, retention, and conversions. That’s what makes us more than developers; we’re your strategic tech partners.",
    },
    {
      header: "Do you help with app uploading and publishing on app stores?",
      content:
        "Yes, publishing the app on the App Store and Google Play is part of our process. We handle the entire submission, optimization, and approval steps to ensure your app meets all platform guidelines and goes live smoothly without delays.",
    },
  ];



  const supportCardsData = [
    { image: support1, title: "Satisfaction Guaranteed, 100%" },
    { image: support2, title: "Round-the-Clock Support" },
    { image: support3, title: "Your App, You Own It!" },
    { image: support4, title: "54% Increase in Sales" },
    { image: support5, title: "Build for Growth" },
  ];

  return (
    <>
      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={mobileAppDevBanner}
          title="Mobile Applications that Boost Your Success"
          description="At Texas Web Studios, We Create Fast, User-Friendly Apps for You that Fit Your Goals, Platform, and Audience. Our Mobile App Development Services for Texas Are Designed for Real Results and Easy Use."
          btntxt="Get Your Free Wordpress Estimate"
        />

         <WordPressPerformanceSection
          reverse
          minihead="Why Choose Us"
          miniheadclass="shorttop-head"
          secTitle1="Why Choose"
          secTitle2="Texas Web Studios"
          secTitle3="For WordPress Development?"
          description="Our team combines 20+ years of digital experience with deep WordPress expertise. We deliver websites that not only look great but perform flawlessly — optimised for speed, SEO and conversions. Whether you’re a startup or enterprise, we tailor each site to meet your needs. And we support you beyond launch for ongoing growth."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Get Your Free Wordpress Estimate"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />



        <PackagesSec
          className="bgWhite"
          secTag="PRICING PLAN"
          title="Flexible Pricing Packages"
          description="Our packages include Basic, Pro, and Premium, designed to match where you are and where you’re headed. Whether you are starting fresh or looking to scale, you will get the right solution at the right price. So find the package that fits you best, or consult us for a custom package!"
        />

        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-7 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={gooddesign}
          minhead="Pricing Plans"
          title="WordPress Development Packages"
          description="Our team combines 20+ years of digital experience with deep WordPress expertise. We deliver websites that not only look great but perform flawlessly — optimised for speed, SEO and conversions. Whether you’re a startup or enterprise, we tailor each site to meet your needs. And we support you beyond launch for ongoing growth."
          btntxt="Get A Free Quote Now"
        />

        <LocationSupport
          minihead="No One Better"
          mainheadSpan="Texas Web Studios:"
          mainhead="There’s No One Better"
          mainPara="No more budget issues, get your hands on the most Affordable Website Design Services online."
          supportCards={supportCardsData}
        />

      <LocationContact
        minihead="Contact Us"
        mainhead="Ready To Start Your WordPress Project?"
        secPara="Let’s bring your vision to life. Fill out the form below and we’ll schedule a discovery call to discuss your WordPress site requirements."
      />

      
    
      <LocationFaqs
        minihead="FAQS"
        mainhead="Got Questions? We’ve Got Answers!"
        secPara="Boost your website’s visibility and organic search rankings with our SEO strategies. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
        faqs={faqsData}
      />
      </DefaultLayout>
    </>
  );
};

export default WordpressDevelopmentTD;
