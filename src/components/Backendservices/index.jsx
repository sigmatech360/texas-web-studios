import React from 'react'
import { Link } from 'react-router-dom'
import service1 from "../../assets/images/services/backenddevelopment/service1.webp";
import service2 from "../../assets/images/services/backenddevelopment/service2.webp";
import service3 from "../../assets/images/services/backenddevelopment/service3.webp";
import service4 from "../../assets/images/services/backenddevelopment/service4.webp";

const Backendservices = () => {
  return (
    <section className='backend-services-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="backend-service-head">
                        <h6 class="shorttop-head text-white">More of Our Services</h6>
                        <h2 className='mainhead text-white'>Every Element Your Backend Needs to Succeed</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="backend-service-head">
                        <p>Our backend is boosted and strengthened by powerful technologies and processes that ensure your digital product performs consistently at its best.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="backend-service-txt">
                        <h5>Content Management Systems (CMS)</h5>
                        <p>Our CMS solutions allow effortless control over your website content. For every business we take responsibility for, we create custom CMS platforms that simplify updates, ensure security, and provide flexibility without compromising design and aesthetics.</p>
                        {/* <Link to="/contact" className="theme-btn" >Explore Services</Link> */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="backend-service-img">
                        <img src={service1} alt="service img" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="backend-service-img">
                        <img src={service2} alt="service img" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="backend-service-txt">
                        <h5>DevOps Services</h5>
                        <p>Our DevOps experts bridge the gap between development and operations, ensuring faster deployments, continuous integration, and zero downtime. We automate workflows, bring easier updates, and optimize delivery pipelines to improve the reliability and performance of your project.</p>
                        {/* <Link to="/contact" className="theme-btn">Explore Services</Link> */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="backend-service-txt">
                        <h5>Server Management</h5>
                        <p>Our backend development agency in Texas provides full server management to maintain a robust web infrastructure, ensuring it remains strong and resilient. We monitor server performance, apply proactive maintenance, and ensure optimal uptime, giving your digital assets a solid foundation to operate on.</p>
                        {/* <Link to="/contact" className="theme-btn">Explore Services</Link> */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="backend-service-img">
                        <img src={service3} alt="service img" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="backend-service-img">
                        <img src={service4 } alt="service img" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="backend-service-txt">
                        <h5>SSL Hosting</h5>
                        <p>Security is the backbone of every successful website. Our SSL hosting solutions guarantee encrypted connections, safeguarding sensitive data and boosting your SEO credibility while ensuring your customers always browse with confidence.</p>
                        {/* <Link to="/contact" className="theme-btn">Explore Services</Link> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Backendservices