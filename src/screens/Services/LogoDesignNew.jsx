import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ReactHelmet from "../../components/ReactHelmet";
import InnerBanner from "../../components/InnerBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import herobannerinnerimg from "../../assets/images/services/logodesign/herobanner-inner-img.webp";
import aboutimg from "../../assets/images/services/logodesign/aboutimg.webp";
import chooseimg from "../../assets/images/services/logodesign/chooseimg.webp";
import industry1 from "../../assets/images/services/logodesign/industry1.webp";
import industry2 from "../../assets/images/services/logodesign/industry2.webp";
import industry3 from "../../assets/images/services/logodesign/industry3.webp";
import industry4 from "../../assets/images/services/logodesign/industry4.webp";
import NewLogoDesignServices from "../../components/NewLogoDesignServices";
import BackendProcess from "../../components/BackendProcess";
import NewLogoDesignPortfolio from "../../components/NewLogoDesignPortfolio";
import Industryslider from "../../components/Industryslider";
import LocationContact from "../../components/LocationContact";
import BookCallSec from "../../components/BookCallSec";
import BlogSec from "../../components/BlogSec";
import { dynamictabsData } from "../../data";
import TabsPricing from "../../components/TabsPricing";

const webUrl = import.meta.env.VITE_WEB_URL;

const LogoDesignNew = () => {
  const industries = [
    {
      title: "Creative Ads",
      // link: "/ecommerce-development",
      description:
        "We craft scroll-stopping creatives that hit instantly. Every ad blends storytelling, design psychology, and platform strategy to help your campaign look fresh, engaging, and conversion-driven without feeling salesy.",
      image: industry1,
    },
    {
      title: "Website Designing",
      //link: "/healthcare-development",
      description:
        "We blend creativity with user experience so your website feels beautiful and easy to navigate. Every layout, color, and interaction supports your brand’s message and guides users toward taking action.",
      image: industry2,
    },
    {
      title: "Product Packaging Design",
      //link: "/real-estate-development",
      description:
        "Digital campaigns combining striking visuals, compelling copy, and strategy to engage your audience and boost conversions.",
      image: industry3,
    },
  
  ];

  const backendprocessdata = [
    {
      number: "01",
      title: "Discovery",
      text: "We learn your goals, audience, inspiration, and brand personality to build a strong creative direction. This step sets the vibe and ensures your logo is rooted in strategy and identity clarity.",
    },
    {
      number: "02",
      title: "Research",
      text: "We explore your industry, competitors, design trends, and cultural cues. This helps us create something fresh, relevant, and timeless, so your logo feels ready to dominate instead of being lost in noise.",
    },
    {
      number: "03",
      title: "Concept Creation",
      text: "We sketch, experiment, and build multiple creative concepts based on your strategy. Each concept includes its own mood, meaning, and storytelling potential to give your brand the strongest possible identity.",
    },
    {
      number: "04",
      title: "Refinement",
      text: "We polish your chosen concept with intelligent tweaks and detailed enhancements. Fonts, colors, proportions, and forms go through precise creative adjustments until the logo feels perfect and aligned.",
    },
    {
      number: "05",
      title: "Final Delivery",
      text: "You receive your final logo in all required formats and variations. Every file is optimized for digital and print, so you can launch confidently on any platform without worrying about quality.",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="Custom Logo Design Services for Brands in Texas  "
        description="Get a memorable, strategic, and visually striking logo design in Texas that perfectly represents your brand. We craft logos that connect with your audience and leave lasting impressions online and offline."
        url={`${webUrl}/logo-design`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner logodesign-herobanner-sec"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bannerImg={herobannerinnerimg}
          title="Your New Logo Starts Here, and It Looks Iconic"
          description="Your logo should hit instantly. It should feel recognizable on a phone screen, a billboard, and even in your client’s imagination. Our team blends strategy, creativity, and cultural awareness to design logos that speak at a single glance. When you want a brand identity that hits different, we make it happen."
          btntxt="Start My Logo Glow-up"
        />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection domain-register-choose"
          reverse
          minihead="About Us"
          miniheadclass="shorttop-head"
          secTitle1="Creating Logos That Connect"
          secTitle2="Like A Friend "
          description="We obsess over details. Every curve, color, and corner means something. Our team studies how your audience thinks, buys, and connects so we can shape a logo that feels relatable and rooted in your brand’s personality. Whether you’re bold, minimal, playful, or luxe, we design identities with purpose and position your brand exactly where it needs to live in the digital era."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Us"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <NewLogoDesignServices />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection domain-register-choose"
          minihead="Why Choose Us?"
          miniheadclass="shorttop-head"
          secTitle1="Why Texas Web Studios is The Right Choice for"
          secTitle2="Your Logo Design"
          description="We combine sharp creative instincts with years of branding experience to deliver logos that feel iconic. We design with cultural insight, strategic clarity, and visual precision to help brands stand out in a crowded digital world."
          whyChooseList={[
            "Trend-aware designers",
            "Human-centric creative strategy",
            "Hyper-focused attention to detail",
            "Custom-made logo concepts",
            "Fast turnaround with quality",
            "Scalable designs for all platforms",
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          learnmorebtn="d-none"
        />

        <BackendProcess
          secClass="logodesign-process-sec"
          shortTopHead="Our Process"
          mainHead="How Your Logo Reaches Perfection"
          cards={backendprocessdata}
        />

        <NewLogoDesignPortfolio />

        <Industryslider
          secClass="webdesign-industry-slider"
          headCol="col-lg-10"
          minihead="More of Our Services"
          mainhead="Our Designing Tool Kit"
          description="Beyond a logo design, we cover all aspects of designing to ensure your brand looks flawless at every corner of the web and even on your tangible products."
          industries={industries}
        />

        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Affordable Creativity That Scales"
          secPara="Our pricing is designed for startups, brands, and businesses that want brilliant design without unnecessary complexity. Clear packages, absolute value, and creative excellence built around your goals."
          tabsData={dynamictabsData}
        /> */}


        <LocationContact
          secClass="ecommerce-contact-sec"
          minihead="Contact Us"
          mainhead="Want a Unique Logo Design For Your Brand?"
          secPara="Our design experts are ready to help you build your brand identity. Fill the form below, and we’ll get your process started. "
          btntxt="Send Message"
        />

        <BlogSec
          minihead="Blogs & Articles"
          secTitle="Get All Tech-Related News Here"
        />
      </DefaultLayout>
    </>
  );
};

export default LogoDesignNew;
