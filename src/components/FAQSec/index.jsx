import React from "react";
import "./style.css";
import { Accordion } from "react-bootstrap";

import faqImg from "../../assets/images/faqImg.webp";

const testimonialData = [
  {
    title: "Can I Ask for Custom Pricing?",
    description:
      "Yes. We Understand that Every Business Has Different Needs, so We’re Happy to Create a Custom Quote Based on Your Goals, Timeline, and Required Services.",
  },
  {
    title: "Do You Offer Ongoing Support After a Project Ends?",
    description:
      "Yes. We Offer Monthly Support Plans, Maintenance, Updates, and Optimization to Make Sure Your Website or Campaign Stays Sharp and Effective.",
  },
  {
    title: "Do You Provide Site Audits Before We Start The Process?",
    description:
      "Yes. We Begin with a Full Website Audit to Identify Gaps and Opportunities. You’ll Get The Report First, Then It’s Your Call to Move Forward or Not.",
  },
  {
    title: "How Involved Will I Be in The Design Process?",
    description:
      "We Believe in Close Collaboration, so We Include You at Every Key Step, from Planning and Wireframes to Final Design Approval. We Work with You to Create The Ideal Results.",
  },
];

const FAQSec = (props) => {
  const activeKeys = props.testimonials.map((_, index) => index.toString());
  return (
    <section className="faqSection sec-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="faqContent">
              <div className="secHead">
                <p className="sec-tag">{props.secTag}</p>
                <h2
                  className="secTitle"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  {props.secTitle}
                </h2>
              </div>
              <div className="faqs-items">
                <Accordion
                  activeKey={activeKeys}
                  // defaultActiveKey="0"
                >
                  {/* Mistakenly used props.testimonials */}
                  {props.testimonials.map((item, index) => (
                    <Accordion.Item
                      key={index}
                      eventKey={index.toString()}
                      data-aos="fade-right"
                      data-aos-delay={index * 200}
                    >
                      <Accordion.Header as="h2">{item.title}</Accordion.Header>
                      <Accordion.Body>{item.description}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="faqImgDiv"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <img src={props.image} alt="FAQ's Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSec;
