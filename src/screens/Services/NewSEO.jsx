import React from "react";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import DomainRegisterationServices from "../../components/DomainRegisterationServices";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainRegisterProcess from "../../components/DomainRegisterProcess";
import herobanner from "../../assets/images/services/seo/herobanner.webp";
import aboutimg from "../../assets/images/services/seo/aboutimg.webp";
import service1 from "../../assets/images/services/seo/service1.svg";
import service2 from "../../assets/images/services/seo/service2.svg";
import service3 from "../../assets/images/services/seo/service3.svg";
import service4 from "../../assets/images/services/seo/service4.svg";
import service5 from "../../assets/images/services/seo/service5.svg";
import levelimg from "../../assets/images/services/seo/levelimg.webp";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import LocationContact from "../../components/LocationContact";
import BlogSec from "../../components/BlogSec";
import phoneimg from "../../assets/images/services/seo/phoneimg.svg";
import { Link } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import bestseoimg from "../../assets/images/services/seo/bestseo-img.webp";


const webUrl = import.meta.env.VITE_WEB_URL;

const NewSEO = () => {

    const { setShowModal } = useModal();


  const frontendservices = [
    {
      img: service1,
      title: "On Page Optimization",
      para: "Our on-page SEO services in Texas refine page structure and content so search engine bots can crawl, interpret, and rank your pages more effectively.",
    },
    {
      img: service2,
      title: "Technical Optimization",
      para: "We optimize the technical foundation of your website, improving speed, usability, indexing, and backend performance to support higher search rankings.",
    },
    {
      img: service3,
      title: "Speed & Responsiveness",
      para: "A website that loads slowly loses attention fast. We optimize responsiveness so your site loads quickly and performs smoothly across all screen sizes.",
    },
    {
      img: service4,
      title: "Authority Building",
      para: "We implement strategies such as AEO and GEO to position your website as a trusted, authoritative presence on search engine results pages.",
    },
    {
      img: service5,
      title: "SEO Analysis & Audit",
      para: "To maintain strong performance, we conduct regular audits and refinements to keep your website optimized and continue to rank competitively.",
    },
  ];

  const processData = {
    minihead: "Process",
    mainhead: "The Work Behind Your Rankings",
    mainpara:
      "If SEO were easy, everyone would be ranking, but it’s not! That’s why you need the leading SEO Agency in Texas by your side.",
    steps: [
      {
        number: "01",
        title: "SEO Audit and Discovery",
        description:
          "We dissect your website, competitors, and search environment to uncover hidden gaps, wasted effort, heavy code, and ranking opportunities worth pursuing.",
      },
      {
        number: "02",
        title: "On-Page Optimization",
        description:
          "We restructure pages so search engines instantly understand purpose, relevance, and intent without confusion, friction, or guesswork.",
      },
      {
        number: "03",
        title: "Authority Building",
        description:
          "We strengthen credibility through meaningful backlinks that prove your brand is the trusted voice in your industry.",
      },
      {
        number: "04",
        title: "Monitor and Improve",
        description:
          "We track performance, behavior, and rankings continuously, adjusting strategy so growth never stalls after initial wins.",
      },
    ],
  };

  return (
    <>
      <ReactHelmet
        title="SEO Optimization in Texas"
        description=" Work with Texas Web Studio, the leading design and development company offering expert SEO optimization services to help your business rank higher and earn more."
        url={`${webUrl}/search-engine-optimization`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner newseo-herobanner-sec"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={herobanner}
          title="SEO Service Built to Rank Your Business at the Top"
          description="Texas markets are competitive, and visibility is never accidental. At Texas Web Studio, we help businesses earn their place in search by focusing on what actually drives discovery. As the leading SEO company in Texas, we build strategies rooted in relevance, structure, and authority, so your brand shows up when intent is high and choices are being made."
          btntxt="Rank at the Top"
        />

        <DomainRegisterationServices
          shortHead="Services"
          mainHead="SEO is What Separates Winners from Losers"
          description="SEO results do not come from doing everything. They come from doing the right things, in the right order, for the right reasons. Our search engine optimization services in Texas are built on all the right strategies you need to rank your website higher."
          CardCol="col-lg-4 col-md-6"
          CardClass="text-center"
          services={frontendservices}
        />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection domain-register-choose"
          reverse
          miniheadclass="shorttop-head"
          minihead="Benefits"
          secTitle1="The Hire the Ranking, the"
          secTitle2="Higher the Profits"
          description="Take it from the experts. If you have a website, it should be optimized. If it is not, your website is simply existing, not making an impact. The internet is home to billions of websites; yet, only a small fraction ever earns real visibility. And if you do not want your business to disappear into the noise, you need reliable SEO services in Texas to compete, rank higher, and get noticed."
          descriptiontwo="When your business ranks higher, you gain:"
          whyChooseList={[
            "Increase visibility",
            "Faster Website Performance",
            "Improved website Authority",
            "Increase Conversions",
          ]}
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Our SEO Experts"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <DomainRegisterProcess {...processData} />

        <WordPressPerformanceSection
          miniheadclass="shorttop-head"
          secTitle1="SEO is How You"
          secTitle2="Outrank the Crowd"
          description="SEO is not about doing more. It is about doing smarter. While competitors chase clicks, SEO builds trust, relevance, and momentum. With our search engine optimization and marketing service in Texas, your brand earns stronger positions, captures high-intent traffic, and quietly moves ahead while others keep guessing why they are stuck.
"
          image={levelimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About Us"
          aboutbtnlink="/about"
          learnmorebtn="d-none"
        />

          <section className="seofree-consultation">
            <div className="container">
                <div className="seofree-consult-bg">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="seoget-consult-flex">
                                <img src={phoneimg} alt="img" />
                                <div className="seoget-freeconsult-txt">
                                    <h5>Get Free Consultation</h5>
                                    <h3>+1 (713) 936-4992</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="seoget-free-txt">
                                <p>Have a question? Want to show us your website? Or simply curious about SEO? Get in touch with us, and we’ll show you how SEO can help your brand.</p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="gettouch-btn">
                                <button className="theme-btn" onClick={() => setShowModal(true)}>Talk to Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>


        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="SEO Optimization Services to Rank Higher"
          secPara="When search results decide who wins, our SEO packages are built for brands that want to be chosen, not chased."
          tabsData={dynamictabsData}
        /> */}


         <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection best-newseo-sec"
          miniheadclass="shorttop-head"
          secTitle1="How SEO Outlasts Paid Ads"
          description="Paid ads work like a switch. Turn the budget on, you appear. Turn it off, you disappear like you never existed. SEO does not behave that way. It takes a little more time to build authority, but when it’s done right, SEO keeps working quietly, long after campaigns end."
          bestvideohead="Organic is Long-Term, Inorganic Ins’t"
          descriptiontwo="While paid ads chase attention, SEO builds authority. It strengthens your website week after week, month after month, and in many cases, for years. Rankings earned through SEO do not vanish overnight; they compound. That means consistent visibility, steady traffic, and credibility that competitors cannot simply buy."
          description2="SEO is not an expense that resets every month. It is an asset that keeps delivering value, even when you are not actively spending."
          image={bestseoimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About Us"
          aboutbtnlink="/about"
          learnmorebtn="d-none"
        />

        <LocationContact
          secClass="ecommerce-contact-sec"
          minihead="Connect With Us"
          mainhead="Have a Website? Let’s Rank Higher!"
          secPara="Serious about improving visibility, outperforming competitors, and attracting traffic? Now is the time to act! Get in touch with Texas Web Studios, and let’s build search momentum."
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

export default NewSEO;
