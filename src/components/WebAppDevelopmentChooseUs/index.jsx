import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import chooseimg1 from "../../assets/images/services/webappdevelopment/chooseimg1.webp"
import chooseimg2 from "../../assets/images/services/webappdevelopment/chooseimg2.webp"
import chooseimg3 from "../../assets/images/services/webappdevelopment/chooseimg3.webp"
import chooseimg4 from "../../assets/images/services/webappdevelopment/chooseimg4.webp"
import { useModal } from '../../context/ModalContext'

const items = [
  {
    img: chooseimg1,
    title: "Full-Stack Expertise You Can Count On",
    desc: "Our developers understand both front-end finesse and backend engineering, giving you a complete, top-tier solution from database to UI."
  },
  {
    img: chooseimg2,
    title: "Built for Performance, Speed, and Scale",
    desc: "We architect web apps that load fast, handle high traffic, and stay stable even during peak usage, because slow apps lose customers."
  },
  {
    img: chooseimg3,
    title: "We architect web apps that load fast, handle high traffic, and stay stable even during peak usage, because slow apps lose customers.",
    desc: "Every business is unique, so your app should be too. We design tailored systems that match your workflows, goals, and long-term vision."
  },
  {
    img: chooseimg4,
    title: "Agile Development That Keeps You in ",
    desc: "You get faster releases, smoother updates, and complete flexibility. We adapt, iterate, and improve, so the only ones that are left behind are your competitors."
  }
];

const WebAppDevelopmentChooseUs = () => {
  const { setShowModal } = useModal();
  return (
    <section className='webapppdevelopment-choose-sec'>
      <div className="container">
        <div className="row">
          
          <div className="col-lg-6">
            <div className="webappdevelopment-choose-txt">
              <h6 className='shorttop-head text-white'>Best in Business</h6>
              <h2 className='mainhead text-white'>
                Smartest Choice for Web App Development in Texas
              </h2>
              <p>Choosing the right team, the one with real experience, the right tech stack, and proven results, means getting a web app that works exactly the way your business needs it, and the way you want it. </p>
              <Link onClick={() => setShowModal(true)} className='theme-btn'>
                Talk to Us <FaArrowRightLong />
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
