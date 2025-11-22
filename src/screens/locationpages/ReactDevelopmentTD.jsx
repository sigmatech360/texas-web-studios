import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import LocationSupport from "../../components/LocationSupport/Index";
import LocationContact from "../../components/LocationContact";
import LocationFaqs from "../../components/LocationFaqs";
import Lightbox from "yet-another-react-lightbox";
import herobanner from "../../assets/images/locationpages/react-development-dallas/herobanner.webp";
import aboutimg from "../../assets/images/locationpages/react-development-dallas/aboutimg.webp";
import gooddesign from "../../assets/images/locationpages/react-development-dallas/gooddesignbg.webp";
import support1 from "../../assets/images/locationpages/wordpress-development-dallas/gurrantee.svg";
import support2 from "../../assets/images/locationpages/wordpress-development-dallas/support.svg";
import support3 from "../../assets/images/locationpages/wordpress-development-dallas/ownership.svg";
import support4 from "../../assets/images/locationpages/wordpress-development-dallas/money.svg";
import support5 from "../../assets/images/locationpages/wordpress-development-dallas/Pentool.svg";
import pixleperfectimg1 from "../../assets/images/locationpages/react-development-dallas/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/react-development-dallas/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/react-development-dallas/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/react-development-dallas/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/react-development-dallas/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/react-development-dallas/portfolio-6.webp";
import ReactHelmet from "../../components/ReactHelmet";

const webUrl = import.meta.env.VITE_WEB_URL;

const ReactDevelopmentTD = () => {
  const webDesignPortfolioData = [
    {
      id: 1,
      image: pixleperfectimg1,
    },
    {
      id: 2,
      image: pixleperfectimg2,
    },
    {
      id: 3,
      image: pixleperfectimg3,
    },
    {
      id: 4,
      image: pixleperfectimg4,
    },
    {
      id: 5,
      image: pixleperfectimg5,
    },
    {
      id: 6,
      image: pixleperfectimg6,
    },
  ];

  const faqsData = [
    {
      header:
        "How long does a React project usually take?",
      content:
        "Most projects take three to eight weeks, depending on complexity, integrations, and features. We share a precise timeline before development starts.",
    },
    {
      header:
        "Can you integrate my existing systems into the new React build?",
      content:
        "Yes, we connect CRMs, APIs, automations, payment systems, dashboards, and custom tools directly into your React architecture.",
    },
    {
      header: "Do you offer support after the React website or app goes live?",
      content:
        "Absolutely, we provide maintenance, updates, performance checks, bug fixes, and new feature enhancements as your business evolves.",
    },
    {
      header: "What makes your React development different from others?",
      content:
        "We focus on scalability, user experience, and performance engineering. Every build is structured, optimized, and designed for long-term growth.",
    },
    {
      header: "Which are the leading React Development companies in USA?",
      content:
        "Some of the leading IT agencies offering React development in USA are United Web Geeks, NY Web Experts, Texas Web Studios, and United Web Developers.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index, imageArray) => {
    const imageList = imageArray.map((item) => ({
      src: item.image,
    }));
    setImages(imageList);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const supportCardsData = [
    { image: support1, title: "Satisfaction Guaranteed, 100%" },
    { image: support2, title: "Round-the-Clock Support" },
    { image: support3, title: "Loading Pages in Milliseconds" },
    { image: support4, title: "54% Increase in Sales" },
    { image: support5, title: "Build for Growth" },
  ];

  return (
    <>
      <ReactHelmet
        title="React Development in Dallas"
        description="Get powerful, scalable React Development in Dallas. We build fast, modern apps designed for growth, performance, and seamless user experiences across every device."
        url={`${webUrl}/react-development-dallas`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={herobanner}
          title="Build Websites That Simply Skip the Loading Part"
          description="Slow websites lose customers. Fast ones build momentum. And when you want real speed, nothing beats a platform that practically skips the loading part. With our expert React development in Dallas, TX, your website becomes sharper, quicker, and far more powerful than anything built on traditional stacks."
          serviceparatwo="High-Speed Interfaces Built for High-Speed Ambitions."
          btntxt="Let’s React Now"
        />

        <WordPressPerformanceSection
          reverse
          minihead="Why Choose Us?"
          miniheadclass="shorttop-head"
          secTitle1="Turning React into Results"
          description="At Texas Web Studios, we treat React like a living system that should think fast, respond instantly, and adapt to your business logic, not the other way around. When you work with a leading React development company in Dallas, TX, you don’t just get components and code. You get a team that understands how React should feel in the hands of your users."
          descriptionspantwo="We combine engineering depth with a strategist’s mind, turning your idea into a product that loads like lightning, scales without drama, and performs exactly the way your business demands. No clutter. No drag. No “just another React build.” Only work built with intention, intelligence, and real-world results."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Us"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Our Goldmine Filled with React Projects"
          secDescription="Anyone can build a React site. But building one that is everything you need? Now that’s where we reign."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Power Your Online Business with React"
          secPara="Build smarter with budget-friendly React native app development in Dallas, TX, packages designed to give your business speed, performance, and undeniable growth power."
          tabsData={dynamictabsData}
        /> */}

        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-7 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={gooddesign}
          title="Why React? Because Speed Isn’t a Feature. It’s a Standard"
          description="All other development frameworks are good, but what happens when your business grows, when you need to add hundreds of products, automate entire workflows, or integrate AI for smarter operations? That’s where React takes the spotlight, scaling effortlessly and performing reliably, which is why businesses choose expert React native development services in Dallas, TX, to future-proof their platforms."
          btntxt="Talk to Our Developers"
        />

        <LocationSupport
          minihead="Best in the Business"
          mainheadSpan="Engineered by the Best."
          mainhead="Approved by Dallas, TX"
          mainPara="Others might be here to compete. We’re Here to Lead!"
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Connect With Us"
          mainhead="Start That React Project Your Business Deserves"
          secPara="Share your vision and let our experts develop a high-performance solution designed for real business growth."
          btntxt="Fill out the Form"
        />

        <LocationFaqs
          minihead="FAQS"
          mainhead="Got Questions? Good. We Prefer Curious Clients"
          secPara="Have questions about React, timelines, or performance? Here are clear answers to help you understand how our React development process works."
          faqsData={faqsData}
        />

        {isOpen && images.length > 0 && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images}
            index={currentIndex}
          />
        )}
      </DefaultLayout>
    </>
  );
};

export default ReactDevelopmentTD;
