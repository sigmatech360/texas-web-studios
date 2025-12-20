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
import mobileAppDevBanner from "../../assets/images/locationpages/laravel-development-dallas/herobanner.webp";
import gooddesign from "../../assets/images/locationpages/laravel-development-dallas/gooddesignbg.webp";
import support1 from "../../assets/images/locationpages/wordpress-development-dallas/gurrantee.svg";
import support2 from "../../assets/images/locationpages/wordpress-development-dallas/support.svg";
import support3 from "../../assets/images/locationpages/wordpress-development-dallas/ownership.svg";
import support4 from "../../assets/images/locationpages/wordpress-development-dallas/money.svg";
import support5 from "../../assets/images/locationpages/wordpress-development-dallas/Pentool.svg";
import aboutimg from "../../assets/images/locationpages/laravel-development-dallas/aboutimg.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/laravel-development-dallas/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/laravel-development-dallas/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/laravel-development-dallas/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/laravel-development-dallas/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/laravel-development-dallas/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/laravel-development-dallas/portfolio-6.webp";


const webUrl = import.meta.env.VITE_WEB_URL;


const LaravelDevelopmentTD = () => {

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
          "What makes Laravel a strong choice for backend development?",
        content:
          "Laravel offers a clean code structure, strong security features, and flexibility for complex backend logic. Laravel development in Dallas, Texas, helps businesses build systems that handle data, users, and processes efficiently while remaining easy to maintain.",
      },
      {
        header: "What types of applications can be built with Laravel?",
        content:
          "Laravel is used for custom web applications, admin dashboards, APIs, and business platforms. Laravel web development services in Dallas Texas support applications that require secure data handling and scalable backend architecture.",
      },
      {
        header: "Can Laravel support growing and complex business systems?",
        content:
          "Yes, Laravel is mostly used for growing and complex systems. It supports advanced features, large databases, and increasing user activity. Laravel application development in Dallas, Texas, helps businesses prepare their systems for long-term growth.",
      },
      {
        header:
          "Do you work with existing Laravel applications?",
        content:
          "Yes, we improve and extend existing Laravel applications. This includes fixing issues, improving performance, upgrading versions, and adding new features. Laravel development services in Dallas, Texas, help improve systems without rebuilding them entirely.",
      },
      {
        header: "Is Laravel secure for business applications?",
        content:
          "Laravel includes built-in security features for data protection and user authentication. When developed correctly, Laravel applications provide a secure backend environment for business operations and sensitive information.",
      },
       {
        header: "Do you provide support after Laravel development is complete?",
        content:
          "Yes, we provide ongoing support after development. Our team assists with updates, maintenance, and improvements so your Laravel application continues to perform reliably as your business evolves.",
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
      { image: support1, title: "Satisfaction Guaranteed" },
      { image: support2, title: "24/7 Customer Support" },
      { image: support3, title: "Ownership Rights" },
      { image: support4, title: "Money Back Guarantee" },
      { image: support5, title: "Industry Specific-Expertise" },
    ];
  


  return (
     <>

    <ReactHelmet
        title="Laravel web and application development in Texas"
        description="Discover expert Laravel development in Dallas, Texas. At Texas Web Studios, we build secure, scalable, and custom Laravel backend solutions for businesses"
        url={`${webUrl}/laravel-development-dallas`}
      />

       <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={mobileAppDevBanner}
          title="Laravel Web Development in Dallas, TX"
          description="Texas Web Studios offers Laravel web development in Dallas, Texas, for businesses that need powerful and reliable backend systems. With years of backend development experience, we build custom Laravel applications that handle data, users, and workflows with precision. Our focus is on secure architecture, smooth performance, and backend solutions that support real business growth."
          btntxt="Talk to Our Backend Experts"
        />

        <WordPressPerformanceSection
          reverse
          minihead="Why Choose Us"
          miniheadclass="shorttop-head"
          secTitle1="Offering Expert-Level Laravel Development Services"
          secTitle2="for Floridian Brands"
          description="Businesses choose Texas Web Studios for Laravel development because we focus on logic, stability, and scalability. We build backend systems that work quietly and reliably behind the scenes. And to reach these goals, our Laravel solutions help Dallas businesses manage operations, data, and growth without unnecessary complexity."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Discuss Your Laravel Project"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <PixelPerfectSec
          minihead="Our Portfolio"
          secTitle="View Our Web Apps, Websites & More"
          secDescription="Explore the Laravel-based applications we have developed for businesses with complex workflows and requirements that are based on performance."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />
     
        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Laravel Development Packages"
          secPara="Our Laravel development packages in Dallas, TX, are flexible, transparent, and designed around project scope and business needs."
          tabsData={dynamictabsData}
        /> */}

        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-7 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={gooddesign}
          title="Building Powerful Backends for Unwavering Web Support"
          description="Our websites are most focused on building a strong backend, since it is always the foundation of scalable applications. Our Laravel web development services help businesses in Dallas, Texas, manage data, automate processes, and build systems that grow steadily without performance or security concerns."
          btntxt="More About United Web Developers"
          btnLink="/about"
        />

        <LocationSupport
          minihead="Our Expertise"
          mainheadSpan="Development that Builds"
          mainhead="Functional Applications"
          mainPara="Texas Web Studios specializes in Laravel development focused on clean architecture, secure systems, and long-term backend reliability."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Contact Us"
          mainhead="Start Your Laravel Development Project Today"
          secPara="Share your details with our team and let Texas Web Studios build a Laravel solution designed for your business."
          btntxt="Send Message"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Common Questions About Laravel Development in Dallas, Texas"
          secPara="Below are answers to common questions about Laravel development services offered by Texas Web Studios."
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

export default LaravelDevelopmentTD
