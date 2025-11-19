import React from "react";
import benefitimg from "../../assets/images/services/frontenddevelopment/benefitimg.webp";
import DynamicFaqs from "../DynamicFaqs";

const FrontendBenefit = () => {
  const faqsData = [
    {
      header:
        "Professional Expertise",
      content:
        "Work with the best front-end development agency in Texas that speaks the language of both design and code. We utilize React, Vue.js, and modern JavaScript frameworks to create scalable, high-performance interfaces that are as dependable as they are dynamic.",
    },
    {
      header:
        "Dedicated Tech Teams",
      content:
        "Our in-house developers operate as your extended digital squad, focused, flexible, and fully aligned with your goals. Think of them as your on-demand innovation partners.",
    },
    {
      header: "Qualitative Work and Testing",
      content:
        "Every pixel and interaction is tested for performance, accessibility, and cross-browser perfection. Quality assurance isn’t the last step; it’s built into every stage of our process, and maintained even after your project is deployed!",
    },
    {
      header: "Progress Mapping and Reporting",
      content:
        "We believe in transparency. As we begin your project, you’ll receive detailed project updates, sprint reports, and real-time communication, ensuring you always know what’s happening and why.",
    },
    {
      header: "Performance Monitoring and Optimization",
      content:
        "Once live, our work doesn’t stop. We monitor site speed, user engagement, and SEO/AEO metrics to keep your platform running at peak efficiency long after deployment.",
    },
  ];
  return (
    <section className="frontend-benefit-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="frontend-benefit-head">
              <h6 className="shorttop-head">Benefits</h6>
              <h2 className="mainhead">
                What Frontend Development Can Do for Your Brand
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="frontend-benefit-img">
              <img src={benefitimg} alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <DynamicFaqs faqs={faqsData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendBenefit;
