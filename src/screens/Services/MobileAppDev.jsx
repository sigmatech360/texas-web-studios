import React from "react";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import mobileAppDevBanner from "../../assets/images/mobileAppDevBanner.webp";
import TestimonialSec from "../../components/TestimonialSec";
import PackagesSec from "../../components/PackagesSec";
import BlogSec from "../../components/BlogSec";
import OurPortfolioSec from "../../components/OurPortfolioSec";

import portfolioImg1_1 from "../../assets/images/portfolioImg1-1.webp";
import portfolioImg1_2 from "../../assets/images/portfolioImg1-2.webp";
import portfolioImg1_3 from "../../assets/images/portfolioImg1-3.webp";
import portfolioImg1_4 from "../../assets/images/portfolioImg1-4.webp";
import portfolioImg1_5 from "../../assets/images/portfolioImg1-5.webp";

import portfolioImg2_1 from "../../assets/images/portfolioImg2-1.webp";
import portfolioImg2_2 from "../../assets/images/portfolioImg2-2.webp";
import portfolioImg2_3 from "../../assets/images/portfolioImg2-3.webp";
import portfolioImg2_4 from "../../assets/images/portfolioImg2-4.webp";

const ourPortfolio1 = [
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
const ourPortfolio2 = [
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

const MobileAppDev = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={mobileAppDevBanner}
        title="Mobile Applications That Boost Your Success"
        description="At Texas Web Studios, We Create Fast, User-Friendly Apps For You That Fit Your Goals, Platform, And Audience. Our Mobile App Development Services For Texas Are Designed For Real Results And Easy Use."
        pageName="Services"
      />
      <OurPortfolioSec
        className="bgBlack"
        secTag="PORTFOLIO"
        secTitle="See Our Projects"
        ourPortfolio1={ourPortfolio1}
        ourPortfolio2={ourPortfolio2}
        btnText="View All Projects"
      />
      <PackagesSec
        className="bgPink"
        secTag="PRICING"
        title="Flexible Pricing Packages"
        description="Every Business Has Different Needs, So We Offer Custom Pricing For Each Of Our Services. Our Packages Include Basic, Pro, And Premium, Designed To Match Where You Are And Where You’re Headed. Whether You Are Starting Fresh Or Looking To Scale, You Will Get The Right Solution At The Right Price. So Find The Package That Fits You Best, Or Consult Us For A Custom Package!"
      />
      <TestimonialSec
        className="bgBlack"
        secTag="TESTIMONIALS"
        secTitle="Hear About Us From Our Happy Clients!"
        testimonialData={[
          {
            id: 1,
            name: "Sarah Mitchell",
            designation: "Marketing Manager, Brightpath Solutions",
            descrition:
              "Texas Web Studio Built Us A Fast Website. We Are Now Able To Update Our Content Without The Need For Any Developer.",
          },
          {
            id: 2,
            name: "Jason Lee",
            designation: "Founder, Urbannest Interiors",
            descrition:
              "Their CMS Solution Helped Our Team Save Time And Stay In Control. Everything Works Smoothly Across Devices. Highly Recommend!",
          },
          {
            id: 3,
            name: "Jason Lee",
            designation: "Founder, Urbannest Interiors",
            descrition:
              "Their CMS Solution Helped Our Team Save Time And Stay In Control. Everything Works Smoothly Across Devices. Highly Recommend!",
          },
        ]}
      />
      <BlogSec />
    </DefaultLayout>
  );
};

export default MobileAppDev;
