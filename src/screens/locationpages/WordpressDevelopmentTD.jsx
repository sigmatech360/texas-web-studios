import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import mobileAppDevBanner from "../../assets/images/locationpages/wordpress-development-dallas/herobanner.webp";
import gooddesign from "../../assets/images/locationpages/wordpress-development-dallas/gooddesignbg.webp";
import support1 from "../../assets/images/locationpages/wordpress-development-dallas/gurrantee.svg";
import support2 from "../../assets/images/locationpages/wordpress-development-dallas/support.svg";
import support3 from "../../assets/images/locationpages/wordpress-development-dallas/ownership.svg";
import support4 from "../../assets/images/locationpages/wordpress-development-dallas/money.svg";
import support5 from "../../assets/images/locationpages/wordpress-development-dallas/Pentool.svg";
import aboutimg from "../../assets/images/locationpages/wordpress-development-dallas/aboutimg.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/wordpress-development-dallas/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/wordpress-development-dallas/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/wordpress-development-dallas/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/wordpress-development-dallas/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/wordpress-development-dallas/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/wordpress-development-dallas/portfolio-6.webp";
import PackagesSec from "../../components/PackagesSec";
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

const WordpressDevelopmentTD = () => {
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
        "How long will my WordPress site take?",
      content:
        "It actually depends upon the complexity of your project; however, most projects take 4-6 weeks. Once you get on board with us, we’ll provide you with a clear timeline before we start.",
    },
    {
      header: "Do you build custom websites or use themes?",
      content:
        "Both. We build websites according to your needs and goals. If you need a drag-and-drop website, we do that, and if you need a custom platform, we build that for you ,too.",
    },
    {
      header: "Will my site be optimized for SEO and speed?",
      content:
        "Yes, we build for performance, visibility, and lightning-fast load times. Your WordPress website will be optimized so it loads and leads.",
    },
    {
      header:
        "Can you update or fix my existing website?",
      content:
        "Absolutely. We can upgrade, redesign, or maintain your current WordPress website setup in Dallas.",
    },
    {
      header: "Why choose Texas Web Studios?",
      content:
        "We are the top WordPress development company in Dallas, chosen by Americans for all their web development needs.",
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
    { image: support1, title: "100% Satisfaction" },
    { image: support2, title: "Round-the-Clock Customer Support" },
    { image: support3, title: "You Own it, 100%" },
    { image: support4, title: "Stunning and affordable" },
    { image: support5, title: "Build for Your Business" },
  ];

  return (
    <>
      <ReactHelmet
        title=" WordPress Development Dallas, TX"
        description="Develop and deploy custom WordPress Development in Dallas, TX, that is fast, scalable, and always online, generating sales for your brand."
        url={`${webUrl}/wordpress-development-dallas`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={mobileAppDevBanner}
          title="Start Selling Smartly with WordPress Development in Dallas, TX"
          description="Great websites aren’t built by chance; they’re built by experts who understand code, design, and the psychology of conversion. At Texas Web Studios, we balance design with development to creating WordPress websites that look minimalistic, load quickly, and convert effortlessly!"
          serviceparatwo="Your business isn’t generic. Your website shouldn’t be either. Click now!"
          btntxt="Get one Build for You"
        />

        <WordPressPerformanceSection
          reverse
          minihead="Why Choose Us"
          miniheadclass="shorttop-head"
          secTitle1="Your Competitors Build Websites"
          secTitle2="We Build Leverage"
          description="Because great design is only half the story, performance is the rest.
          With over two decades of combined experience, our team of WordPress development services in Dallas builds what your business needs. Every website is tailored for speed, SEO, and conversion; a digital foundation that doesn’t just represent your brand, but amplifies it."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Explore More"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Swipe Through WordPress Websites We’ve Built"
          secDescription="When a website is built right, it doesn’t just exist; it leads. From sleek eCommerce builds to complex corporate platforms, our WordPress website development in Dallas, TX  delivers work that looks exceptional and functions flawlessly."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <TabsPricing
          minihead="Pricing Plans"
          mainhead="Invest Smart and Scale Fast with Flexible Pricing"
          secPara="It’s your business; the more care you give, the more it will grow. Invest in the right plan today, and watch your brand flourish online."
          tabsData={dynamictabsData}
        />

        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-7 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={gooddesign}
          title="WordPress Developed to Dominate"
          description="We can do templates. We can also build frameworks.
          But whatever we do, our WordPress development in Dallas, TX, focuses on speed, usability, and technical depth, not just design trends. Every site is optimized for content, usability, and scalability, ensuring it scales effortlessly as your business grows."
          serviceparatwo="Partner with Texas Web Studios, and gain more than just a website - get a strategic asset built to outperform competitors and future-proof your digital presence."
          btntxt="Get Free Consultation"
        />

        <LocationSupport
          minihead="No One Does it Better"
          mainheadSpan="Defined by Trust"
          mainhead="Driven by Results"
          mainPara="Rated among the top WordPress development agencies in Dallas, TX, our promise goes beyond building beautiful websites; we deliver measurable, long-term results backed by trust and transparency. "
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Let’s Connect"
          mainhead="You’ve Got the Vision. We’ve Got the Code."
          secPara="Big ideas deserve precision and flawless execution. You have the idea, we know the goal, together we can help you reach the heights you want to be. Whether you’re launching a bold new concept, rebuilding what’s not working, or scaling beyond that portfolio website, our WordPress development services team in Dallas knows how to turn potential into performance."
          secParatwo="Either you need one with a template or with the tech, we do clarity, strategy, and clean, conversion-ready builds. "
          btntxt="Talk to Us"
        />

        <LocationFaqs
          minihead="Frequently Asked Questions"
          mainhead="Before You Google, Ask Us."
          secPara="Boost your website’s visibility and organic search rankings with our SEO strategies. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
          faqs={faqsData}
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

export default WordpressDevelopmentTD;
