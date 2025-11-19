import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import herobanner from "../../assets/images/services/frontenddevelopment/herobanner.webp";
import aboutimg from "../../assets/images/services/frontenddevelopment/aboutimg.webp";
import chooseimg from "../../assets/images/services/frontenddevelopment/chooseimg.webp";
import leverageimg from "../../assets/images/services/frontenddevelopment/leverageimg.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import FrontendServices from "../../components/FrontendServices";
import FrontendBenefit from "../../components/FrontendBenefit";
import OurProjects from "../../components/OurProjects";
import LocationContact from "../../components/LocationContact";
import BlogSec from "../../components/BlogSec";
import Lightbox from "yet-another-react-lightbox";
import ReactHelmet from "../../components/ReactHelmet";


const webUrl = import.meta.env.VITE_WEB_URL;

const FrontendDevelopment = () => {

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
        title=" Frontend development in Texas"
        description="Experience eye-catching, persuasive, frontend development in Texas with Texas Web Studios, the industry leader in developing responsive, high-performing, and visually stunning web pages, mobile apps, SPA, and more."
        url={`${webUrl}/frontend-development`}
      />


      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner frontend-development-herobanner"
          leftCol="col-lg-8"
          rightCol="d-none"
          bgImage={herobanner}
          title="Designing Frontend Better Than Your Imagination"
          description="Hook your visitors and increase your conversions by 60% with the leading frontend development company in Texas, USA. We don’t just build what you send; we refine it, optimize it, and give it purpose. That’s front-end design done the Texas Web Studios way. "
          btntxt="Design Your Web & App"
        />

        <WordPressPerformanceSection
          miniheadclass="shorttop-head"
          secTitle1="Professional Front-End Development for"
          secTitle2="Modern Businesses"
          description="At Texas Web Studios, front-end isn’t just what we build, it’s how we think. Our front-end development services in Texas encompass everything from static designs to illustrations and 3D vector graphics, utilizing modern technologies like HTML5, CSS3, and JavaScript, as well as frameworks such as React, Angular, and Vue.js."
          descriptiontwo="We create interfaces that are highly responsive, adaptive, and easy to navigate, so easy that even a child can use them."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Professionals"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <FrontendServices />

        <FrontendBenefit />

        <OurProjects />

        <WordPressPerformanceSection
          miniheadclass="shorttop-head"
          secTitle1="No More Broken Buttons or Zoom Games,"
          secTitle2="Just Seamless Dev"
          description="Innovation is our baseline. We craft intelligent, responsive, and lightning-fast interfaces that make digital interactions feel so good to use. With our front-end design and development in Texas, say goodbye to tapping a hundred times on a button to work, or zooming in again and again because the web page isn’t responsive. With us, you’ll get all the features that your business needs to run and thrive! "
          image={leverageimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Us"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="frontend-choose-sec"
          minihead="Why Choose Us"
          miniheadclass="shorttop-head"
          secTitle1="Trusted by Americans."
          secTitle2="Driven by Results"
          description="Great design has the power to increase sales by 60%. If you didn’t know that, it’s fine, cause we do! That’s why work with the leading custom front-end development in Texas, and achieve:"
             whyChooseList={[
            "Responsive Web Apps",
            "3D Illustrations and Vectors",
            "AEO, SEO, GEO Optimized",
            "Secure & Scalable",
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Work With Us"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <LocationContact
          secClass="ecommerce-contact-sec"
          minihead="Connect Today"
          mainhead="Your Web Design is Just a Click Away!"
          secPara="Have a question? Want to show us your project? Or simply curious? Connect with us by filling out the form, and we’ll show you the possibilities your business can achieve."
          btntxt="Fill out the Form"
        />

        <BlogSec 
          minihead="Blogs & Articles"
          secTitle="Insights, Innovation, and Everything Related to Front-End"
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

export default FrontendDevelopment;
