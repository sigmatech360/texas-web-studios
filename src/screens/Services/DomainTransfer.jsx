import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import innerimg from "../../assets/images/services/domaintransfer/herobanner-inner-img.webp";
import aboutimg from "../../assets/images/services/domaintransfer/aboutimg.webp";
import chooseimg from "../../assets/images/services/domaintransfer/chooseimg.webp";
import process1 from "../../assets/images/services/domaintransfer/process-1.webp";
import process2 from "../../assets/images/services/domaintransfer/process-2.webp";
import process3 from "../../assets/images/services/domaintransfer/process-3.webp";
import process4 from "../../assets/images/services/domaintransfer/process-4.webp";
import domainsearch from "../../assets/images/services/domaintransfer/domainsearch.svg";
import dns from "../../assets/images/services/domaintransfer/dns.svg";
import dotcomnet from "../../assets/images/services/domaintransfer/dotcom-net.svg";
import renewalcheck from "../../assets/images/services/domaintransfer/renewal-check.svg";
import privacy from "../../assets/images/services/domaintransfer/privacy.svg";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainRegisterationServices from "../../components/DomainRegisterationServices";
import TransferSupport from "../../components/TransferSupport";
import DomainTransferProcess from "../../components/DomainTransferProcess";
import LocationContact from "../../components/LocationContact";
import BlogSec from "../../components/BlogSec";
import ReactHelmet from './../../components/ReactHelmet/index';


const webUrl = import.meta.env.VITE_WEB_URL;


const DomainTransfer = () => {

  const frontendservices = [
    {
      img: domainsearch,
      title: "Domain Transfer:",
      para: "Want to give your website a new name and an address, the one it deserves? Transfer your domain to a faster, more secure domain that protects your website data, backups, passwords, backend code and more.",
    },
    {
      img: dns,
      title: "Domain Registration:",
      para: "Launch your website on the internet with a fast, more secure domain from a leading domain provider and maintain it with the best company in Texas. We offer domain registration, weekly backups, website maintenance, and more, so your web or app works flawlessly.",
    },
    {
      img: dotcomnet,
      title: "Domain & Web Maintenance:",
      para: "The best way to keep a website fast and protected is through website and domain maintenance. Move your domain to a new provider in Texas and keep your web page performing. We monitor renewals, manage DNS updates, and provide ongoing support to maintain peak uptime and fast performance for every client.",
    },
    {
      img: renewalcheck,
      title: "Domain Renewal & Management Solutions",
      para: "Never risk losing your web identity again. We help you transfer website domains in New York, protect accounts, synchronize renewals, and maintain multi-domain portfolios, all while keeping your registrations active and compliant.",
    },
    {
      img: privacy,
      title: "DNS & Security Configuration:",
      para: "Protect with precision. We manage every DNS record and safeguard your setup through every domain transfer, ensuring your web integrity stays uncompromised.",
    },
  ];

  return (
    <>

      <ReactHelmet
        title="Domain Transfer in Texas"
        description="Texas Web Studio offers fast, verified domain transfer in Texas with zero downtime. Secure migration, expert DNS setup, and protection for your data, email, and identity."
        url={`${webUrl}/domain-transfer`}
      />

      <DefaultLayout>
        <InnerBanner
          secClass="locate-wordpress-herobanner domain-transfer-herobanner"
          leftCol="col-lg-8 order-lg-1 order-2"
          rightCol="col-lg-4 order-lg-2 order-1"
          bannerImg={innerimg}
          title="Move Your Domain Safely, Quickly, and Without Downtime!"
          description="At Texas Web Studio, we make the domain transfer in Texas a smooth ride, not a technical tug-of-war. Switching registrars, merging brands, or expanding online, our experts ensure your domain transition happens fast, safely, and with zero downtime, so your business never misses a sale."
          btntxt="Transfer Your Domain"
        />

        <WordPressPerformanceSection
          miniheadclass="shorttop-head"
          leftCol="col-lg-7"
          rightCol="col-lg-5"
          minihead="Fast, Secure & Always Online"
          secTitle1="If Your Web is lagging, the Issue might be the Domain"
          description="Just like your physical address, domain is your virtual address that holds your website, and if it holds your website, you better believe it holds all the information too! Your data, backups, emails and passkeys. Domain is your online identity. A transfer is the moment you move that identity to a registrar that serves you better, and for that, you need someone you can trust, and what better company to do that with than the one trusted by Americans? At Texas Web Studios, we help you transfer your domain to another registrar in Texas without breaking your website, emails, or search visibility."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Transfer Your Domain"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection domain-register-choose domain-unique-sec"
          reverse
          miniheadclass="shorttop-head"
          minihead="Why Choose Us?"
          secTitle1="Your Domain is Safer in Our Hands"
          description="Working with us, you’re not just handing over a domain; you’re trusting us with your digital DNA. We handle your IT-related tasks so you can focus on your core: running your business. From DNS configuration to verified ICANN domain transfer in Texas, our specialists ensure a migration that’s fast, reliable, and completely disruption-free."
          designpointheadline="What You Get With Us:"
          whyChooseList={[
            "Fast, verified, and secure transfers",
            "Full domain ownership and data protection",
            "Expert DNS and email configuration",
            "24/7 human-led technical support",
            "Zero downtime, guaranteed",
            "Support for all global domain extensions",
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Move My Domain Securely"
          aboutbtnlink="/contact"
          learnmorebtn="theme-btn"
        />

        <DomainRegisterationServices
          CardCol="col-lg-4 col-md-6"
          CardClass="text-center"
          shortHead="What We Do"
          mainHead="All Our Domain & Transfer Related Services"
          description="We are the company trusted by thousands of Americans, providing domain-related services for years, helping millions of American businesses go global."
          btnText="Talk to Our Developers"
          btnLink="/contact"
          services={frontendservices}
        />


        <TransferSupport
          TransportSecClass="domaintransfer-support-sec transfer-support-sec"
          mainHead="Want to Know How We Can Help You?"
          paraOne="There’s a thing about data that we can all agree on: no amount of money can replace the loss that comes with security breaches and data loss. That’s precisely why we manage your transfer website domain in Texas. We treat your information and data as a mission-critical asset because we understand the importance of your data; thus, we protect it with the best tech stack in the market."
           listItems={[
            "Guaranteed secured domain transfer",
            "Fastest transfer completion & support"
          ]}
          description="Shift your domain to a new provider with Texas Web Studios. "
          buttonText="Talk to Us"
        />

        <DomainTransferProcess />


        <LocationContact
          secClass="ecommerce-contact-sec"
          minihead="Connect with Us"
          mainhead="Secure a New Domain in Texas and Go Worldwide! "
          secPara="Have a question? Thinking about switching providers? Or just curious if your website could run faster? Fill out the form and talk to us. We’ll check your site’s performance, guide you through the options, and help you transfer your site to a better, faster domain."
          btntxt="Send Message"
        />

        <BlogSec 
          minihead="Blogs & Articles"
          secTitle="Insights to Make Your Site Faster"
        />



      </DefaultLayout>
    </>
  );
};

export default DomainTransfer;
