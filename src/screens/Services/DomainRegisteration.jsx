import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import innerimg from "../../assets/images/services/domainresgisteration/herobanner-inner-img.webp";
import aboutimg from "../../assets/images/services/domainresgisteration/aboutimg.webp";
import chooseimg from "../../assets/images/services/domainresgisteration/chooseimg.webp";
import readyimg from "../../assets/images/services/domainresgisteration/readyimg.webp";
import renewimg from "../../assets/images/services/domainresgisteration/renewimg.webp";
import webhostingicon from "../../assets/images/services/domainresgisteration/webhosting.svg";
import webdesignicon from "../../assets/images/services/domainresgisteration/webdesign.svg";
import customicon from "../../assets/images/services/domainresgisteration/customwebsitedevelopment.svg";
import devopservices from "../../assets/images/services/domainresgisteration/devopservices.svg";
import DomainSearchPrice from "../../components/DomainSearchPrice";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainRegisterationServices from "../../components/DomainRegisterationServices";
import HostingBoxes from "../../components/HostingBoxes";
import TransferSupport from "../../components/TransferSupport";
import DomainRegisterProcess from "../../components/DomainRegisterProcess";
import LocationContact from "../../components/LocationContact";
import BlogSec from "../../components/BlogSec";
import Lightbox from "yet-another-react-lightbox";
import ReactHelmet from "../../components/ReactHelmet";

const webUrl = import.meta.env.VITE_WEB_URL;

const DomainRegisteration = () => {
  const frontendservices = [
    {
      img: webhostingicon,
      title: "Web Hosting",
      para: "Offering secure and reliable hosting plans that keep your website running smoothly all year long in its optimal performance.",
    },
    {
      img: webdesignicon,
      title: "Website Design",
      para: "Custom website design that blends creativity with functionality, ensuring your site looks great and performs even better.",
    },
    {
      img: customicon,
      title: "Custom Website Development",
      para: "We create custom web solutions built for your business goals, ensuring scalability, security, and exceptional performance.",
    },
    {
      img: devopservices,
      title: "DevOps Services",
      para: "Streamlined development and deployment solutions that boost efficiency, reduce errors, and keep your systems running optimally.",
    },
  ];

  const processData = {
    minihead: "Our Process",
    mainhead: "From Idea to Domain in Minutes",
    mainpara:
      "Domain registration at Texas Web Studios is a guided process that gets your domain live without any confusion or delays.",
    steps: [
      {
        number: "01",
        title: "Search Your Perfect Domain",
        description:
          "Use our tool to find available names that fit your brand.",
      },
      {
        number: "02",
        title: "Register Instantly",
        description:
          "Secure your domain with quick, verified registration in just a few clicks.",
      },
      {
        number: "03",
        title: "Set Up Hosting",
        description:
          "Select a reliable hosting provider to launch your website promptly.",
      },
      {
        number: "04",
        title: "Manage with Ease: ",
        description:
          "Access your control panel to renew, transfer, or update anytime..",
      },
    ],
  };

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
        title="Domain Registration Services in Texas"
        description="Get reliable domain registration services at Texas Web Studios. Buy your domain name, register it instantly, and even transfer your existing site with ease."
        url={`${webUrl}/domain-registeration`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner domain-registeration-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bannerImg={innerimg}
          title="Build Your Digital Identity with a Strong Domain Name from the Ground Up"
          description="Every brand begins with a strong and memorable name. Our domain registration services in Texas help you secure a unique online identity that speaks for your brand. From checking availability to instant setup, we make buying your domain name a simple and confident start."
          btntxt="Register Your Domain"
        />

        {/* <DomainSearchPrice /> */}

        <WordPressPerformanceSection
          reverse
          miniheadclass="shorttop-head"
          minihead="About Us"
          secTitle1="The Foundation of Your"
          secTitle2="Digital Glow Up"
          description="We’re a Texas-based team helping businesses claim their place on the internet. Our expertise in domain registration, hosting, and web services ensures every entrepreneur and brand starts strong. With simple tools, expert support, and transparent pricing, we help you register, launch, and grow your online presence seamlessly."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About Us"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn"
        />

        <DomainRegisterationServices
          shortHead="More of Our Services"
          mainHead="A Complete Web Experience in Texas"
          description="Everything you need to turn your new domain into a complete web experience that includes everything from web hosting to server management."
          btnText="Consult A Web Expert"
          btnLink="/contact"
          services={frontendservices}
        />

        <WordPressPerformanceSection
          miniheadclass="shorttop-head"
          secTitle1="Want an Unforgettable"
          secTitle2="Domain Name?"
          description="Your domain name isn’t just a web address; it’s how your audience perceives you. With our trusted domain providers in Texas, you can register, manage, and renew your domain effortlessly. We help you in choosing high-quality domain names according to what your brand niche is and the regions you serve. "
          image={readyimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to a Web Expert"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <HostingBoxes />


        <TransferSupport
          shortTopHead="Support & Maintenance"
          mainHead="Backing Up Your Digital Experience"
          paraOne="We offer support and maintenance till the end of your web development project. Starting from getting a domain name of your choice and never ending with web and server maintenance, we love to support our web partners within and beyond our limits."
          paraTwo="Call us anytime and get the backup you deserve at Texas Web Studios."
          buttonText="Get Support Now"
        />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection domain-register-choose domain-unique-sec"
          reverse
          miniheadclass="shorttop-head"
          minihead="At Texas Web Studios"
          secTitle1="Because Your Brand Deserves"
          secTitle2="A Unique Domain"
          description="Our goal is to make domain registration in Texas simple and accessible for every growing business. For your convenience, we have hired professionals who provide fast set-up, use proficient tools to give you a smooth experience, and offer affordability so that no hustling business hesitates before reaching out to us. "
          whyChooseList={[
            "Instant Domain Activation",
            "24/7 Expert Support",
            "Transparent Pricing",
            "Easy Renewals & Transfers",
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Professionals"
          aboutbtnlink="/contact"
          learnmorebtn="d-none"
        />

        <DomainRegisterProcess {...processData} />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection domain-offer-sec"
          reverse
          leftCol="col-lg-7"
          rightCol="col-lg-5"
          miniheadclass="shorttop-head"
          secTitle1="Offering Domain Transfers for 360° Services"
          description="Beyond domain registration, we also provide domain transfer services in Texas. If you are looking to move your domain, it’s no issue, we have worked with several brands and smoothly transferred their brand from one domain to another. We handle all technical and on-page aspects and protect your brand data, so you keep growing with no stress to manage on the technical side. "
          image={renewimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Transfer Your Domain"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <LocationContact
          secClass="ecommerce-contact-sec"
          minihead="Contact Us"
          mainhead="Let’s Get Your Domain Registered Today"
          secPara="Got questions or need expert help choosing your domain? Reach out now, and our team will happily guide you every step."
          btntxt="Send Message"
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

export default DomainRegisteration;
