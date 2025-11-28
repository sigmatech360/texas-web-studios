import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const WebAppDevelopmentServices = () => {
  return (
    <section className='webappdevelopment-services-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="webappdevelopment-services-head">
                        <h6 className='shorttop-head'>Services</h6>
                        <h2 className='mainhead'>Simple Apps to Full-Systems, We Build All and More</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="webappdevelopment-services-head">
                        <p>We build every kind of web application your business could ever need, designed for speed, security, creativity, and seamless performance across every device.</p>
                        <Link to="/contact" className='theme-btn'>Start Your Project</Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="webdevelopment-service-box">
                        <h4>Single Page Applications (SPAs)</h4>
                        <p>Want a website that doesn’t need to load? One that feels like mobile apps, reacts instantly, and keeps users engaged. Built by our web app development company in Texas, our SPAs deliver speed, smoothness, and modern user experiences. Development so good even Google uses it!</p>
                        {/* <Link to="/contact">Explore More <FaArrowRightLong /></Link> */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="webdevelopment-service-box">
                        <h4>E-Commerce Store Development:</h4>
                        <p>Launch an online store that loads fast, converts better, and works beautifully on all devices. Our custom web app development services in Texas help you sell smarter with powerful shopping experiences tailored to your brand.</p>
                        {/* <Link to="/contact">Explore More <FaArrowRightLong /></Link> */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="webdevelopment-service-box">
                        <h4>Shopify Development:</h4>
                        <p>We build high-performing Shopify stores with clean code, custom themes, and automated systems. As a leading web and mobile app development company in Texas, our storefronts are built for speed, sales, and scalability.</p>
                        {/* <Link to="/contact">Explore More <FaArrowRightLong /></Link> */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="webdevelopment-service-box">
                        <h4>Wix Development:</h4>
                        <p>For businesses that don’t need robust power but still require a web page to perform fast, Wix development is for them. Powered by our web app development services in Texas, and supported by thousands of developers supported plugins, Wix is fast, agile, and so simple, anyone can control it.</p>
                        {/* <Link to="/contact">Explore More <FaArrowRightLong /></Link> */}
                    </div>
                </div> 
                <div className="col-lg-3 col-md-6">
                    <div className="webdevelopment-service-box">
                        <h4>Custom Web App Development:</h4>
                        <p>Filled with robust power, top-tier functionalities, and made to perform heavy lifting, our custom web app services are for companies looking to develop complex web apps, CRMs, LMS, and more. Our team delivers fully custom solutions designed for unique workflows using full-stack web app development in Texas.</p>
                        {/* <Link to="/contact">Explore More <FaArrowRightLong /></Link> */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="webdevelopment-service-box">
                        <h4>Progressive Web Apps:</h4>
                        <p>Need a website that runs on a browser but looks and works exactly like mobile apps? Built through our web app development agency in Texas, PWAs offer unmatched performance, one which is the same as mobile apps, but can work on a browser too.</p>
                        {/* <Link to="/contact"> Explore More <FaArrowRightLong /></Link> */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="webdevelopment-service-box">
                        <h4>Web App Domain Registration & Transfer:</h4>
                        <p>Your web app deserves a digital home that’s fast, secure, and fully optimized. Our web app development companies in Texas streamline registration, transfer, DNS setup, and security so your app stays online without interruption.</p>
                        {/* <Link to="/contact">View Service <FaArrowRightLong /></Link> */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="webdevelopment-service-box">
                        <h4>Web App Maintenance:</h4>
                        <p>The best way to keep your web app fast, secure, and always online is through our web maintenance service in Texas. We offer web app maintenance that includes monthly/weekly backups, integrated security protocols, and 24/7 availability, so your web app stays online, protected, and performing at its best.</p>
                        {/* <Link to="/contact">Explore More <FaArrowRightLong /></Link> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WebAppDevelopmentServices