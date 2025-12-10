import React, { useState } from 'react'
import ReactHelmet from '../../components/ReactHelmet';
import DefaultLayout from '../../components/DefaultLayout';
import InnerBanner from '../../components/InnerBanner';
import WordPressPerformanceSection from '../../components/WordPressPerformanceSection';
import PixelPerfectSec from '../../components/PixelPerfectSec';
import LocationSupport from '../../components/LocationSupport/Index';
import LocationContact from '../../components/LocationContact';
import LocationFaqs from '../../components/LocationFaqs';
import Lightbox from 'yet-another-react-lightbox';
import mobileAppDevBanner from "../../assets/images/locationpages/angular-development-dallas/herobanner.webp";
import gooddesign from "../../assets/images/locationpages/angular-development-dallas/gooddesignbg.webp";
import support1 from "../../assets/images/locationpages/wordpress-development-dallas/gurrantee.svg";
import support2 from "../../assets/images/locationpages/wordpress-development-dallas/support.svg";
import support3 from "../../assets/images/locationpages/wordpress-development-dallas/ownership.svg";
import support4 from "../../assets/images/locationpages/wordpress-development-dallas/money.svg";
import support5 from "../../assets/images/locationpages/wordpress-development-dallas/Pentool.svg";
import aboutimg from "../../assets/images/locationpages/angular-development-dallas/aboutimg.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/angular-development-dallas/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/angular-development-dallas/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/angular-development-dallas/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/angular-development-dallas/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/angular-development-dallas/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/angular-development-dallas/portfolio-6.webp";


const webUrl = import.meta.env.VITE_WEB_URL;


const AngularDevelopmentTD = () => {

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
          "Why is Angular ideal for complex builds?",
        content:
          "Angular offers consistency, structure, and the ability to handle large feature sets without slowing down.",
      },
      {
        header: " Is Angular good for fast loading apps?",
        content:
          "Yes, Angular keeps interfaces responsive even under heavy functionality.",
      },
      {
        header: "Can Angular support both small and large businesses?",
        content:
          "Absolutely, startups love its scalability, and enterprises rely on its stability.",
      },
      {
        header:
          "How does Angular compare to other frameworks?",
        content:
          "Angular stays reliable across large modules, performing well where others struggle.",
      },
      {
        header: "Do Angular projects need ongoing support?",
        content:
          "Ongoing support ensures updates, security, and long term performance as your platform evolves.",
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
      { image: support3, title: "Load Pages in Milliseconds" },
      { image: support4, title: "50% Increase in Speed" },
      { image: support5, title: "Build for Growth" },
    ];
  


  return (
    <>
      <ReactHelmet
        title="Angular Development in Dallas, TX"
        description="Get high performance Angular development in Dallas, TX with Texas Web Studio. We build fast, scalable web and app experiences crafted for stability, speed, and business growth."
        url={`${webUrl}/angular-development-dallas`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={mobileAppDevBanner}
          title="Build Limitless Web and Apps Using the Powerful Angular Framework"
          description="Some products are built. Others are engineered. If your web or app needs to run faster than your competition, respond instantly, and hold heavy features without hesitation, Angular is the technology that gets you there. At Texas Web Studio, we bring this engineering mindset to every build, making us the leading Angular development company Dallas, TX businesses trust when performance cannot be compromised."
          btntxt="Build With Angular"
        />

        <WordPressPerformanceSection
          reverse
          minihead="Why Choose Us?"
          miniheadclass="shorttop-head"
          secTitle1="Texas’s Top Choice for"
          secTitle2="Angular Development"
          description="Through our Angular development agency in Dallas, TX, strength isn’t created by accident; it’s built into the framework itself. Angular requires structure, clear logic, and long-term thinking, which is exactly how we operate at Texas Web Studio. We don’t simply build pages; neither do we build apps like others. We engineer systems designed to handle pressure, scale smoothly, and stay dependable long after launch."
          descriptiontwo="This is why businesses across Texas continue to choose us for their Angular related projects."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext=" Work with the Best"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Angular Projects That Outperform the Competition"
          secDescription="Explore our Angular-based projects where smart development drove strong results for our clients."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />
{/*      
        <TabsPricing
          minihead="Pricing Plans"
          mainhead="Affordable Pricing for Builds That Truly Deliver"
          secPara="Angular is chosen by teams that need more than just a pretty interface. Our pricing fits companies ready for structured, scalable solutions that endure. For brands seeking angular development services in Dallas, TX, we provide thoughtful planning, honest timelines, and results designed for long-term use."
          tabsData={dynamictabsData}
        /> */}

        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-7 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={gooddesign}
          title="Framework That Leads, while Others Play Catch Up!"
          description="Heard the phrase “the faster the better?” In the world of web and apps, it could not be more true. Customers want things instantly, and they expect every interaction to respond without delay. If you want web and app experiences that react immediately to user touch, handle complex functionality without throttling, and remain reliable as your vision expands, Angular is the framework built for that level of performance. Texas Web Studio brings Dallas, TX businesses the engineering strength behind high-performance platforms and is trusted for delivering exceptional Angular.js development services in Dallas, TX for brands ready to scale."
          btntxt="Go Skyrockt with Angular"
        />

        <LocationSupport
          minihead="Best in the Business"
          mainheadSpan="Engineered by the Best."
          mainhead="Approved by Dallas, TX"
          mainPara="Others might be here to compete. We’re Here to Lead through Angular website development in Dallas, TX!"
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Connect With Us"
          mainhead="Start Your Project With Texas Web Studios"
          secPara="Your business deserves the best, and when it comes to frameworks, Angular is the best out there. It’s fast, intuitive, scalable; whatever you need, Angular can do it better than others."
          btntxt="Talk to Us"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Your Angular Questions, Answered Simply"
          secPara="We’ve gathered the most frequently asked questions to help you understand everything about our Angular development services in Dallas, TX."
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
  )
}

export default AngularDevelopmentTD