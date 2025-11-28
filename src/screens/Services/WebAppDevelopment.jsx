import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import herobanner from "../../assets/images/services/webappdevelopment/herobanner.webp";
import aboutimg from "../../assets/images/services/webappdevelopment/aboutimg.webp";
import afteraboutimg from "../../assets/images/services/webappdevelopment/afteraboutimg.webp";
import chooseimg1 from "../../assets/images/services/webappdevelopment/chooseimg1.webp";
import chooseimg2 from "../../assets/images/services/webappdevelopment/chooseimg2.webp";
import chooseimg3 from "../../assets/images/services/webappdevelopment/chooseimg3.webp";
import chooseimg4 from "../../assets/images/services/webappdevelopment/chooseimg4.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import WebAppDevelopmentServices from "../../components/WebAppDevelopmentServices";
import WebAppRelatedServices from "../../components/WebAppRelatedServices";
import BackendProcess from "../../components/BackendProcess";
import WebAppPortfolio from "../../components/WebAppPortfolio";
import BookCallSec from "../../components/BookCallSec";
import LocationContact from "../../components/LocationContact";
import BlogSec from "../../components/BlogSec";
import WebAppDevelopmentChooseUs from "../../components/WebAppDevelopmentChooseUs";
import ReactHelmet from "../../components/ReactHelmet";

const webUrl = import.meta.env.VITE_WEB_URL;

const WebAppDevelopment = () => {


  const backendprocessdata = [
    {
      number: "01",
      title: "Design That Engages",
      text: "Great design isn’t pretty; it’s profitable. With intuitive UI, smooth navigation, and mobile-friendly layouts, your web app keeps users engaged from the first click to the final conversion.",
    },
    {
      number: "02",
      title: "Development Built for Speed and Scalability",
      text: "Your app is engineered with clean code, modern frameworks, and scalable architecture, so it performs fast today and grows effortlessly with your business tomorrow.",
    },
    {
      number: "03",
      title: "Testing That Eliminates Every Glitch",
      text: "We are here to ensure your web app runs smoothly everywhere. No bugs, not even glitches, just flawless user experiences every time.",
    },
    {
      number: "04",
      title: "Deployment That Feels Like Magic",
      text: "We handle staging, server setups, version control, and live rollout with precision. Your app goes live flawlessly, without downtime or disruption.",
    },
    {
      number: "05",
      title: "Security That Never Sleeps",
      text: "Your web app is protected with encrypted data flows, secure authentication, firewall rules, and continuous monitoring, built to block threats before they get close.",
    },
    {
      number: "06",
      title: "Maintenance That Keeps You Winning",
      text: "With ongoing updates, feature enhancements, performance monitoring, and real-time support, your web app stays fast, healthy, and future-ready long after launch.",
    },
  ];



  return (
    <>
      <ReactHelmet
        title="Web App Development in Texas"
        description="Build fast, high-performing web apps with Texas Web Studios. We develop modern, mobile-like web apps that load instantly, scale easily, and deliver flawless user experiences."
        url={`${webUrl}/web-app-development`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner webapp-development-sec"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={herobanner}
          title="Build Web Apps That Feel Just Like Mobile Apps"
          description="If your website feels chunky, slow, or outdated, it’s time for an upgrade! With Texas Web Studios’ web app development services in Texas, let’s deploy websites that load faster than you blink, that respond instantly to every click, and that keep users hooked to the screen from login to checkout."
          serviceparatwo="When websites grow up, they become web apps! "
          btntxt="Develop Web Apps"
        />

        <WordPressPerformanceSection
          reverse
          minihead="Faster, Smoother, Better"
          miniheadclass="shorttop-head"
          secTitle1="Meet the Website of the Future"
          description="The internet is growing faster than ever, and with it, websites aren’t just websites anymore. They’re expected to feel like mobile apps, respond instantly, animate smoothly, and keep users engaged without a single hiccup. That’s why at Texas Web Studios, we build modern web applications that are faster, better, more agile, and more vibrant than anything traditional development can offer. With our web app development agency in Texas, you get dynamic, scalable, and high-performing web apps tailored to support your growth, your customer experience, and your future digital needs."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Revamp Your Website to a Web App"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <section className="webapp-afterabout">
          <img src={afteraboutimg} alt="image" />
        </section>

        <WebAppDevelopmentServices />

        <WebAppDevelopmentChooseUs />

        <WebAppRelatedServices />

        <BackendProcess
          processCardclass="webapp-process-card"
          shortTopHead="Advantages"
          mainHead="The Best Kind of Sites"
          cards={backendprocessdata}
        />

        <WebAppPortfolio />

        <BookCallSec
          title="Got an Idea? We’ve Got the Right Developers"
          btnText="Book a Call"
        />

        <LocationContact
          secClass="ecommerce-contact-sec"
          minihead="Connect With Us"
          mainhead="Start Your Web App Development Project Today"
          secPara="Have an idea? A half-built project? A wild concept scribbled on a napkin? Send it our way. We’ll turn it into a web app that works, and works brilliantly."
          btntxt="Send Message"
        />

        <BlogSec 
          minihead="Blogs & Articles"
          secTitle="Insights Related to Websites, Web Apps, and More"
        />
      </DefaultLayout>
    </>
  );
};

export default WebAppDevelopment;
