import React from 'react'
import portfolio1 from "../../assets/images/services/mobileappdev/portfolio1.webp";
import portfolio2 from "../../assets/images/services/mobileappdev/portfolio2.webp";
import portfolio3 from "../../assets/images/services/mobileappdev/portfolio3.webp";
import portfolio4 from "../../assets/images/services/mobileappdev/portfolio4.webp";


const MobileAppPortfolio = () => {
  return (
    <section className='mobileappdev-portfolio-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="mobileappdev-portfolio-head">
                        <h6 className='shorttop-head'>Our Mobile App Portfolio</h6>
                        <h2 className='mainhead'>Turning Concepts into Applications Loved by Many</h2>
                        <p>Our portfolio features apps designed for different industries. Each project reflects our commitment to thoughtful design, strong functionality, and lasting user satisfaction.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="mobileappdev-portfolio-img">
                        <img src={portfolio1} alt="image" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="mobileappdev-portfolio-img">
                        <img src={portfolio2} alt="image" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="mobileappdev-portfolio-img">
                        <img src={portfolio3} alt="image" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="mobileappdev-portfolio-img">
                        <img src={portfolio4} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MobileAppPortfolio