import React from 'react'
import portfolio1 from "../../assets/images/services/backenddevelopment/portfolio1.webp";
import portfolio2 from "../../assets/images/services/backenddevelopment/portfolio2.webp";
import portfolio3 from "../../assets/images/services/backenddevelopment/portfolio3.webp";
import portfolio4 from "../../assets/images/services/backenddevelopment/portfolio4.webp";
import { Link } from 'react-router-dom';


const BackendPortfolio = () => {
  return (
    <section className='backend-portfolio-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="backend-portfolio-head">
                        <h6 className='shorttop-head'>Our Portfolio</h6>
                        <h2 className='mainhead'>Setting Global Standards with Our Backend Portfolio</h2>
                        <p>Explore our portfolio of successful backend development solutions that power businesses across Texas. From enterprise-level systems to innovative startups, our backend expertise fuels scalable, high-performance websites and applications designed for long-term success.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="portfoli-img">
                        <img src={portfolio1} alt="portfolio image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="portfoli-img">
                        <img src={portfolio2} alt="portfolio image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="portfoli-img">
                        <img src={portfolio3} alt="portfolio image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="portfoli-img">
                        <img src={portfolio4} alt="portfolio image" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="backend-portfolio-btn">
                        <Link to="/portfolio" className='theme-btn'>View Our Portfolio</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BackendPortfolio