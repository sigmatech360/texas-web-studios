import React from "react";
import "./style.css";
import { Accordion } from "react-bootstrap";

import faqImg from "../../assets/images/faqImg.webp"

const testimonialData = [
  {
    title: "Can I Ask For Custom Pricing?",
    description:
      "Yes. We Understand That Every Business Has Different Needs, So We’re Happy To Create A Custom Quote Based On Your Goals, Timeline, And Required Services.",
  },
  {
    title: "Do You Offer Ongoing Support After A Project Ends?",
    description:
      "Yes. We Offer Monthly Support Plans, Maintenance, Updates, And Optimization To Make Sure Your Website Or Campaign Stays Sharp And Effective.",
  },
  {
    title: "Do You Provide Site Audits Before We Start The Process?",
    description:
      "Yes. We Begin With A Full Website Audit To Identify Gaps And Opportunities. You’ll Get The Report First, Then It’s Your Call To Move Forward Or Not.",
  },
  {
    title: "How Involved Will I Be In The Design Process?",
    description:
      "We Believe In Close Collaboration, So We Include You At Every Key Step, From Planning And Wireframes To Final Design Approval. We Work With You To Create The Ideal Results.",
  },
];

const FAQSec = () => {
  const activeKeys = testimonialData.map((_, index) => index.toString());
  return (
    <section className="faqSection sec-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="faqContent">
              <div className="secHead">
                <p className="sec-tag">GET ANSWERS</p>
                <h3 className="secTitle">Frequently Asked Questions</h3>
              </div>
              <div className="faqs-items">
                <Accordion
                  activeKey={activeKeys}
                  // defaultActiveKey="0"
                >
                  {testimonialData.map((item, index) => (
                    <Accordion.Item key={index} eventKey={index.toString()}>
                      <Accordion.Header as="h4">{item.title}</Accordion.Header>
                      <Accordion.Body>{item.description}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faqImgDiv">
                <img src={faqImg} alt="FAQ's Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSec;
