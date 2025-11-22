import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import herobanner from "../../assets/images/services/backenddevelopment/herobanner.webp";
import aboutimg from "../../assets/images/services/backenddevelopment/aboutimg.webp";
import chooseimg from "../../assets/images/services/backenddevelopment/chooseimg.webp";
import innerimg from "../../assets/images/services/backenddevelopment/herobanner-inner-img.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Backendservices from "../../components/backendservices";
import BackendWorkSec from "../../components/BackendWorkSec";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import BackendConnect from "../../components/BackendConnect";
import BackendPortfolio from "../../components/BackendPortfolio";
import LocationContact from "../../components/LocationContact";
import BlogSec from "../../components/BlogSec";
import BackendProcess from "../../components/BackendProcess";
import Lightbox from "yet-another-react-lightbox";
import ReactHelmet from "../../components/ReactHelmet";


const webUrl = import.meta.env.VITE_WEB_URL;

const BackendDevelopment = () => {

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
  return (
    <>

     <ReactHelmet
        title="Backend Development Services Texas | Texas Web Studios"
        description="Building strong, secure, and reliable backend systems for businesses built in Texas. Get in touch to keep your website running fast and working smoothly every day."
        url={`${webUrl}/backend-development`}
      />
      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={herobanner}
          bannerImg={innerimg}
          title="Your Innovative Backend Development Agency in Texas"
          description="At Texas Web Studios, we build powerful, secure, and backend systems that make your websites and applications perform flawlessly. Our backend development services in Texas include Node.js, PHP, and API integrations, delivering easy-to-use structures that support smooth user experiences."
          btntxt="Speak to the Web Experts"
        />

        <WordPressPerformanceSection
          wordpresssecclass="backend-about-sec"
          minihead="About Us"
          miniheadclass="shorttop-head"
          leftCol="col-lg-12"
          rightCol="col-lg-12"
          secTitle1="Expert Backend Developers"
          secTitle2="Powering the Web in Texas"
          description="At Texas Web Studios, we believe the strength of every website, every digital experience starts from its backend. Our team of experts builds systems that power websites and apps with speed and stable growth. From Node.js backend development in Texas to API architecture, we build systems that work quietly but powerfully behind the scenes."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Learn More About Texas Web Studios"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn"
        />

        <Backendservices />

        <BackendWorkSec />

        <BackendConnect />

        <BackendPortfolio />

        <WordPressPerformanceSection
          wordpresssecclass="backend-choose-sec"
          minihead="Why Choose Us?"
          miniheadclass="shorttop-head"
          secTitle1="Building the Smartest Backends"
          secTitle2="That Drive Real Growth"
          description="Texas Web Studios stands out as a leading backend development company in Texas, combining expertise with innovation. We engineer systems that are secure, innovative, and made specially to boost businesses."
          whyChooseList={[
            "Expertise in PHP backend developmen",
            "API and database architecture solutions",
            "Performance optimization for high-traffic sites",
            "End-to-end support from development to deployment",
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Click Here to Increase Sales by 54%"
          aboutbtnlink="/contact"
          learnmorebtn="d-none"
        />

        <BackendProcess/>

        <LocationContact
          secClass="ecommerce-contact-sec"
          minihead="Contact Us"
          mainhead="Get in Touch with Our Backend Experts"
          secPara="Let’s talk about building a smarter, stronger, and more secure backend system for your business. Our team is ready to help you transform your website into a powerful digital engine."
          btntxt="Reach Us Directly"
        />

        <BlogSec />

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

export default BackendDevelopment;
