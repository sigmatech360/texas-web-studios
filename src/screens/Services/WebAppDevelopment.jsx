import React from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import InnerBanner from '../../components/InnerBanner'
import herobanner from "../../assets/images/services/webappdevelopment/herobanner.webp"
import aboutimg from "../../assets/images/services/webappdevelopment/aboutimg.webp"
import afteraboutimg from "../../assets/images/services/webappdevelopment/afteraboutimg.webp"
import chooseimg1 from "../../assets/images/services/webappdevelopment/chooseimg1.webp"
import chooseimg2 from "../../assets/images/services/webappdevelopment/chooseimg2.webp"
import chooseimg3 from "../../assets/images/services/webappdevelopment/chooseimg3.webp"
import chooseimg4 from "../../assets/images/services/webappdevelopment/chooseimg4.webp"
import WordPressPerformanceSection from '../../components/WordPressPerformanceSection'
import WebAppDevelopmentServices from '../../components/WebAppDevelopmentServices'
import WebAppRelatedServices from '../../components/WebAppRelatedServices'
import BackendProcess from '../../components/BackendProcess'
import WebAppPortfolio from '../../components/WebAppPortfolio'
import BookCallSec from '../../components/BookCallSec'
import LocationContact from '../../components/LocationContact'
import BlogSec from '../../components/BlogSec'
import WebAppDevelopmentChooseUs from '../../components/WebAppDevelopmentChooseUs'



const WebAppDevelopment = () => {


      const backendprocessdata = [
    {
      number: "01",
      title: "Discovery & Strategy",
      text: "We begin by understanding your business model, technical goals, and digital ecosystem. Our strategists and architects design a custom backend blueprint tailored to your needs, setting the foundation for efficient, scalable, and secure development.",
    },
    {
      number: "02",
      title: "Development & Integration",
      text: "Our skilled developers bring your backend to life with precision coding in Node.js, PHP, or the most suitable technology stack. We integrate APIs, build data models, and ensure every layer communicates seamlessly for optimal performance.",
    },
    {
      number: "03",
      title: "Testing & Optimization",
      text: "Every system undergoes rigorous Quality Assurance. We analyze speed, functionality, and security to ensure your backend exceeds modern standards. Our optimization process guarantees smooth scalability under real-world conditions.",
    },
    {
      number: "04",
      title: "Deployment & Ongoing Support",
      text: "Once your backend is launched, our work continues. We offer ongoing support, server monitoring, and regular maintenance to ensure your backend development services in Texas evolve with your business while maintaining peak efficiency.",
    },
  ];

  return (
    <>
    <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner webapp-development-sec"
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

        <section className="webapp-afterabout">
            <img src={afteraboutimg} alt="image" />
        </section>


        <WebAppDevelopmentServices/>


        <WebAppDevelopmentChooseUs/>

        <WebAppRelatedServices/>


         <BackendProcess
          processCardclass="webapp-process-card"
          shortTopHead="Our Process"
          mainHead="Our Strategic Path to Building Better Backends"
          cards={backendprocessdata}
        />


        <WebAppPortfolio/>

        <BookCallSec
          title="Let’s Discuss Your Business Goals"
          btnText="Book a Call"
        />


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
  )
}

export default WebAppDevelopment