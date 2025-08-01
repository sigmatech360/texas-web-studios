import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import contactBanner from "../../assets/images/contactBanner.webp";

import ContactPageContactSec from "../../components/ContactPageContactSec";
import ReactHelmet from "../../components/ReactHelmet";

const webUrl = import.meta.env.VITE_WEB_URL;

const Contact = () => {
  return (
    <>
    <ReactHelmet
        // title=""
        // description=""
        // keywords=""
        url={`${webUrl}/contact`}
        // url="https://texaswebstudios.com/contact"
      />
    <DefaultLayout>
      <InnerBanner
        bgImage={contactBanner}
        title="Contact Us"
        description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Mi Eget Mauris Pharetra Et Ultrices."
        pageName="Contact Us"
      />

      <ContactPageContactSec
        secTag="CONTACT US"
        secTitle="Get in Touch"
        description="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry."
      />

      <section className="contactUsPageMap">
        <iframe
          title="Los Angeles Map"
          width="100%"
          height={"450px"}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13236.436185047787!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1716200000000!5m2!1sen!2sus"
        />
      </section>
    </DefaultLayout>
    </>
  );
};

export default Contact;
