import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import innerimg from "../../assets/images/services/domaintransfer/herobanner-inner-img.webp";
import aboutimg from "../../assets/images/services/domaintransfer/aboutimg.webp";
import chooseimg from "../../assets/images/services/domaintransfer/chooseimg.webp";
import process1 from "../../assets/images/services/domaintransfer/process-1.webp";
import process2 from "../../assets/images/services/domaintransfer/process-2.webp";
import process3 from "../../assets/images/services/domaintransfer/process-3.webp";
import process4 from "../../assets/images/services/domaintransfer/process-4.webp";
import domainsearch from "../../assets/images/services/domaintransfer/domainsearch.svg";
import dns from "../../assets/images/services/domaintransfer/dns.svg";
import dotcomnet from "../../assets/images/services/domaintransfer/dotcom-net.svg";
import renewalcheck from "../../assets/images/services/domaintransfer/renewal-check.svg";
import privacy from "../../assets/images/services/domaintransfer/privacy.svg";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainRegisterationServices from "../../components/DomainRegisterationServices";
import TransferSupport from "../../components/TransferSupport";
import DomainTransferProcess from "../../components/DomainTransferProcess";
import LocationContact from "../../components/LocationContact";
import BlogSec from "../../components/BlogSec";

const DomainTransfer = () => {

  const frontendservices = [
    {
      img: domainsearch,
      title: "Web Hosting",
      para: "Offering secure and reliable hosting plans that keep your website running smoothly all year long in its optimal performance.",
    },
    {
      img: dns,
      title: "Website Design",
      para: "Custom website design that blends creativity with functionality, ensuring your site looks great and performs even better.",
    },
    {
      img: dotcomnet,
      title: "Website Design",
      para: "Custom website design that blends creativity with functionality, ensuring your site looks great and performs even better.",
    },
    {
      img: renewalcheck,
      title: "Custom Website Development",
      para: "We create custom web solutions built for your business goals, ensuring scalability, security, and exceptional performance.",
    },
    {
      img: privacy,
      title: "DevOps Services",
      para: "Streamlined development and deployment solutions that boost efficiency, reduce errors, and keep your systems running optimally.",
    },
  ];

  return (
    <>
      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner domain-transfer-herobanner"
          leftCol="col-lg-8 order-lg-1 order-2"
          rightCol="col-lg-4 order-lg-2 order-1"
          bannerImg={innerimg}
          title="Build Your Digital Identity with a Strong Domain Name from the Ground Up"
          description="Every brand begins with a strong and memorable name. Our domain registration services in Texas help you secure a unique online identity that speaks for your brand. From checking availability to instant setup, we make buying your domain name a simple and confident start."
          btntxt="Register Your Domain"
        />

        <WordPressPerformanceSection
          miniheadclass="shorttop-head"
          leftCol="col-lg-7"
          rightCol="col-lg-5"
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
          learnmorebtn="theme-btn"
        />

        <DomainRegisterationServices
          CardCol="col-lg-4 col-md-6"
          CardClass="text-center"
          shortHead="More of Our Services"
          mainHead="A Complete Web Experience in Texas"
          description="Everything you need to turn your new domain into a complete web experience that includes everything from web hosting to server management."
          btnText="Consult A Web Expert"
          btnLink="/contact"
          services={frontendservices}
        />


         <TransferSupport
          TransportSecClass="domaintransfer-support-sec" 
          shortTopHead="Support & Maintenance"
          mainHead="Backing Up Your Digital Experience"
          paraOne="We offer support and maintenance till the end of your web development project. Starting from getting a domain name of your choice and never ending with web and server maintenance, we love to support our web partners within and beyond our limits."
          paraTwo="Call us anytime and get the backup you deserve at Texas Web Studios."
          buttonText="Get Support Now"
        />

        <DomainTransferProcess/>
        

         <LocationContact
          secClass="ecommerce-contact-sec"
          minihead="Contact Us"
          mainhead="Let’s Get Your Domain Registered Today"
          secPara="Got questions or need expert help choosing your domain? Reach out now, and our team will happily guide you every step."
          btntxt="Send Message"
        />

        <BlogSec />



      </DefaultLayout>
    </>
  );
};

export default DomainTransfer;
