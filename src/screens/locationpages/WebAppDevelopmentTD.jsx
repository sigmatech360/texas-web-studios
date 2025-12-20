import React, { useState } from 'react'
import ReactHelmet from '../../components/ReactHelmet';
import DefaultLayout from '../../components/DefaultLayout';
import InnerBanner from '../../components/InnerBanner';
import WordPressPerformanceSection from '../../components/WordPressPerformanceSection';
import PixelPerfectSec from '../../components/PixelPerfectSec';
import TabsPricing from '../../components/TabsPricing';
import { dynamictabsData } from '../../data';
import LocationSupport from '../../components/LocationSupport/Index';
import LocationContact from '../../components/LocationContact';
import LocationFaqs from '../../components/LocationFaqs';
import Lightbox from 'yet-another-react-lightbox';
import mobileAppDevBanner from "../../assets/images/locationpages/webapp-development-dallas/herobanner.webp";
import gooddesign from "../../assets/images/locationpages/webapp-development-dallas/gooddesignbg.webp";
import support1 from "../../assets/images/locationpages/wordpress-development-dallas/gurrantee.svg";
import support2 from "../../assets/images/locationpages/wordpress-development-dallas/support.svg";
import support3 from "../../assets/images/locationpages/wordpress-development-dallas/ownership.svg";
import support4 from "../../assets/images/locationpages/wordpress-development-dallas/money.svg";
import support5 from "../../assets/images/locationpages/wordpress-development-dallas/Pentool.svg";
import aboutimg from "../../assets/images/locationpages/webapp-development-dallas/aboutimg.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/webapp-development-dallas/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/webapp-development-dallas/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/webapp-development-dallas/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/webapp-development-dallas/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/webapp-development-dallas/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/webapp-development-dallas/portfolio-6.webp";



const webUrl = import.meta.env.VITE_WEB_URL;

const WebAppDevelopmentTD = () => {


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
            "What types of web apps do you develop?",
          content:
            "We build custom web applications, including internal tools, dashboards, SaaS platforms, and client-facing systems tailored to specific business needs.",
        },
        {
          header: "Do you offer custom web app development services in Dallas, TX?",
          content:
            "Yes. Every web app we build is custom-designed and developed around your goals, users, and technical requirements.",
        },
        {
          header: "Can you handle full-stack web app development in Dallas, TX?",
          content:
            "Yes. We manage frontend, backend, databases, APIs, and integrations as a complete solution.",
        },
        {
          header:
            "Do you work with startups and established businesses?",
          content:
            "We work with both. Startups often come to us for MVPs, while established companies partner with us to build scalable and reliable platforms.",
        },
        {
          header: "Will my web app scale as my business grows?",
          content:
            "Yes. Scalability is planned from the beginning, so your application grows without needing to be rebuilt.",
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
        title="Web App Development in Dallas, TX"
        description="Work with Texas Web Studios, a trusted web app development company in Dallas, TX, building powerful web applications that handle complex tasks beyond the limits of simple websites."
        url={`${webUrl}/webapp-development-dallas`}
      />

       <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={mobileAppDevBanner}
          title="Web Apps Built for Big Ideas and Bigger Expectations"
          description="There are more than a billion websites. Don’t just be another URL. Stand out with web app development services in Dallas, TX, designed for companies seeking performance and purpose. "
          serviceparatwo="These are the kind of apps that don’t flinch underpressure."
          btntxt="Request a Web App Quote"
        />

        <WordPressPerformanceSection
          reverse
          minihead="Why Choose Us?"
          miniheadclass="shorttop-head"
          secTitle1="We’re the Difference Between"
          secTitle2="Average & Exceptional"
          description="There are plenty of web app development companies in Dallas, TX. Most will talk about features. Fewer will talk about how those features actually behave once real users get involved."
          descriptiontwo="As a focused web app development agency in Dallas TX, we care about what happens after launch: Load times. Stability. Scalability. Maintainability. The things that matter once the app is live and people are relying on it to do their jobs."
          description2="We plan carefully, build deliberately, and ship web apps that hold up under real business pressure."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Our Developers"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Just Like Websites, but Stronger Where It Counts"
          secDescription="Pay for impact, not excess. Our pricing prioritizes results-driven development that grows with your business and delivers lasting value."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />
     
        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Built to Bring In, Not Spend More"
          secPara="Angular is chosen by teams that need more than just a pretty interface. Our pricing fits companies ready for structured, scalable solutions that endure. For brands seeking angular development services in Dallas, TX, we provide thoughtful planning, honest timelines, and results designed for long-term use."
          tabsData={dynamictabsData}
        /> */}

        <InnerBanner
          secClass="locate-wordpress-herobanner webapp-location-herobanner"
          leftCol="col-lg-7 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={gooddesign}
          minhead="Benefits"
          title="What Makes Web Apps Stand Out"
          description="When things get more complex, more dynamic, and more demanding, web apps step in and handle all the load. Unlike traditional websites, web applications are designed to process data, manage workflows, and respond instantly to user actions. With web apps, you get:"
          listdownpara="That’s why companies looking for web app development services in Dallas, TX, choose web apps when performance and reliability start to matter more than appearances alone."
          btntxt="Start Your Project"
        />

        <LocationSupport
          minihead="Best in the Business"
          mainheadSpan="Engineered by the Best."
          mainhead="Approved by Dallas, TX"
          mainPara="Great web apps are quiet performers. They load fast, scale smoothly, and never ask for attention. If that sounds like the kind of work you appreciate, you’ll like how we build."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Contact Us"
          mainhead="Talk to Our Web App Developers"
          secPara="Have an idea in mind? Let’s talk it through and turn it into a web app that has all the functionalities your business needs."
          btntxt="Talk to Us"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Find Answers to All Your Questions"
          secPara="Swipe through our FAQs and find all the answers you’re looking for. And if you can’t find it here, fill out the form and send us your query. We're get back to you with all the answers you need."
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

export default WebAppDevelopmentTD
