import React, { useState } from 'react'
import ReactHelmet from '../../components/ReactHelmet'
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
import mobileAppDevBanner from "../../assets/images/locationpages/shopify-development-dallas/herobanner.webp";
import gooddesign from "../../assets/images/locationpages/shopify-development-dallas/gooddesignbg.webp";
import support1 from "../../assets/images/locationpages/wordpress-development-dallas/gurrantee.svg";
import support2 from "../../assets/images/locationpages/wordpress-development-dallas/support.svg";
import support3 from "../../assets/images/locationpages/wordpress-development-dallas/ownership.svg";
import support4 from "../../assets/images/locationpages/wordpress-development-dallas/money.svg";
import support5 from "../../assets/images/locationpages/wordpress-development-dallas/Pentool.svg";
import aboutimg from "../../assets/images/locationpages/shopify-development-dallas/aboutimg.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/shopify-development-dallas/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/shopify-development-dallas/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/shopify-development-dallas/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/shopify-development-dallas/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/shopify-development-dallas/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/shopify-development-dallas/portfolio-6.webp";


const webUrl = import.meta.env.VITE_WEB_URL;


const ShopifyDevelopmentTD = () => {


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
        { image: support1, title: "SatisfactionSatisfaction Guaranteed"  },
        { image: support2, title: "24/7 Customer Support" },
        { image: support3, title: "Ownership Rights" },
        { image: support4, title: "Money Back Guarantee" },
        { image: support5, title: "Industry Specific Experts" },
      ];
    
  

  return (
    <>
      
       <ReactHelmet
        title="Shopify Website Development in Dallas, Texas."
        description=" Discover professional Shopify development services in Dallas, Texas, with Texas Web Studios. Our professional web developers create smooth and intuitive websites for a seamless user experience. "
        url={`${webUrl}/shopify-development-dallas`}
      />

       <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={mobileAppDevBanner}
          title="Shopify Website Development in Dallas, Texas"
          description="With years of real experience in the e-commerce industry, Texas Web Studios provides professional Shopify website development in Dallas, Texas, for businesses that dream of growing online at a smooth pace. We offer securely built e-commerce websites on Shopify that are easy to manage and perform well regardless of the type. Our focus is on clean design, smooth navigation, and reliable store performance that encourages sales and customer trust."
          btntxt="Start Your Shopify Project"
        />

        <WordPressPerformanceSection
          reverse
          minihead="Why Choose Us"
          miniheadclass="shorttop-head"
          secTitle1="Why Businesses Choose Texas Web Studios for"
          secTitle2="E-Commerce Shopify Development"
          description="At Texas Web Studios, we focus on stores that function without bugs or errors, have user-friendly designs, and strong ecommerce foundations. Businesses in Dallas, Texas, choose us for reliable Shopify development, clear communication, and solutions designed to support long-term success."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Discuss Your Shopify Project"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <PixelPerfectSec
          minihead="Our Projects"
          secTitle="Explore Our Portfolio"
          secDescription="View Shopify ecommerce websites we have developed for businesses across multiple industries and growth stages."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />
     
        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Shopify Web Development Packages"
          secPara="Explore the packages we offer for Shopify website development in Dallas, TX, based on different business needs."
          tabsData={dynamictabsData}
        /> */}

        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-7 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={gooddesign}
          title="Shopify Stores Built to Increase Online Sales"
          description="A well-developed Shopify website works as more than just an internet presence of your brand; it can be a sales expert that you can rely on for consistent revenue. Our Shopify ecommerce website development services in Dallas, TX, are focused on speed, usability, and structure to help businesses grow online with confidence."
          btntxt="Talk to Our Shopify Experts Now"
        />

        <LocationSupport
          minihead="Our Expertise"
          mainheadSpan="Partner with"
          mainhead="Texas Web Studios"
          mainPara="Our Shopify website development services are what get us recognition across Dallas. We create client partnerships that are built on trust more than anything else."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Contact Us"
          mainhead="Short description leading to Form"
          secPara="Your business deserves the best, and when it comes to frameworks, Angular is the best out there. It’s fast, intuitive, scalable; whatever you need, Angular can do it better than others."
          btntxt="Send Message"
        />

        {/* <LocationFaqs
          minihead="FAQs"
          mainhead="Your Angular Questions, Answered Simply"
          secPara="We’ve gathered the most frequently asked questions to help you understand everything about our Angular development services in Dallas, TX."
          faqsData={faqsData}
        /> */}

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

export default ShopifyDevelopmentTD
