import React from 'react'
import ReactHelmet from '../../components/ReactHelmet'
import InnerBanner from '../../components/InnerBanner';
import DefaultLayout from '../../components/DefaultLayout';
import herobanner from "../../assets/images/services/mobileappdev/herobanner.webp";
import chooseimg from "../../assets/images/services/mobileappdev/chooseimg.webp";
import digitalMarketingWhyChooseIcon1 from "../../assets/images/services/mobileappdev/chooseicon1.svg";
import digitalMarketingWhyChooseIcon2 from "../../assets/images/services/mobileappdev/chooseicon2.svg";
import digitalMarketingWhyChooseIcon3 from "../../assets/images/services/mobileappdev/chooseicon3.svg";
import { Link } from 'react-router-dom';
import BookCallSec from '../../components/BookCallSec';
import MobileAppDevTeam from '../../components/MobileAppDevTeam';
import MobileAppServices from '../../components/MobileAppServices';
import WhyCooseUsSec from '../../components/WhyCooseUsSec';
import BackendProcess from '../../components/BackendProcess';
import MobileAppPortfolio from '../../components/MobileAppPortfolio';
import LocationContact from '../../components/LocationContact';
import BlogSec from '../../components/BlogSec';



const webUrl = import.meta.env.VITE_WEB_URL;

const NewMobileAppDev = () => {

    const backendprocessdata = [
    {
      number: "01",
      title: "Discovery:",
      text: "The first step of our mobile application services in Texas is to understand everything about your audience and your brand goals to create a plan accordingly.",
    },
    {
      number: "02",
      title: "Design:",
      text: "We then design an interface based on the research details, which is made to reflect your brand values and theme in a way that engages your audience.",
    },
    {
      number: "03",
      title: "Development:",
      text: "The interface is then given to our mobile app developers in Texas, who use secure frameworks and tools to build highly functioning iOS and Android applications.",
    },
    {
      number: "04",
      title: "Testing:",
      text: "Finally, after testing, the app becomes ready to be launched. At this point, we align all visual, technical and user elements to bring optimal final results.",
    },
    {
      number: "05",
      title: "Support:",
      text: "Our mobile app development service in Texas doesn’t end at launch; we offer post-launch support to all our clients, so you can update or upgrade at any time!",
    },
  ];


  return (
    <>
    <ReactHelmet
        title="Best Mobile App Development Company Texas | iOS, Android & eCommerce Apps"
        description="Texas Web Studios offers custom mobile app development services in Texas. Build powerful iOS, Android, and eCommerce apps that connect people and grow your business. "
        url={`${webUrl}/mobile-app-development`}
      />

      <DefaultLayout>
         <InnerBanner
          secClass="locate-wordpress-herobanner logodesign-herobanner-sec"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          bgImage={herobanner}
          title="Creative Mobile App Development Services"
          description="We design and build apps that connect businesses with people. As a mobile app development company in Texas, we create products that are intuitive, secure, and built to grow."
          btntxt="Start Your Project"
        />


        <section className="mobileappdev-about-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="mobileappdev-about-txt">
                            <h6 className='shorttop-head'>About Us</h6>
                            <h2 className='mainhead'>Building Apps That Speak Your Language</h2>
                            <p>Our Mobile App Development Agency in Texas is the place you come to when you need quality, professionalism, and an edge of creativity that establishes you as the industry leader. We make mobile applications built on user behavior, each app is made to provide clarity, performance, and a clear purpose. </p>
                            <Link to="/about" className='theme-btn'>More About Texas Web Studios</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>



         <BookCallSec
          bookSec="mobileapp-bookcall"
          title="Your Mobile Application Deserves to Shine"
          btnText="Book a Call"
        />


        <MobileAppDevTeam/>


        <MobileAppServices/>


        <WhyCooseUsSec
          secTag={<h2 className="sec-tag">At Texas Web Studios</h2>}
          secTitle={
            <h2 className="secTitle" data-aos="fade-right" data-aos-delay="200">
              Build A Direct Connection with Your Audience
            </h2>
          }
          secDescription="Before we begin working on any mobile application, we work on its vision. We create detailed personas that carve out exactly what your audience wants in an application. Your business grows effortlessly when your applications are built according to your audience. "
          image={chooseimg}
          leftP="Our custom mobile application services blend creativity with technology to bring your ideas to life. Our apps are made to reflect your brand’s purpose and connect with your audience deeply. "
          leftSubTitle={
            <h4
              className="whyChooseRightTitle"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Your next great idea deserves care
            </h4>
          }
          btnText="Start Your Project"
          list={[
            {
              image: digitalMarketingWhyChooseIcon1,
              title: (
                <h3 className="whyChooseListItemTitle">
                  Dedicated Support:
                </h3>
              ),
              description:
                "We stay involved through every stage.",
            },
            {
              image: digitalMarketingWhyChooseIcon2,
              title: (
                <h3 className="whyChooseListItemTitle">
                  Custom Solutions: 
                </h3>
              ),
              description:
                "Each app is made to fit your business needs.",
            },
            {
              image: digitalMarketingWhyChooseIcon3,
              title: (
                <h3 className="whyChooseListItemTitle">Local Expertise: </h3>
              ),
              description:
                "Built in Texas by experienced developers.",
            },
            // {
            //   image: customDevWhyChooseIcon4,
            //   title: "Performance Optimization",
            //   description:
            //     "We Optimize Your Website’s Speed, Structure, and Code to Ensure Faster Loading Times, Better User Experience, and Improved Search Engine Performance.",
            // },
          ]}
        />


         <BackendProcess
          secClass="mobileapp-process-sec"
          shortTopHead="Our Process"
          mainHead="How We Create Mobile Applications"
          cards={backendprocessdata}
        />


        <MobileAppPortfolio/>



        <LocationContact
          secClass="ecommerce-contact-sec"
          minihead="Contact Us"
          mainhead="Let’s Build Mobile Applications That Last"
          secPara="Reach out to our mobile app development company in Texas today, and let’s turn your vision into a fully functional digital experience."
          btntxt="Send A Message"
        />

        <BlogSec
          minihead="Blogs & Articles"
          secTitle="Get All Tech-Related News Here"
        />





      </DefaultLayout>
    
    </>
  )
}

export default NewMobileAppDev