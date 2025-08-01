import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import cmsDevBanner from "../../assets/images/cmsDevBanner.webp";
import LatestTechSec from "../../components/LatestTechSec";

import ServiceAboutSec from "../../components/ServiceAboutSec";
import cmsDevServiceAboutImg from "../../assets/images/cmsDevServiceAboutImg.webp";
import PackagesSec from "../../components/PackagesSec";
import TestimonialSec from "../../components/TestimonialSec";
import BlogSec from "../../components/BlogSec";

import cmsDevWhyChooseImage from "../../assets/images/cmsDevWhyChooseImage.webp";
import cmsDevWhyChooseIcon1 from "../../assets/images/cmsDevWhyChooseIcon1.webp";
import cmsDevWhyChooseIcon2 from "../../assets/images/cmsDevWhyChooseIcon2.webp";
import cmsDevWhyChooseIcon3 from "../../assets/images/cmsDevWhyChooseIcon3.webp";
// import cmsDevWhyChooseIcon4 from "../../assets/images/cmsDevWhyChooseIcon4.webp";
import WhyCooseUsSec from "../../components/WhyCooseUsSec";
import OurPortfolioSec from "../../components/OurPortfolioSec";

import portfolioImg1_1 from "../../assets/images/cmsPortfolio/cmsPortfolioImg1-1.webp";
import portfolioImg1_2 from "../../assets/images/cmsPortfolio/cmsPortfolioImg1-2.webp";
import portfolioImg1_3 from "../../assets/images/cmsPortfolio/cmsPortfolioImg1-3.webp";
import portfolioImg1_4 from "../../assets/images/cmsPortfolio/cmsPortfolioImg1-4.webp";
import portfolioImg1_5 from "../../assets/images/cmsPortfolio/cmsPortfolioImg1-5.webp";

import portfolioImg2_1 from "../../assets/images/cmsPortfolio/cmsPortfolioImg2-1.webp";
import portfolioImg2_2 from "../../assets/images/cmsPortfolio/cmsPortfolioImg2-2.webp";
import portfolioImg2_3 from "../../assets/images/cmsPortfolio/cmsPortfolioImg2-3.webp";
import portfolioImg2_4 from "../../assets/images/cmsPortfolio/cmsPortfolioImg2-4.webp";
import ReactHelmet from "../../components/ReactHelmet";

const webUrl = import.meta.env.VITE_WEB_URL;

export const cmsDevPortfolio1 = [
  {
    image: portfolioImg2_1,
  },
  {
    image: portfolioImg2_2,
  },
  {
    image: portfolioImg2_3,
  },
  {
    image: portfolioImg2_4,
  },
  {
    image: portfolioImg2_1,
  },
  {
    image: portfolioImg2_2,
  },
  {
    image: portfolioImg2_3,
  },
  {
    image: portfolioImg2_4,
  },
];
export const cmsDevPortfolio2 = [
  {
    image: portfolioImg1_1,
  },
  {
    image: portfolioImg1_2,
  },
  {
    image: portfolioImg1_3,
  },
  {
    image: portfolioImg1_4,
  },
  {
    image: portfolioImg1_5,
  },
  {
    image: portfolioImg1_1,
  },
  {
    image: portfolioImg1_2,
  },
  {
    image: portfolioImg1_3,
  },
  {
    image: portfolioImg1_4,
  },
  {
    image: portfolioImg1_5,
  },
];

const CMSDevelopment = () => {
  return (
    <>
      <ReactHelmet
        // title=""
        // description=""
        // keywords=""
        url={`${webUrl}/cms-development`}
        // url="https://texaswebstudios.com/cms-development"
      />
      <DefaultLayout>
        <InnerBanner
          bgImage={cmsDevBanner}
          title="CMS Development"
          description="Powerful and intuitive CMS website development for businesses that demand growth, performance, and complete control."
          pageName="Services"
        />
        <LatestTechSec
          // className="latestTechLogoSec"
          leftCol="col-lg-5"
          centerCol="col-lg-4"
          rightCol="col-lg-3"
          secTitle="Expert Services For CMS-Based Development"
          description="Managing Your Website Shouldn’t Be Complicated; That’s Why We Build CMS Powered, Custom Web Development Services in Texas That Are Fast, Responsive, And Optimized For Higher Ranking And Conversions."
          leftBtnText="Book A Call"
          categoryTitle="SOLUTIONS"
          solutionList={[
            { name: "Wordpress Development" },
            { name: "Wix Development" },
            { name: "WooCommerce" },
            { name: "BigCommerce" },
            { name: "Shopify Development" },
            { name: "Magento Development" },
            { name: "Weebly Development" },
            { name: "Webflow Development" },
          ]}
          btnText="See All Integrations"
          targetSecId="portfolioSecId"
          rightP="We offer no-code CMS website development services in Texas that are easy to manage and built for performance. With expertise across multiple platforms, we deliver fast, responsive websites using pre-built templates optimized for all screen sizes. Our solutions come equipped with built-in SEO tools for better rankings and access to thousands of plugins for smooth integrations, giving you complete control without the technical hassle."
          // rightP2=""
        />

        <ServiceAboutSec
          className="bgPink"
          // rowClass="flex-row-reverse"
          leftCol="col-xl-7 col-lg-8 order-2"
          rightCol="col-xl-5 col-lg-4 order-1"
          // secTagClass="blackColor"
          secTag="CMS DEVELOPMENT AGENCY"
          secTitle={`CMS-powered solutions that are fast, dependable, and scalable.`}
          description="Our CMS website development services in Texas empower businesses to easily manage, scale, and optimize their websites. From no-code custom CMS development and responsive design to seamless plugin integration and built-in SEO tools, our solutions offer the flexibility and control modern brands need to grow. Designed for speed and simplicity, we offer instant upgrades with:"
          description2="Our CMS solutions simplify website management, save time, boost performance, and drive growth without the need for constant technical support. It's the smart, scalable choice for digital success."
          listClass="grid mt-3"
          list={[
            "Built-In Templates",
            "Mobile-Optimized Themes",
            "Easy Plugin Integration",
            "Built-In SEO Tools",
            "No-Code Or Low-Code Development",
          ]}
          image={cmsDevServiceAboutImg}
        />

        <OurPortfolioSec
          className="bgBlack"
          secTag="PORTFOLIO"
          secTitle="See Our Projects"
          ourPortfolio1={cmsDevPortfolio1}
          ourPortfolio2={cmsDevPortfolio2}
          btnText="View All Projects"
        />

        <WhyCooseUsSec
          secTag="WHY CHOOSE US"
          secTitle="How CMS Web Development Can Help You"
          secDescription="We deliver end-to-end custom CMS development services catering to your business needs."
          secDescription2="At Texas Web Studio, experience top-tier custom ecommerce website development services where innovation meets simplicity for powerful results. Our team brings proven expertise to deliver secure, high-performance, and cost-effective web solutions, built for startups, growing brands, and enterprise businesses alike."
          image={cmsDevWhyChooseImage}
          // leftP=""
          leftSubTitle="Dynamic CMS Solutions Built for Flexibility, Speed, and Control"
          btnText="Get A Free CMS Strategy Call"
          list={[
            {
              image: cmsDevWhyChooseIcon1,
              title: "No-Code & Low-Code Solutions",
              description:
                "Easily Manage And Update Your Website Without Touching Code.",
            },
            {
              image: cmsDevWhyChooseIcon2,
              title: "Scalable Architecture",
              description:
                "Built To Grow With Your Business, From Single Sites To Complex Multisite Setups.",
            },
            {
              image: cmsDevWhyChooseIcon3,
              title: "SEO & Performance Optimized",
              description:
                "Designed For Speed, Visibility, And High Search Rankings From Day One With Built-In SEO.",
            },
            // {
            //   image: cmsDevWhyChooseIcon4,
            //   title: "Performance Optimization",
            //   description:
            //     "We Optimize Your Website’s Speed, Structure, And Code To Ensure Faster Loading Times, Better User Experience, And Improved Search Engine Performance.",
            // },
          ]}
        />

        <PackagesSec
          className="bgPink"
          secTag="PRICING"
          title="Flexible Pricing Packages"
          description="Every business has different needs, so we offer custom pricing for each of our services. Our packages include Basic, Pro, and Premium, designed to match where you are and where you’re headed. Whether you are starting fresh or looking to scale, you will get the right solution at the right price. So find the package that fits you best, or consult us for a custom package!"
        />
        <TestimonialSec
          className="bgBlack"
          secTag="TESTIMONIALS"
          secTitle="What Our Client Says, Says It All"
          testimonialData={[
            {
              id: 1,
              name: "Sarah Mitchell",
              designation: "Marketing Manager, Brightpath Solutions",
              descrition:
                "Texas Web Studio built us a fast website. We are now able to update our content without the need for any developer.",
            },
            {
              id: 2,
              name: "Jason Lee",
              designation: "Founder, Urbannest Interiors",
              descrition:
                "Their CMS solution helped our team save time and stay in control. Everything works smoothly across devices. Highly recommend!",
            },
            {
              id: 3,
              name: "Danielle Rhodes",
              designation: "Marketing Director, PeakView Realty",
              descrition:
                "Texas Web Studios revamped our digital strategy and improved our SEO rankings fast. We're seeing more traffic and better-quality leads every week.",
            },
            {
              id: 4,
              name: "Emily Navarro",
              designation: "Co-Founder, FreshBloom Organics",
              descrition:
                "Thanks to Texas Web Studios, our new website loads fast and looks professional. It’s exactly what we needed to grow our online presence.",
            },
          ]}
        />
        <BlogSec />
      </DefaultLayout>
    </>
  );
};

export default CMSDevelopment;
