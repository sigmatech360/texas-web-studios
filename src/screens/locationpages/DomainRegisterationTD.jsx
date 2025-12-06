import React from "react";
import ReactHelmet from "../../components/ReactHelmet";
import InnerBanner from "../../components/InnerBanner";
import DefaultLayout from "../../components/DefaultLayout";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import LocationSupport from "../../components/LocationSupport/Index";
import support1 from "../../assets/images/locationpages/wordpress-development-dallas/gurrantee.svg";
import support2 from "../../assets/images/locationpages/wordpress-development-dallas/support.svg";
import support3 from "../../assets/images/locationpages/wordpress-development-dallas/ownership.svg";
import support4 from "../../assets/images/locationpages/wordpress-development-dallas/money.svg";
import support5 from "../../assets/images/locationpages/wordpress-development-dallas/Pentool.svg";
import LocationContact from "../../components/LocationContact";
import LocationFaqs from "../../components/LocationFaqs";
import mobileAppDevBanner from "../../assets/images/locationpages/domain-registeration-dallas/herobanner.webp";
import aboutimg from "../../assets/images/locationpages/domain-registeration-dallas/aboutimg.webp";
import expertise1 from "../../assets/images/locationpages/domain-registeration-dallas/expertise1.svg";
import expertise2 from "../../assets/images/locationpages/domain-registeration-dallas/expertise2.svg";
import expertise3 from "../../assets/images/locationpages/domain-registeration-dallas/expertise3.svg";
import LocalSpecialist from "../../components/LocalSpecialist";
import LocationExpertise from "../../components/LocationExpertise";

const webUrl = import.meta.env.VITE_WEB_URL;

const DomainRegisterationTD = () => {
  const supportCardsData = [
    { image: support1, title: "Satisfaction Guaranteed" },
    { image: support2, title: "24/7 Customer Support" },
    { image: support3, title: "Ownership Rights" },
    { image: support4, title: "Money Back Guarantee" },
    { image: support5, title: "Industry-Specific Experts" },
  ];

  const expertise = [
    {
      img: expertise1,
      title: "Local Expert Guidance",
      desc: "Our Dallas-based experts help you pick, secure, and register the perfect domain name for your business.",
    },
    {
      img: expertise2,
      title: "Fast and Easy Setup",
      desc: "Enjoy quick approvals, easy management, and instant access so your domain is ready to go live fast.",
    },
    {
      img: expertise3,
      title: "Strong Domain Protection",
      desc: "We safeguard your domain with strong security measures to prevent unauthorized access or ownership issues.",
    },
  ];

  const faqsData = [
    {
      header: "How do I register a domain in Dallas, TX?",
      content:
        "Choose your preferred domain name, check availability, and complete the payment. Our team handles the setup and activates your domain quickly.",
    },
    {
      header: "Can I transfer my existing domain to Texas Web Studios?",
      content:
        "Yes, our specialists make the transfer process smooth and secure. You’ll maintain full access while we handle the technical steps.",
    },
    {
      header: "How long does domain registration take?",
      content:
        "Most domains activate instantly after registration. You’ll receive confirmation and full account access to start managing your site right away.",
    },
    {
      header: "Are your domain registration services secure?",
      content:
        "Yes, our domain registration services in Dallas, TX, use advanced encryption and monitoring tools to keep your domain fully protected.",
    },
    {
      header: "Can I buy multiple domains in Dallas, TX?",
      content:
        "Absolutely! You can buy a domain name in Dallas, TX, for multiple projects or brand extensions. We offer flexible and affordable packages.",
    },
    {
      header: "Do you offer support after registration?",
      content:
        "Yes, our 24/7 support team is always available for any questions, renewals, or troubleshooting help you might need.",
    },
  ];

  const specialData = [
    {
      header: "Specialists Who Understand Local Markets",
      content:
        "Our specialists understand Dallas industries, customer trends, and the value of strong brand visibility. They help you find a name that fits your audience and strengthens your online identity.",
    },
    {
      header: "Quick and Effortless Domain Purchase",
      content:
        "Our platform makes it simple to buy a domain name in Dallas, TX, with a guided process that’s easy to follow. Get instant confirmation, simple controls, and complete ownership access right away.",
    },
    {
      header: "Reliable and Secure Domain Management",
      content:
        "As one of the leading domain providers in Dallas, TX, we offer reliable hosting, strong uptime, and complete protection. Your domain remains secure and always under your full ownership.",
    },
    {
      header: "Clear Pricing and Lasting Value",
      content:
        "Our transparent pricing ensures there are no surprises. Whether registering a new domain or renewing an existing one, you’ll always receive fair value and premium support.",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="Domain Registration Services in Dallas, Texas "
        description="Get fast, secure, and professional domain registration services in Dallas, TX with Texas Web Studios. Register or buy your domain easily and take your online business to the next level."
        url={`${webUrl}/domain-registeration-dallas`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={mobileAppDevBanner}
          title=" Register a Domain in Dallas, TX, the Smart Way!"
          description="Domain registration in Dallas, TX, is now faster, simpler, and more secure! At Texas Web Studios, we help you claim your digital identity easily with our domain registration services in Dallas, TX, that are built to empower local businesses and create lasting online credibility for your brand."
          btntxt="Let’s Start Your Registration!"
        />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection domain-register-choose registeraiton-location-choose"
          reverse
          minihead="Why Choose Us?"
          miniheadclass="shorttop-head"
          secTitle1="Why We are Your"
          secTitle2="Best Domain Solution in Dallas, TX?"
          description="With over a decade of experience and hundreds of successful online projects, we understand what works for Dallas-based businesses. Our team of professionals ensures that every domain name registration in Dallas, TX is quick, efficient, and built around your unique goals."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Get a Quality Domain"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <LocationExpertise
          shortTopHead="Our Edge"
          mainHead="The Best Domain Registration Service in Dallas, TX"
          mainPara1="Our years of experience in domain registration services in Dallas, TX, have helped countless businesses secure meaningful domains that strengthen their online presence. From first-time registrations to domain transfers and web management, we make sure your brand always stays visible and protected."
          expertiseItems={expertise}
        />

        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Find the Right Domain Plan for Your Brand"
          secPara="Choose a package that matches your goals and simplifies how you register a domain in Dallas, TX. Select from our affordable plans and start your digital journey confidently with Texas Web Studios."
          tabsData={dynamictabsData}
        /> */}

        <LocalSpecialist
          mainHeading="Secure A Powerful Domain in Dallas Now With Us! "
          description="You deserve a service that combines speed, precision, and reliability when you register a domain in Dallas, TX. We deliver a smooth registration experience backed by expert support and trusted systems built for your business success."
          expertise={specialData}
        />

        <LocationSupport
          minihead="Secure Your Domain"
          mainheadSpan="Let’s Get Your Dallas"
          mainhead="Business Online Today!"
          mainPara="Start your online presence strong with professional domain registration services in Dallas, TX, from Texas Web Studios"
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Contact Us"
          mainhead="Register Your Domain in Dallas, TX, Now!"
          secPara="Get in touch with our digital experts in Dallas, TX, for personalized help and quick domain registration support. Fill out the form, and we’ll contact you soon!"
          btntxt="Send Message!"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Got Questions? We’re Here to Help You Out!"
          secPara="We’re here to guide you through everything related to domain registration in Dallas, TX, from setup to renewals and transfers."
          faqsData={faqsData}
        />
      </DefaultLayout>
    </>
  );
};

export default DomainRegisterationTD;
