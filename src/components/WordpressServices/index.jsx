import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import service1 from "../../assets/images/services/wordpressdevelopment/service1.webp"
import service2 from "../../assets/images/services/wordpressdevelopment/service2.webp"
import service3 from "../../assets/images/services/wordpressdevelopment/service3.webp"

const WordpressServices = () => {
  return (
    <section className='wordpress-services-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="wordpress-services-head">
                        <h6 className='shorttop-head text-white'>WordPress & More</h6>
                        <h2 className='mainhead text-white'>Other Services We Offer in Texas</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="wordpress-services-head">
                        <p>WordPress is not the only thing we do. As a full-service website development company in Texas, we offer a range of additional website development services for brands that require a unique solution tailored to their needs.</p>
                        {/* <Link to="/contact" className='theme-btn'>Explore All Wordpress Solutions <FaArrowRight /></Link> */}
                    </div>
                </div>
            </div>
            <div className="row border-top border-white">
                <div className="col-lg-6">
                    <div className="wordpress-service-img">
                        <img src={service1} alt="image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="wordpress-service-txt">
                        <h4>E-Commerce Development</h4>
                        <p>Build online stores that don’t just sell, they perform. From product design to checkout flow, our eCommerce WordPress solutions combine fast performance, strong security, and user-focused design to help Texas businesses grow sales and build lasting customer loyalty.</p>
                        <Link to="/contact" className='theme-btn'>See What We Can Do <FaArrowRight /></Link>
                    </div>
                </div>
            </div>
            <div className="row border-top border-white">
                <div className="col-lg-6">
                    <div className="wordpress-service-img">
                        <img src={service2}  alt="image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="wordpress-service-txt">
                        <h4>CMS Development</h4>
                        <p>We create powerful, intuitive CMS platforms that let you control your content with ease. Our WordPress CMS solutions are scalable, flexible, and built for speed, giving your brand complete control without compromising design, functionality, or performance.</p>
                        <Link to="/contact" className='theme-btn'> See What We Can Do <FaArrowRight /></Link>
                    </div>
                </div>
            </div>
            <div className="row  border-top border-bottom border-white">
                <div className="col-lg-6">
                    <div className="wordpress-service-img">
                        <img src={service3}  alt="image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="wordpress-service-txt">
                        <h4>Custom Development</h4>
                        <p>Every business is unique; your website should be too. Our custom WordPress development services in Texas deliver tailor-made functionalities, custom plugins, and adaptive designs built to enhance performance, user experience, and long-term growth.</p>
                        <Link to="/contact" className='theme-btn'>See What We Can Do <FaArrowRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WordpressServices