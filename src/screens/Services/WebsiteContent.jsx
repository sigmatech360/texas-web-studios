import React from "react";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import innerimg from "../../assets/images/services/websitecontent/herobanner-inner-img.webp";
import aboutimg from "../../assets/images/services/websitecontent/aboutimg.webp";
import chooseimg from "../../assets/images/services/websitecontent/chooseimg.webp";
import benefitimg from "../../assets/images/services/websitecontent/benefitimg.webp";
import whatcontentimg from "../../assets/images/services/websitecontent/whatcontentimg.webp";
import marvelouscontent from "../../assets/images/services/websitecontent/marvelouscontent.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainRegisterationServices from "../../components/DomainRegisterationServices";
import voicespeaker from "../../assets/images/services/brandvoice/voicespeaker.svg";
import voicehandbook from "../../assets/images/services/brandvoice/voice-handbook.svg";
import messageing from "../../assets/images/services/brandvoice/messageing.svg";
import guidelines from "../../assets/images/services/brandvoice/guidelines.svg";
import DomainRegisterProcess from "../../components/DomainRegisterProcess";
import Performance from "../../components/Performance";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import LocationContact from "../../components/LocationContact";
import BlogSec from "../../components/BlogSec";
import service1 from "../../assets/images/services/websitecontent/service1.svg";
import service2 from "../../assets/images/services/websitecontent/service2.svg";
import service3 from "../../assets/images/services/websitecontent/service3.svg";
import service4 from "../../assets/images/services/websitecontent/service4.svg";
import service5 from "../../assets/images/services/websitecontent/service5.svg";
import service6 from "../../assets/images/services/websitecontent/service6.svg";

const webUrl = import.meta.env.VITE_WEB_URL;

const WebsiteContent = () => {
  const brandvoiceservices = [
    {
      img: service1,
      title: "Website Content Writing",
      para: "With our website content writing service in Texas, we shape your message into clear, thoughtful words that guide visitors gently, build trust naturally, and help them understand why choosing you feels like the right decision every time.",
    },
    {
      img: service2,
      title: "Blog Writing Service",
      para: "Through our SEO website content writing service in Texas, we write blogs people enjoy reading, learning from, and returning to. Warm storytelling, simple explanations, and genuine value help your audience feel connected while supporting long-term visibility.",
    },
    {
      img: service3,
      title: "SEO Copywriting ",
      para: "Our website copywriting services in Texas focus on clarity, keywords, and natural language. We write content that feels human, supports search rankings, and helps visitors understand your offer without feeling overwhelmed or pressured.",
    },
    {
      img: service4,
      title: "Business Profile",
      para: "With our website content company in Texas, we write business profiles that introduce you with confidence and simplicity. Clear wording, thoughtful details, and a natural tone help your audience understand who you are and why you matter.",
    },
    {
      img: service5,
      title: "Email & Newsletter Writing ",
      para: "Through our website content services Texas, we write warm, purposeful emails that nurture leads gently. Our words carry your message with clarity, helping readers feel understood while moving them closer to taking the next step.",
    },
    {
      img: service6,
      title: "Press Release",
      para: "Using our affordable website content services Texas, we write press releases that share your announcements clearly and professionally. The tone stays grounded, trustworthy, and meaningful, helping your message reach the right audience with confidence.",
    },
    
  ];

  const processData = {
    mainhead: "Content Writing That Supports Everything Your Brand Says",
    mainpara:
      "Content doesn’t live on one page. It follows your brand everywhere, on socials, in ads, in emails, and in every place your audience meets you. Here are a few more ways we help your voice show up with confidence.",
    steps: [
      {
        number: "01",
        title: "Social Media Posts",
        description:
          "We write social captions that feel real, relatable, and easy to engage with. Simple words, clear meaning, and a tone that makes your brand feel like someone people actually want to talk to.",
      },
      {
        number: "02",
        title: "Ad Creatives",
        description:
          "Your ads don’t need loud words; they need the right ones. We craft ad copy that catches attention gently, explains quickly, and gives people a reason to click without sounding salesy.",
      },
      {
        number: "03",
        title: "Landing Page Copy",
        description:
          "Landing pages work when the message feels right. We write clear, focused content that helps visitors understand your offer instantly and feel confident enough to take the next step.",
      },
      {
        number: "04",
        title: "Product Descriptions",
        description:
          "We turn features into benefits people care about. Simple, thoughtful descriptions that explain what your product does, why it matters, and how it makes life easier.",
      },
      {
        number: "05",
        title: "Brand Messaging & Tone Guides",
        description:
          "Your brand has a personality. We help define it. From tone guidelines to message pillars, we shape a voice that stays consistent everywhere your brand speaks.",
      },
      {
        number: "06",
        title: "Microcopy (Buttons, Labels, Prompts)",
        description:
          "The smallest words often make the biggest difference. We write microcopy that feels warm, clear, and helpful, guiding users naturally through your website or app.",
      },
    ],
  };

  const performanceData = [
    {
      //   icon: performance1,
      title: "SEO-Optimized",
      description:
        "Through On-Page SEO, we help your website reign the search engine by ranking at the very top, way past your competition.",
    },
    {
      //   icon: performance2,
      title: "AEO-Optimized",
      description:
        "Your content is never copied, repeated, or borrowed. Everything is written fresh, original, and for you.",
    },
    {
      //   icon: performance3,
      title: "GEO-Optimized",
      description:
        "For the website that also wants to rank on LLMs such as ChatGPT, through are AEO service, we help be the authoritative voice on the GPTs too.",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="Website Content Writing in Texas"
        description="Get professional website content writing in Texas with Texas Web Studio. We craft original, human-written content that elevates your brand voice, improves engagement, and boosts your website’s conversion potential."
        url={`${webUrl}/website-content`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner websitecontent-herobanner-sec"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bannerImg={innerimg}
          title="Words that Make Your Website Go from “Meh” to Magnificent"
          description="Your website is the face of your business online. Give it the best salesperson you’ve ever hired with our website content writing service in Texas, one that speaks, sells, and shines for you."
          btntxt="Let’s Create Some Wordly Magic"
        />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection domain-register-choose"
          reverse
          minihead="What We Do"
          miniheadclass="shorttop-head"
          secTitle1="We Don’t Just Write Content. We Shape How"
          secTitle2="Your Audience Sees You"
          description="Content isn’t just words arranged on a screen. It’s the moment a visitor feels understood. The feeling of trust forming without being asked. The gentle nudge that moves someone from interest to action. The right words can do all of this."
          descriptiontwo="Through our website copywriting services in Texas, we write content that carries meaning, builds authority, and helps your brand show up exactly the way your audience needs it to."
          whyChooseList={[
            "Words that explain",
            "Words that reassure",
            "Words that convert, naturally",
          ]}
          description2="This is what we do"
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Learn More About Us"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn"
        />

        <DomainRegisterationServices
          CardCol="col-lg-4 col-md-6"
          CardClass="brandvoice-service-card"
          shortHead="Services"
          mainHead="How We Let Our Words Work for You"
          description="Pages convert because of the words on them. And we write the words that help you gain visibility, trust, and connection."
          services={brandvoiceservices}
        />

        <WordPressPerformanceSection
          miniheadclass="shorttop-head"
          secTitle1="Good Words Shine."
          secTitle2="Optimized Words Get Noticed"
          description="Writing good content is really important, but if no one can read it, what good is that content? Thus, optimization is as important as writing good content. Optimized content isn’t about stuffing keywords or trying to impress search engines. It’s about helping your audience find you easily, understand you clearly, and trust you naturally. With our website content agency in Texas, we shape every sentence with purpose, making sure your content reads well for real people while still giving search engines the signals they need to rank you higher."
          descriptiontwo="Good optimization feels invisible. But its impact never is."
          description2="It helps your website show up where it should, answer questions your visitors already have, and guide them gently toward choosing you with confidence."
          image={marvelouscontent}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Optimize My Content"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection domain-register-choose"
          reverse
          miniheadclass="shorttop-head"
          secTitle1="Optimization That Goes Beyond Google,"
          secTitle2="because Your Audience Does Too"
          description="While others are still selling SEO like it’s the golden ticket to ranking, we’ll tell you the truth, SEO alone is last decade. Today, visibility lives in more than one place."
          whyChooseList={[
            "We help brands rank where people actually look",
            "Not just on search engines like Google through SEO",
            "but on LLMs like ChatGPT through GEO-optimization",
          ]}
          description2="And it doesn’t end there. With AEO-optimization, we help you become the most trusted answer across the internet, the voice search engines and AI tools rely on. Together, these three optimizations help your brand reign everywhere: search engines, generative engines, and every digital corner in between. Now that’s what real SEO website content optimization in USA looks like."
          image={whatcontentimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Optimize My Content"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <DomainRegisterProcess
          registerProcess="websitecontent-process-card"
          addClass="justify-content-center"
          {...processData}
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection ecommerce-choose-sec ecommerce-list-choose websitecontent-choose-list"
          minihead="The Best in Business"
          miniheadclass="shorttop-head"
          secTitle1="We Write Words That"
          secTitle2="Move People to Act"
          description="Good website content isn’t just about writing well. It’s about understanding what your audience needs to hear and saying it in a way that feels natural, honest, and easy to trust. That’s what we focus on. We take time to understand your voice, your message, and the people you want to reach, then we shape content that explains clearly, connects emotionally, and supports your goals with purpose."
          whyChooseList={[
            "Working with us feels simple",
            "Your content feels like you",
          ]}
          description2="And your website finally says what it was always meant to say."
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Us"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <Performance
          secClass="websitecontent-perfomance-sec"
          data={performanceData}
        />

        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Let Our Words Do the Magic On Your Web Page"
          secPara="Choose a plan that fits your goals and let our words bring confidence and conversion to every page on your website"
          tabsData={dynamictabsData}
        /> */}

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="ecommerce-choose-sec ecommerce-list-choose"
          minihead="Benefits"
          miniheadclass="shorttop-head"
          secTitle1="When You Use the Right Words,"
          secTitle2="You Get the Right Results"
          description="Good website content is a little like having a great salesperson who never gets tired, never forgets a detail, and never whispers when they should speak up. With our website content services in Texas, your business gets more than words; it gets an unfairly charming advantage."
          whyChooseList={[
            "Great Website Presence",
            "Clear Brand Voice",
            "Engaged Visitors",
            "Better Search Visibility",
            "Strong First Impressions",
            "Quiet, Steady Credibility",
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
          minihead="Connect With Us"
          mainhead="Ready for Website Content That Finally Says Things Right?"
          secPara="If your website has been trying to speak but never quite saying what you want it to, we can help fix that. Share your details, tell us what you’re aiming for, and we’ll shape the kind of content that feels natural, clear, and easy for your visitors to trust."
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

export default WebsiteContent;
