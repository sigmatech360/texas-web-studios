import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ReactHelmet from "../../components/ReactHelmet";
import InnerBanner from "../../components/InnerBanner";
import herobanner from "../../assets/images/services/brandvoice/herobanner.webp";
import innerimg from "../../assets/images/services/brandvoice/herobanner-inner-img.webp";
import aboutimg from "../../assets/images/services/brandvoice/aboutimg.webp";
import voicespeaker from "../../assets/images/services/brandvoice/voicespeaker.svg";
import voicehandbook from "../../assets/images/services/brandvoice/voice-handbook.svg";
import messageing from "../../assets/images/services/brandvoice/messageing.svg";
import guidelines from "../../assets/images/services/brandvoice/guidelines.svg";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainRegisterationServices from "../../components/DomainRegisterationServices";
import BrandVoiceProcess from "../../components/BrandVoiceProcess";
import BrandVoiceImpact from "../../components/BrandVoiceImpact";
import LocationContact from "../../components/LocationContact";
import BlogSec from "../../components/BlogSec";

const webUrl = import.meta.env.VITE_WEB_URL;

const BrandVoice = () => {

  const brandvoiceservices = [
    {
      img: voicespeaker,
      title: "Brand Strategy:",
      para: "Define positioning, tone, and messaging frameworks to create cohesive, audience-focused strategies for your brand.",     
    },
    {
      img: voicehandbook,
      title: "Brand Identity Design: ",
      para: "Create logos, colors, and typography aligned with your brand voice and personality consistently."
    },
    {
      img: messageing,
      title: "Merchandising: ",
      para: "Design products, packaging, and promotional materials reflecting brand identity and messaging across every customer interaction."
    },
    {
      img: guidelines,
      title: "Brand Positioning: ",
      para: "Identify your market niche and unique advantages to help your brand stand out strategically."
    },
  ];

  return (
    <>
      <ReactHelmet
        title="Brand Voice Services at Texas Web Studios"
        description="Discover a powerful brand voice that feels confident and consistent across every touchpoint. Our brand voice agency in Texas helps you shape messaging, tone, and identity that truly represent your business. "
        url={`${webUrl}/brand-voice`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner domain-registeration-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={herobanner}
          bannerImg={innerimg}
          title="Your Brand Voice Deserves To Be Heard"
          description="Texas Web Studios specializes in giving every brand a pesronalized and unique voice. Our brand voice agency in Texas creates memorable, consistent messaging, ensuring your brand communicates effectively, resonates deeply, and stands out in competitive markets."
          btntxt="Get Your Brand Voice"
        />

        <WordPressPerformanceSection
          reverse
          minihead="About Us"
          miniheadclass="shorttop-head"
          secTitle1="Your Brand is More than a Business,"
          secTitle2="It’s a Living Experience"
          description="At Texas Web Studios, we provide brand voice development tailored to each business. We help brands find their personality and craft messaging that feels authentic, memorable, and uniquely theirs."
          descriptiontwo="Our brand voice company, Texas, approach ensures consistency across all channels. Every campaign, social post, and touchpoint reflects a voice that resonates with your audience, strengthens recognition, and builds loyalty for long-term growth."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Discuss With An Expert"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <DomainRegisterationServices
          CardCol="col-lg-6 col-md-6"
          CardClass="brandvoice-service-card"
          shortHead="360° Branding Services"
          mainHead="A Complete Branding Suite For Serious Growth"
          description="Our brand voice services in Texas are part of a comprehensive branding suite, ensuring your business communicates clearly, visually, and strategically across all platforms."
          services={brandvoiceservices}
        />


        <BrandVoiceProcess/>

        <BrandVoiceImpact/>


        <section className="brand-voice-quote">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="brandvoice-quote-txt">
                            <p>"Your brand is a story unfolding across all customer touchpoints." </p>
                            <h5>- Jonah Sachs</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>



         <LocationContact
          secClass="ecommerce-contact-sec"
          minihead="Contact Us"
          mainhead="Say Hello And Let’s Shape Something Iconic"
          secPara="Connect with Texas Web Studios for expert brand voice development in Texas. Fill the form, and let’s craft a voice that makes your brand unforgettable."
          btntxt="Send message"
        />

        <BlogSec />


      </DefaultLayout>
    </>
  );
};

export default BrandVoice;
