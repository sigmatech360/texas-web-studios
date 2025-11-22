import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import herobanner from "../../assets/images/services/ecommercedevelopment/herobanner.webp";
import service1 from "../../assets/images/services/ecommercedevelopment/service1.webp";
import service2 from "../../assets/images/services/ecommercedevelopment/service2.webp";
import service3 from "../../assets/images/services/ecommercedevelopment/service3.webp";
import service4 from "../../assets/images/services/ecommercedevelopment/service4.webp";
import service5 from "../../assets/images/services/ecommercedevelopment/service5.webp";
import service6 from "../../assets/images/services/ecommercedevelopment/service6.webp";
import portfolio1 from "../../assets/images/services/ecommercedevelopment/portfolio1.webp";
import portfolio2 from "../../assets/images/services/ecommercedevelopment/portfolio2.webp";
import portfolio3 from "../../assets/images/services/ecommercedevelopment/portfolio3.webp";
import portfolio4 from "../../assets/images/services/ecommercedevelopment/portfolio4.webp";
import portfolio5 from "../../assets/images/services/ecommercedevelopment/portfolio5.webp";
import portfolio6 from "../../assets/images/services/ecommercedevelopment/portfolio6.webp";
import aboutimg from "../../assets/images/services/ecommercedevelopment/about.webp";
import chooseimg from "../../assets/images/services/ecommercedevelopment/chooseimg.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import LocationContact from "../../components/LocationContact";
import BlogSec from "../../components/BlogSec";
import OurProcess from "../../components/OurProcess";
import ReactHelmet from "../../components/ReactHelmet";
import Lightbox from "yet-another-react-lightbox";

const webUrl = import.meta.env.VITE_WEB_URL;

const EcommerceDevelopment = () => {
  const webDesignPortfolioData = [
    {
      id: 1,
      image: service1,
      title: "Shopify Development",
      description:
        "Custom stores that have beautiful designs and a powerful conversion strategy.",
    },
    {
      id: 2,
      image: service2,
      title: "WordPress Development",
      description: "SEO-friendly websites with intuitive management tools.",
    },
    {
      id: 3,
      image: service3,
      title: "Squarespace Development",
      description: "Elegant and flexible design solutions for modern brands.",
    },
    {
      id: 4,
      image: service4,
      title: "Wix Development",
      description: "Lightweight and high-speed sites made for easy updates.",
    },
    {
      id: 5,
      image: service5,
      title: "Webflow Development",
      description:
        "Fully responsive designs with creative animations that are worth the visits.",
    },
    {
      id: 6,
      image: service6,
      title: "Website Redesign",
      description:
        "Transform outdated websites into engaging digital experiences.",
    },
  ];

  const ecommercedesignportfolio = [
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
        title="E-Commerce Website Development Texas | Texas Web Studios"
        description="We build e-commerce websites that help Texas businesses grow online. Get a fast, secure, and easy-to-manage e-commerce website in Texas built for success."
        url={`${webUrl}/ecommerce-development`}
      />
      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={herobanner}
          title="Creating E-Commerce Websites with Digital Sales That Never Slow Down"
          description="Build an online store that drives sales and customer loyalty. Our E-Commerce Website Development expertise in Texas helps brands create visually stunning, high-performing stores that convert. Experience complete control, fast performance, and secure transactions with Texas Web Studios."
          btntxt="Get Your E-Commerce Website"
        />

        <WordPressPerformanceSection
          reverse
          minihead="About Us"
          miniheadclass="shorttop-head"
          secTitle1="Innovators in"
          secTitle2="Custom Online Store Development"
          description="Texas Web Studios is an e-commerce website development company that Texas trusts to grow its brands. We design responsive, fast, and sales-driven stores that combine technology with user-focused creativity to help businesses grow."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About Texas Web Studios"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn"
        />

        <PixelPerfectSec
          pixelSec="ecommerce-service-sec"
          minihead="More of Our Services"
          secTitle="Explore More Development Expertise"
          secDescription="Discover advanced web solutions built for performance and results."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
          btnText="Chat With Our Web Experts"
          btnlink="/contact"
        />

        <OurProcess />

        <PixelPerfectSec
          pixelSec="ecommerce-service-sec"
          minihead="Our Portfolio"
          secTitle="Check out the Websites That Sell for You"
          secDescription="Explore e-commerce projects that blend innovation and strategy, built for brands that value performance and design."
          projectsData={ecommercedesignportfolio}
          onImageClick={handleImageClick}
          btnlink="/contact"
        />

        <WordPressPerformanceSection
          wordpresssecclass="ecommerce-choose-sec"
          minihead="Why Choose Us?"
          miniheadclass="shorttop-head"
          secTitle1="Texas Web Studios:"
          secTitle2="Leaders in Digital Commerce"
          description="We specialize in e-commerce website development services in Texas, helping brands turn digital potential into measurable growth through design, technology, and strategy."
          whyChooseList={[
            "Strategic Web Architecture",
            "Designs Loved By Real Humans",
            "Clients That Love Us",
            "Ideas That Keep Evolving",
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Click Here to Increase Sales by 54%"
          aboutbtnlink="/contact"
          learnmorebtn="d-none"
        />

        <LocationContact
          secClass="ecommerce-contact-sec"
          minihead="Contact Us"
          mainhead="Let’s Build Your Growth Plan"
          secPara="Collaborate with Texas Web Studios to develop a high-performing e-commerce store that enhances your brand and drives revenue growth. Fill the form to get started now."
          btntxt="Chat With Us"
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

export default EcommerceDevelopment;
