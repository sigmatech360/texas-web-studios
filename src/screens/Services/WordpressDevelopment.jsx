import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import herobanner from "../../assets/images/services/wordpressdevelopment/herobanner.webp";
import aboutvideo from "../../assets/images/services/wordpressdevelopment/aboutvideo.mp4";
import portoflio1 from "../../assets/images/services/wordpressdevelopment/portoflio1.webp";
import service1 from "../../assets/images/services/wordpressdevelopment/service1.webp";
import service2 from "../../assets/images/services/wordpressdevelopment/service2.webp";
import service3 from "../../assets/images/services/wordpressdevelopment/service3.webp";
import wordpressanother from "../../assets/images/services/wordpressdevelopment/wordpressanother.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import WordpressServices from "../../components/WordpressServices";
import WordpressProcess from "../../components/WordpressProcess";
import WordpressPortfolio from "../../components/WordpressPortfolio";
import BlogSec from "../../components/BlogSec";
import LocationContact from "../../components/LocationContact";
import BookCallSec from "../../components/BookCallSec";
import ReactHelmet from "../../components/ReactHelmet";


const webUrl = import.meta.env.VITE_WEB_URL;


const WordpressDevelopment = () => {
  return (
    <>

      <ReactHelmet
        title="WordPress Development in Texas"
        description="Build high-performing, fast, and scalable websites with Texas Web Studios, the leading WordPress development company in Texas. We design, code, and optimize WordPress sites built to convert."
        url={`${webUrl}/wordpress-development`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner wordpress-herobanner-sec"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={herobanner}
          title="Choose WordPress Development to Bring Your Business Online"
          description="Develop websites that look brilliant, work lightning fast, and bring in real sales for your Texas business. At Texas Web Studios, we combine creativity with advanced WordPress tech to deliver WordPress development services in Texas that your competitors can only dream of. As America’s top WordPress development choice, we offer:"
          listdownpara="For the world, proudly made in Texas!"
          btntxt="Develop Your Website"
        />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection domain-register-choose wordpress-about-sec"
          reverse
          miniheadclass="shorttop-head"
          minihead="What We Do"
          secTitle1="Empowering Business with"
          secTitle2="Expert WordPress Development in Texas"
          description="In simple words, what we do, others can’t! As a leading WordPress website development company in Texas, we mix creativity and technology to design platforms that are incredibly easy to navigate, load faster than you blink, and consistently drive higher conversions by:"
          whyChooseList={[
            "Great web design that increases sales by up to 60%",
            "Faster loading speed that improves conversions by over 45%",
          ]}
          videoSrc={aboutvideo}
          description2="If you’re looking for a web development solution, WordPress with Texas Web Studios is the best way forward!"
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Us"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <WordpressServices />

        <WordpressProcess />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection domain-register-choose wordpress-choose-sec"
          miniheadclass="shorttop-head"
          minihead="Why Choose Us"
          secTitle1="Driven by Results, Trusted by Americans"
          description="Our custom WordPress development services in Texas truly make an impact. What sets us apart is our precision-driven process, commitment to transparency, and results that speak louder than promises. Here’s why businesses across Texas trust us:"
          whyChooseList={[
            "No-Code to Low-Code Development",
            "Custom and Pre-Build Web Designs",
            "SEO, AEO, GEO optimized",
            "Secure, scalable, and lightning-fast performance on every screen",
          ]}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Get Free Consultations"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <WordpressPortfolio />


         <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection domain-register-choose wordpress-another-sec"
          miniheadclass="shorttop-head"
          minihead=""
          secTitle1="Fast, Responsive, and Built to Showcase Your Business to the Globe"
          description="We carry the Texas spirit into every website we build, bold, strong, and built to last. Our WordPress development process is focused on global quality, driven by local pride and craftsmanship."
          image={wordpressanother}
          whyChooseList={[
            "Enterprise-grade development",
            "Conversion-optimized design",
            "Texas-based developers with global reach",
            "Intuitive Frontend",
            "Powerful Backend",
          ]}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Let’s Build Something World-Class"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />


         <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Connect With Us"
          mainhead="Get in Touch with Our Backend Experts"
          secPara="Have a question? Want to show us your project? Or simply curious? Fill out the form and talk to us, and we’ll show you what WordPress can do for you!"
          btntxt="Fill out the Form"
        />

        <BookCallSec
          title="Use WordPress to Grow Your Business"
          btnText="Book a Call"
        />

        <BlogSec 
          minihead="Blogs & Articles"
          secTitle="Get All Tech-Related News Here"
        />



      </DefaultLayout>
    </>
  );
};

export default WordpressDevelopment;
