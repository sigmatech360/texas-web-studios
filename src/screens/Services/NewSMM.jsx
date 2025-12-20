import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ReactHelmet from "../../components/ReactHelmet";
import InnerBanner from "../../components/InnerBanner";
import innerimg from "../../assets/images/services/smm/herobanner-inner-img.webp";
import aboutimg from "../../assets/images/services/smm/aboutimg.webp";
import benefitimg from "../../assets/images/services/smm/benefitimg.webp";
import hireimg from "../../assets/images/services/smm/hireimg.webp";
import process1 from "../../assets/images/services/smm/process1.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainRegisterationServices from "../../components/DomainRegisterationServices";
import webhostingicon from "../../assets/images/services/domainresgisteration/webhosting.svg";
import webdesignicon from "../../assets/images/services/domainresgisteration/webdesign.svg";
import customicon from "../../assets/images/services/domainresgisteration/customwebsitedevelopment.svg";
import devopservices from "../../assets/images/services/domainresgisteration/devopservices.svg";
import SMMServices from "../../components/SMMServices";
import SMMPlatform from "../../components/SMMPlatform";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import LocationContact from "../../components/LocationContact";
import BlogSec from "../../components/BlogSec";
import service1 from "../../assets/images/services/smm/service1.webp";
import service3 from "../../assets/images/services/smm/service3.webp";
import service4 from "../../assets/images/services/smm/service4.webp";
import service5 from "../../assets/images/services/smm/service5.webp";


const webUrl = import.meta.env.VITE_WEB_URL;

const NewSMM = () => {
  const frontendservices = [
    {
      img: service1,
      title: "Search Engine Optimization",
      para: "We improve your visibility on search engines through clear structure, meaningful content, and keyword-focused optimization. ",
    },
    {
      img: webdesignicon,
      title: "Website Design",
      para: "We create visually pleasing web layouts that guide users naturally and highlight your brand message with clarity.",
    },
    {
      img: service3,
      title: "Content Writing",
      para: "We write content that feels authentic and informative. Each piece supports your voice and gives your audience clear reasons to engage with your brand.",
    },
    {
      img: service4,
      title: "Brand Identity",
      para: "We create logos, colors, and messaging systems that help your brand become instantly recognizable and memorable.",
    },
    {
      img: service5,
      title: "Domain Registration",
      para: "We help you secure the perfect domain for your brand and set a stable foundation for your online presence with professional guidance and quick setup.",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="Social Media Marketing Services for High Engagement | Texas Web Studios"
        description="Texas Web Studios provides strategic social media marketing designed to grow reach, boost engagement, and strengthen brand presence across every major platform."
        url={`${webUrl}/social-media-marketing`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner websitecontent-herobanner-sec smm-herobanner-sec"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bannerImg={innerimg}
          title="Strategic Social Media Marketing for Consistent Engagement"
          description="Social media is where your audience spends their time and where your brand must stay active. Our social media marketing services in Texas help you build consistent engagement, meaningful reach, and long-term brand visibility. With strong strategies and flawless execution, we ensure your message connects with the right people at the right moment."
          btntxt="Create Your Social Strategy"
        />

        <WordPressPerformanceSection
          reverse
          miniheadclass="shorttop-head"
          minihead="Why Choose Us?"
          secTitle1="We Don’t Work on Brands,"
          secTitle2="We Grow them Like Our Own!"
          description="At Texas Web Studios, every social media strategy is made with care and intent. We treat your brand as a long-term partnership, not a one-time project. With creative planning, deep research, and continuous optimization, we work to grow your presence in a way that feels real, relevant, and lasting."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About Us"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn"
        />

        <DomainRegisterationServices
          shortHead="More of Our Services"
          mainHead="What Else We Offer for Your Digital"
          description="Beyond social media, we provide digital services that strengthen your presence, build trust, and support long-term brand growth."
          CardCol="col-lg-4 col-md-6"
          CardClass="text-center"
          services={frontendservices}
        />

        <WordPressPerformanceSection
          miniheadclass="shorttop-head"
          secTitle1="Engagement, Reach, & Conversion is the Core Manifestation of Our"
          secTitle2="Social Media Campaigns"
          description="Every campaign we build is centered on the outcome you want. Engaging visuals, strong messaging, and clear strategy come together to spark conversations and attract real interest. With consistent refinement and targeted execution, our social media marketing efforts turn attention into measurable action."
          image={hireimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Start Building Campaigns"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <SMMServices />

        <SMMPlatform />

        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Social Media Marketing Packages"
          secPara="Our social media marketing packages are designed to fit different brand needs. Texas Web Studios helps you build a strong digital presence that keeps growing month after month."
          tabsData={dynamictabsData}
        /> */}

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="ecommerce-choose-sec ecommerce-list-choose"
          miniheadclass="shorttop-head"
          secTitle1="Why Social Media Marketing Could be"
          secTitle2="Your Digital Hero!"
          description="Social media gives your brand a stage to speak, connect, and inspire. It brings visibility, builds loyalty, and helps customers discover you effortlessly."
          whyChooseList={[
            "Higher engagement with your target audience",
            "Stronger brand visibility every day",
            "Better conversions through meaningful content",
            "More brand traffic",
            "Long-term trust and community building",
            "Brand growth and credibility ",
          ]}
          image={benefitimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Start Today "
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <LocationContact
          secClass="ecommerce-contact-sec"
          minihead="Connect With Us"
          mainhead="Get in Touch with Us"
          secPara="Have a question or ready to grow your social presence? Send us a message, and our team will help you get started with a clear, focused, and effective strategy."
          btntxt="Send Message"
        />

        <BlogSec
          minihead="Blogs & Articles"
          secTitle="Insights Related to Content, Blogs, and More"
        />
      </DefaultLayout>
    </>
  );
};

export default NewSMM;
