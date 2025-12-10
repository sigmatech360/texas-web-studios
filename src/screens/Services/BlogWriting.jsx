import React from 'react'
import ReactHelmet from '../../components/ReactHelmet'
import DefaultLayout from '../../components/DefaultLayout'
import InnerBanner from '../../components/InnerBanner';
import innerimg from "../../assets/images/services/blogwriting/herobanner-inner-img.webp";
import gowthimg from "../../assets/images/services/blogwriting/growthimg.webp";
import benefitimg from "../../assets/images/services/blogwriting/benefitimg.webp";
import BlogWriteAbout from '../../components/BlogWriteAbout';
import DomainRegisterationServices from '../../components/DomainRegisterationServices';
import voicespeaker from "../../assets/images/services/brandvoice/voicespeaker.svg";
import voicehandbook from "../../assets/images/services/brandvoice/voice-handbook.svg";
import messageing from "../../assets/images/services/brandvoice/messageing.svg";
import guidelines from "../../assets/images/services/brandvoice/guidelines.svg";
import BlogWritingWork from '../../components/BlogWritingWork';
import BlogWritingPower from '../../components/BlogWritingPower';
import WordPressPerformanceSection from '../../components/WordPressPerformanceSection';
import TabsPricing from '../../components/TabsPricing';
import { dynamictabsData } from '../../data';
import LocationContact from '../../components/LocationContact';
import BlogSec from '../../components/BlogSec';
import service1 from "../../assets/images/services/blogwriting/service1.svg";
import service2 from "../../assets/images/services/blogwriting/service2.svg";
import service3 from "../../assets/images/services/blogwriting/service3.svg";
import service4 from "../../assets/images/services/blogwriting/service4.svg";
import service5 from "../../assets/images/services/blogwriting/service5.svg";
import service6 from "../../assets/images/services/blogwriting/service6.svg";



const webUrl = import.meta.env.VITE_WEB_URL;

const BlogWriting = () => {

   const brandvoiceservices = [
      {
        img: service1,
        title: "Ghost Writing",
        para: "We write in your voice, delivering polished blogs that feel like you wrote them yourself.",
      },
      {
        img: service2,
        title: "How To Guides ",
        para: "Clear step-by-step blogs that teach, explain, and simplify complex topics for your audience.",
      },
      {
        img: service3,
        title: "Repurposing Content",
        para: "We turn old ideas into fresh, strategic content that fits multiple platforms.",
      },
      {
        img: service4,
        title: "SEO Blogs ",
        para: "Our blogs are designed to rank with a strong keyword strategy, clarity, and structure.",
      },
      {
        img: service5,
        title: "Professional Articles",
        para: "Insightful, well-researched pieces that make your brand look sharp and credible.",
      },
      {
        img: service6,
        title: "News and Trends",
        para: "Agile, timely content that helps your brand stay informed and ahead.",
      },
    ];
  


  return (
     <>
      <ReactHelmet
        title="Professional Blog Writing Services in Texas for Brands"
        description="Smart, SEO powered blog writing services that elevate your brand voice and boost visibility. Get creative, strategic, professional blogs tailored for growth."
        url={`${webUrl}/blog-writing`}
      />
      <DefaultLayout>
         <InnerBanner
          secClass="locate-wordpress-herobanner websitecontent-herobanner-sec"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bannerImg={innerimg}
          title="Add Real Value to Your Brand with Professional Blog Writing in Texas"
          description="Our blog writing services in Texas aim to build trust, enhance visibility, and strengthen your brand with real authority, which is why our blogs are fun to read, optimized for search, and perfectly aligned with your brand voice. Every article becomes a tool that builds engagement, drives traffic, and strengthens your digital presence."
          btntxt="Start Your Blog!"
        />

        <BlogWriteAbout/>


         <DomainRegisterationServices
          CardCol="col-lg-4 col-md-6"
          CardClass="brandvoice-service-card"
          shortHead="Our Blog Writing Includes"
          mainHead="What You Get From Our Blog Writers"
          description="Our blog writing agency in Texas is known to write for a wide range of industries and blog types. But whatever we write, we ensure that it resonates directly with your audience. Here are the services we hold expertise in: "
          services={brandvoiceservices}
        />


        <BlogWritingWork/>


        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection blogwriting-growth-sec"
          reverse
          miniheadclass="shorttop-head"
          secTitle1="Why You Should Get Blog Writing for"
          secTitle2="Digital Growth"
          description="Our blog writing and management in Texas fuels your digital identity. It boosts visibility, strengthens SEO, answers customer questions, builds trust, and drives users toward your products and services. With strategic blogs, you can grow faster, rank smarter, and show up as the expert your audience already expects you to be."
          image={gowthimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Get Started Here"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />


        <BlogWritingPower/>


         {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Blog Writing Packages"
          secPara="Our packages of blog writing services in Texas are built for brands that want consistent, high-quality blogs backed by research, SEO, and storytelling. You get clean structure, strategic writing, and reliable delivery designed for digital performance."
          tabsData={dynamictabsData}
        /> */}

         <WordPressPerformanceSection
          reverse
          wordpresssecclass="ecommerce-choose-sec ecommerce-list-choose"
          minihead="Our Benefits"
          miniheadclass="shorttop-head"
          secTitle1="Content Writing That Shapes"
          secTitle2="Your Brand Voice"
          description="We bring clarity, creativity, and technical precision to every blog. Your content becomes smarter, more engaging, and better optimized for search engines. Our writing is crafted for performance and tailored to your digital goals."
          whyChooseList={[
            "SEO smart",
            "On brand",
            "Fast delivery",
            "Fresh ideas",
            "Quality research",
            "Scalable content",
          ]}
          image={benefitimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Click Here to Increase Sales by 54%"
          aboutbtnlink="/contact"
          learnmorebtn="d-none"
        />


         <LocationContact
          secClass="ecommerce-contact-sec"
          minihead="Contact Us"
          mainhead="Let’s Build Content that Works Hard"
          secPara="Tell us your ideas, and we will turn them into high-performing blogs that strengthen your brand identity and support long-term digital growth."
          btntxt="Send Message"
        />

        <BlogSec />



      </DefaultLayout>
    </>
  )
}

export default BlogWriting