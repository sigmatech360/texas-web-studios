import React, { useState } from 'react'
import ReactHelmet from '../../components/ReactHelmet'
import DefaultLayout from '../../components/DefaultLayout';
import InnerBanner from '../../components/InnerBanner';
import herobanner from "../../assets/images/services/webdesign/herobanner.webp";
import chooseimg from "../../assets/images/services/webdesign/chooseimg.webp";
import gooddesignbg from "../../assets/images/services/webdesign/gooddesignbg.webp";
import aboutvideo from "../../assets/images/services/webdesign/aboutvideo.mp4";
import WordPressPerformanceSection from '../../components/WordPressPerformanceSection';
import NewWebDesignServices from '../../components/NewWebDesignServices';
import WebDesignItsWork from '../../components/WebDesignItsWork';
import TabsPricing from '../../components/TabsPricing';
import { dynamictabsData } from '../../data';
import LocationContact from '../../components/LocationContact';
import BlogSec from '../../components/BlogSec';
import PixelPerfectSec from '../../components/PixelPerfectSec';
import portfolio1 from "../../assets/images/services/webdesign/portfolio1.webp";
import portfolio2 from "../../assets/images/services/webdesign/portfolio2.webp";
import portfolio3 from "../../assets/images/services/webdesign/portfolio3.webp";
import portfolio4 from "../../assets/images/services/webdesign/portfolio4.webp";
import portfolio5 from "../../assets/images/services/webdesign/portfolio5.webp";
import portfolio6 from "../../assets/images/services/webdesign/portfolio6.webp";
import Lightbox from 'yet-another-react-lightbox';



const webUrl = import.meta.env.VITE_WEB_URL;

const NewWebDesign = () => {


      const webDesignPortfolioData = [
        {
          id: 1,
          image: portfolio1,
        },
        {
          id: 2,
          image: portfolio2,
        },
        {
          id: 3,
          image: portfolio3,
        },
        {
          id: 4,
          image: portfolio4,
        },
        {
          id: 5,
          image: portfolio5,
        },
        {
          id: 6,
          image: portfolio6,
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
    


  return (
    <>
    
     <ReactHelmet
        title="Professional Website Design Services in Texas That Convert"
        description="Build a website that’s fast, responsive, and visually powerful. Our Texas-based team creates custom websites designed to reflect your brand voice, engage users, and drive real conversions."
        url={`${webUrl}/web-design`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={herobanner}
          title="Websites That Serve Looks, Speed, And Strategy"
          description="Get a site that looks incredible, works flawlessly, and treats your audience like royalty. Our website design services in Texas include websites that feel intentional, modern, and slightly addictive to scroll through. From visuals to structure to functionality, everything gets built with purpose."
          btntxt="Start Your Website"
        />


        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection domain-register-choose webdesign-about-sec"
          reverse
          minihead="About Us"
          miniheadclass="shorttop-head"
          secTitle1="What Brews at"
          secTitle2="Texas Web Studios"
          description="We’re the creatives who marry strategy with style and vibe with logic. Texas Web Studios designs digital experiences that reflect your brand’s personality, guide your audience smoothly, and convert like you hired a sales ninja to code your site."
          videoSrc={aboutvideo}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to the Team"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <NewWebDesignServices/>

        
        <WebDesignItsWork/>



        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-5 order-lg-1 order-2"
          rightCol="col-lg-7 order-lg-2 order-1"
          bgImage={gooddesignbg}
          title="A Website That Converts "
          description="Your website shouldn’t just look pretty. It should guide people to take action. We mix strategy, psychology, and bold creativity to turn your visitors into loyal customers."
          btntxt="Boost My Conversions"
        />

         <PixelPerfectSec
           pixelSec="webdesign-portfolio-sec"
          minihead="Our portfolio"
          secTitle="Recent Creative Project Highlights"
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />


         <WordPressPerformanceSection
          wordpresssecclass="ecommerce-choose-sec webdesign-choose-sec"
          minihead="Why Choose Us?"
          miniheadclass="shorttop-head"
          secTitle1="A Design Team Obsessed With"
          secTitle2="Your Digital Growth"
          description="We’re not any typical website design agency in Texas. We’re the team that actually listens, understands trends, respects data, and builds like the digital future depends on it."
          whyChooseList={[
            "Smart designs grounded in strategy",
            "Fast builds with meticulous attention to detail",
            "Brand-first creative approach",
            "Websites optimized for real conversions",
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Click Here to Increase Sales by 54%"
          aboutbtnlink="/contact"
          learnmorebtn="d-none"
        />


        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Comprehensive Website Design Packages"
          secPara="Choose a plan that matches your goals. Whether you need a sleek starter site or a fully loaded custom build, we offer flexible pricing that respects your budget and delivers real value."
          tabsData={dynamictabsData}
        /> */}


        <LocationContact
          secClass="ecommerce-contact-sec"
          minihead="Contact Us "
          mainhead="Let’s Build An Unforgettable Website Together"
          secPara="Our website design agency in Texas is ready to bring your website to life. Drop your details in the form, and our team will get back to you with ideas, options, and next steps."
          btntxt="Send Message"
        />

        <BlogSec
          minihead="Blogs & Articles"
          secTitle="Get All Tech-Related News Here"
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

export default NewWebDesign