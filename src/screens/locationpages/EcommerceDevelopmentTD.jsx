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
import TabsPricing from '../../components/TabsPricing';
import { dynamictabsData } from '../../data';
import mobileAppDevBanner from "../../assets/images/locationpages/ecommerce-development-dallas/herobanner.webp";
import gooddesign from "../../assets/images/locationpages/ecommerce-development-dallas/gooddesignbg.webp";
import support1 from "../../assets/images/locationpages/wordpress-development-dallas/gurrantee.svg";
import support2 from "../../assets/images/locationpages/wordpress-development-dallas/support.svg";
import support3 from "../../assets/images/locationpages/wordpress-development-dallas/ownership.svg";
import support4 from "../../assets/images/locationpages/wordpress-development-dallas/money.svg";
import support5 from "../../assets/images/locationpages/wordpress-development-dallas/Pentool.svg";
import aboutimg from "../../assets/images/locationpages/ecommerce-development-dallas/aboutimg.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/ecommerce-development-dallas/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/ecommerce-development-dallas/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/ecommerce-development-dallas/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/ecommerce-development-dallas/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/ecommerce-development-dallas/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/ecommerce-development-dallas/portfolio-6.webp";


const webUrl = import.meta.env.VITE_WEB_URL;



const EcommerceDevelopmentTD = () => {

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
            "Is there a free trial available?",
          content:
            "We offer a free discovery call where our e-commerce website development team in Dallas, TX, walks you through the best structure for your online store.",
        },
        {
          header: "Can I upgrade my plan later?",
          content:
            "Absolutely, as your store grows, you can shift to a higher plan supported by our e-commerce website developers in Dallas, TX.",
        },
        {
          header: "What kind of information can I track?",
          content:
            "There are a whole lot of things you can track and tweak. At the base, you can track visitors, performance, ranking, and much more, and you can use this information to tweak your store, helping you increase sales.",
        },
        {
          header:
            "How long does it take to build an e-commerce website?",
          content:
            "Timelines vary by project size, but our e-commerce website development services in Dallas, TX, typically complete most stores within a few weeks to a couple of months. However, if it's a custom project, it will take more time.",
        },
        {
          header: "Do you offer ongoing support after the website is launched?",
          content:
            "Yes, we stay with you after launch to handle updates, improvements, technical support, and anything your store needs to keep performing smoothly.",
        },
        {
          header: "Will my e-commerce website be mobile-friendly?",
          content:
            "Absolutely, every store we build is fully responsive, optimized for mobile shoppers, and designed to deliver a smooth experience on any device.",
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
        { image: support4, title: "54% Increase in Sales" },
        { image: support5, title: "Build for Growth" },
      ];
    

  return (
      <>
      <ReactHelmet
        title="E-commerce Website Development in Dallas, TX"
        description="Texas Web Studio, an expert e-commerce website development company in Dallas, TX, for brands that want high-performing stores, smooth user experiences, modern designs, and reliable growth. "
        url={`${webUrl}/ecommerce-development-dallas`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={mobileAppDevBanner}
          title="Hire the Smartest Salesperson with Our E-commerce Website Development"
          description="If you want the kind of results only a top e-commerce website development in Dallas, TX can deliver, you’re in the right place. In the vast world of the internet, filled with URLs, your website should not sit pretty; it should sell, recommend, convert, and keep customers coming back. At Texas Web Studio, we build intelligent shopping experiences engineered for real growth."
          serviceparatwo="The kind of e-commerce website that builds authority through responsiveness, optimizes the website to rank at the top, and keeps the sales coming in through organic and inorganic marketing."
          btntxt="Develop Your Salesfront"
        />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection domain-register-choose"
          reverse
          minihead="Built to Sell"
          miniheadclass="shorttop-head"
          secTitle1="Kind of Website That"
          secTitle2="Rules the Internet!"
          description="Our e-commerce website development agency in Dallas, TX, creates the right type of store for your brand, built with all the right functionalities and paired with optimized structure, intuitive user flows, strong product presentation, and performance designed to turn browsing customers into reliable buyers. We built:"
           whyChooseList={[
            "E-commerce Development",
            "Shopify Development",
            "Single Page Applications",
            "WooCommerce Development",
          ]}
          image={aboutimg}
          listClass="d-none"  
          TouchBtn="d-none"
          btntext="Talk to Us"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="A Peek into the Stores that Now Outsell Their Competition"
          secDescription="Dive into our goldmine of e-commerce website development services in Dallas, TX, and explore stores we built that turn brands into experiences customers genuinely love."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Simple Plans that Power the E-commerce Industry"
          secPara="Our plans make e-commerce website development in Dallas, TX, simple by giving you multiple development options, a real strategy, and a dedicated team focused on building a store that sells the way you want it to."
          tabsData={dynamictabsData}
        /> */}

        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-7 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={gooddesign}
          minhead="Why Choose Us?"
          title="Choose Us to Outrun Your Competition"
          description="When visitors come to your website to buy something, they look for the product, but they also look for authority, someone they can trust, someone who can provide what they need, and someone who is up to date. Thus, being pretty is not enough. Your store needs strategic product architecture, smooth micro interactions, fast decision paths, and a checkout so clean it practically whispers buy now. That is our specialty. Brands partner with us when they want an e-commerce website development company in Dallas, TX, that treats every store like a long-term revenue system, not a one-time deliverable. If your goal is growth, predictability, and a store that behaves like a profit engine, you are in the right place."
          btnClass="theme-btn"
          btntxt="Let’s Develop Your Website"
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
          mainhead="Let’s Build a Store Shoppers Can’t Resist"
          secPara="Tell us your e-commerce dreams, and we will turn them into something shoppers adore instantly."
          btntxt="Fill out the Form"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="You’ve Got Questions. We’ve Got Clarity"
          secPara="We gathered the most common questions and answered them in the simplest way, so you can take the next step knowing how much an e-commerce store can help your brand!"
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

export default EcommerceDevelopmentTD