import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

const BrandStrategyService = () => {

  const faqs = [
    {
      header: "Brand Positioning & Messaging:",
      content:"Define your place in the market and say it like no one else can.",
    },
    {
      header: "Brand Architecture:",
      content:
        "Simplify your offerings and make every sub‑brand work together seamlessly.",
    },
    {
      header: "Audience Research & Personas:",
      content:
        "Understand your people, what they want, why they buy, and how to speak their language.",
    },
    {
      header: "Voice & Tone Development:",
      content:
        "Craft a voice that sounds like you, everywhere you show up.",
    },
    {
      header: "Brand Storytelling",
      content:
        "Every strategy we build is 100% tailored to your business goals, audience, industry, and long-term vision. No templates, no generic solutions.",
    },
  ];

  return (
    <section className="brand-strategy-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="brand-strategy-head">
              <h6 className="minihead text-white">Our Brand Strategy Services</h6>
              <h2 className="mainhead text-white">Your Blueprint for a Brand that Grows and Scales</h2>
              <p>Our brand strategy development in Texas is designed to give you a crystal‑clear roadmap and not just ideas. We blend creative thinking with business logic to position your brand for long‑term success.</p>
              <Link to="/contact" className="theme-btn">Connect with Us Now</Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="brand-service-list">
              <Accordion defaultActiveKey="0" alwaysOpen>
                {faqs.map((faq, index) => (
                  <Accordion.Item eventKey={`${index}`} key={index}>
                    <Accordion.Header as="h3">{faq.header}</Accordion.Header>
                    <Accordion.Body>{faq.content}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandStrategyService;
