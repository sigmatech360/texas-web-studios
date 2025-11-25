import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import chooseimg1 from "../../assets/images/services/webappdevelopment/chooseimg1.webp"
import chooseimg2 from "../../assets/images/services/webappdevelopment/chooseimg2.webp"
import chooseimg3 from "../../assets/images/services/webappdevelopment/chooseimg3.webp"
import chooseimg4 from "../../assets/images/services/webappdevelopment/chooseimg4.webp"

const items = [
  {
    img: chooseimg1,
    title: "Web App Development Expertise",
    desc: "With Over 13 Years Of Experience In Developing Web Apps, Our Teams Bring Proven Methods And Knowledge To The Table."
  },
  {
    img: chooseimg2,
    title: "Custom Solutions",
    desc: "We Create Tailor-Made Web Applications That Match Your Business Needs And Deliver Lasting Value."
  },
  {
    img: chooseimg3,
    title: "Latest Technologies",
    desc: "Our Developers Use Modern Tools And Frameworks To Build Secure, High-Performance Web Applications."
  },
  {
    img: chooseimg4,
    title: "End-to-End Support",
    desc: "From Planning To Deployment, We Provide Complete Support To Ensure Smooth Project Execution."
  }
];

const WebAppDevelopmentChooseUs = () => {
  return (
    <section className='webapppdevelopment-choose-sec'>
      <div className="container">
        <div className="row">
          
          <div className="col-lg-6">
            <div className="webappdevelopment-choose-txt">
              <h6 className='shorttop-head text-white'>WHY CHOOSE US</h6>
              <h2 className='mainhead text-white'>
                Why Choose Texas Web Studios For Web App Development?
              </h2>
              <p>
                We Don’t Just Build Applications — We Build Long-Term Solutions.
                Our Skilled Team Uses The Latest Technologies To Deliver Web Apps
                That Are Powerful, Secure, And Future-Ready.
              </p>
              <Link to="/contact" className='theme-btn'>
                Explore All Wordpress Solutions <FaArrowRightLong />
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="marquee-wrapper">
              <div className="marquee-content">
                {items.concat(items).map((item, index) => (
                  <div className="webapp-choose-box" key={index}>
                    <img src={item.img} alt="image" />
                    <div className="webapp-choose-boxtxt">
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WebAppDevelopmentChooseUs
