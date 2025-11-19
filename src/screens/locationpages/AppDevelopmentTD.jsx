import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import mobileAppDevBanner from "../../assets/images/locationpages/app-development-dallas/herobanner.webp";
import gooddesign from "../../assets/images/locationpages/app-development-dallas/gooddesignbg.webp";
import support1 from "../../assets/images/locationpages/wordpress-development-dallas/gurrantee.svg";
import support2 from "../../assets/images/locationpages/wordpress-development-dallas/support.svg";
import support3 from "../../assets/images/locationpages/wordpress-development-dallas/ownership.svg";
import support4 from "../../assets/images/locationpages/wordpress-development-dallas/money.svg";
import support5 from "../../assets/images/locationpages/wordpress-development-dallas/Pentool.svg";
import aboutimg from "../../assets/images/locationpages/app-development-dallas/aboutimg.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/app-development-dallas/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/app-development-dallas/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/app-development-dallas/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/app-development-dallas/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/app-development-dallas/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/app-development-dallas/portfolio-6.webp";
import LocationSupport from "../../components/LocationSupport/Index";
import LocationContact from "../../components/LocationContact";
import LocationFaqs from "../../components/LocationFaqs";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import Lightbox from "yet-another-react-lightbox";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import ReactHelmet from "../../components/ReactHelmet";

const webUrl = import.meta.env.VITE_WEB_URL;

const AppDevelopmentTD = () => {
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
        "What makes Texas Web Studios the top mobile app development agency in Dallas, TX?",
      content:
        "We build apps that perform, not just exist. Our Dallas team focuses on innovation, speed, and measurable business results.",
    },
    {
      header: "Do you offer custom mobile app development services in Dallas, TX?",
      content:
        "Yes, our custom solutions are built around your goals, from design to launch, every feature serves your business.",
    },
    {
      header: "Do you develop both iOS and Android apps?",
      content:
        "Yes, we develop both Android and iOS applications, and that’s not all. We also build powerful cross-platform apps for businesses that want one solution, not two.",
    },
    {
      header:
        "How long does app development take?",
      content:
        "It actually depends upon the project. Most apps take 8-16 weeks from design to deployment, depending on size and features. For larger apps or ERP solutions, we create a detailed roadmap by breaking the project into sprints. This way, development stays transparent, and you can see your app come to life with every implementation phase clearly demonstrated.",
    },
    {
      header: "Do you offer post-launch support?",
      content:
        "Yes, post-launch support is critical for an app to perform flawlessly. We provide ongoing updates, maintenance, and performance optimization to keep your app ahead.",
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
    { image: support3, title: "Your App, You Own It!" },
    { image: support4, title: "54% Increase in Sales" },
    { image: support5, title: "Build for Growth" },
  ];

  return (
    <>
      <ReactHelmet
        title="App Development in Dallas, TX"
        description="Texas Web Studios, a leading design and development company in USA, delivers App Development solutions in Dallas, TX, built to perform, engage users, and drive measurable results."
        url={`${webUrl}/app-development-dallas`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={mobileAppDevBanner}
          title="Mobile Apps Developed to Dominate in Dallas, Texas"
          description="We build the kind of apps that users can’t put down and competitors can’t keep up! At Texas Web Studios, every app begins with one question: how can it move your business forward? Our app development company in Dallas, TX, deploys sleek, scalable, and conversion-driven solutions that turn your ideas into measurable growth."
          serviceparatwo="Designed with precision, built for performance, and engineered to win, all for Dallas, in Dallas!"
          btntxt="Let’s Go Unstoppable"
        />

        <WordPressPerformanceSection
          reverse
          minihead="Why Choose Us?"
          miniheadclass="shorttop-head"
          secTitle1="Because Our Apps"
          secTitle2="Build Businesses"
          description="Mobile apps are shown to increase sales by 54%, and we make sure to target that percentage, building apps so powerful that people don’t just download them, they keep coming back. At Texas Web Studios, our custom mobile app development in Dallas, TX, focuses on performance, conversion, and experience. Every tap, swipe, and interaction is engineered to turn users into loyal customers and your app into a profit machine."
          descriptionspantwo="“Just another app” "
          descriptiontwo="isn’t our vibe; we build growth engines!"
          image={aboutimg}
          listClass="d-none"  
          TouchBtn="d-none"
          btntext="Click Here to Increase Sales by 54%"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Texas-Built Apps That Mean Business"
          secDescription="Scroll down to see what innovation looks like, sleek UIs, high-performance UXs, and mobile apps that turned ideas into income. Every project is proof that great design and flawless engineering can coexist beautifully."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <TabsPricing
          minihead="Pricing Plans"
          mainhead="Smart Pricing to Power Serious Growth"
          secPara="Discover your mobile app development cost in Dallas, TX, with plans that strike a balance between innovation, scalability, and ROI."
          tabsData={dynamictabsData}
        />

        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-7 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={gooddesign}
          title="Android & iOS, We Reign on Both Tech-Stacks!"
          description="If you think a good app is expensive, you haven’t seen a bad one! A high-performing iOS or Android app development in Dallas, TX, may require an upfront investment, but it always pays back in increased engagement, downloads, and long-term growth. A poorly built app, on the other hand, may cost less today but lose users tomorrow."
          serviceparatwo="At Texas Web Studios, we know that, thus, we build smarter. Whether it’s an Android app or an iOS app development in Dallas, TX, we deploy for speed, stability, and scalability, so instead of costing you sales, they create them."
          btnClass="d-none"
        />

        <LocationSupport
          minihead="Best in the Business"
          mainheadSpan="Engineered by the Best"
          mainhead="Approved by Dallas, TX"
          mainPara="Others might be here to compete. We’re Here to Lead!"
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Let’s Connect"
          mainhead="Talk About Your Next Big Break with Us!"
          secPara="Big projects need big tech giants! And if you have an idea, let’s deploy an app that your customers won’t stop tapping!"
          btntxt="Fill out the Form"
        />

        <LocationFaqs
          minihead="FAQS"
          mainhead="Get All Your App-Related Queries Answered Here!"
          secPara="If you don’t find what you’re looking for here, fill out the contact form, and we’re sure you’ll get everything related to custom mobile app development services in Dallas, TX, over there!"
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
  );
};

export default AppDevelopmentTD;
