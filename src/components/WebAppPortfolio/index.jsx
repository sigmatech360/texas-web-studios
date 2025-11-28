import React from 'react'
import portfolioimg1 from "../../assets/images/services/webappdevelopment/portfolioimg1.webp"
import portfolioimg2 from "../../assets/images/services/webappdevelopment/portfolioimg2.webp"
import portfolioimg3 from "../../assets/images/services/webappdevelopment/portfolioimg3.webp"
import portfolioimg4 from "../../assets/images/services/webappdevelopment/portfolioimg4.webp"

const WebAppPortfolio = () => {
  return (
    <section className='webapp-portfolio-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="webapp-portfolio-head">
                        <h6 className='minihead text-white'>Portfolio</h6>
                        <h2 className='mainhead text-white'>Web App That Powers Industries</h2>
                        <p>Every project we have built solves a problem, delights users, and moves a business forward. Here’s a look at the web applications reshaping industries today.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="webapp-portfolio-box">
                        <img src={portfolioimg1} alt="image" />
                        {/* <div className="webapp-portfolio-txtbox">
                            <h5>Our Latest Web App Projects</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="webapp-portfolio-box webapp-padding-portfolio">
                        <img src={portfolioimg2} alt="image" />
                        {/* <div className="webapp-portfolio-txtbox">
                            <h5>Our Latest Web App Projects</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="webapp-portfolio-box webapp-margin-portfolio">
                        <img src={portfolioimg3} alt="image" />
                        {/* <div className="webapp-portfolio-txtbox">
                            <h5>Our Latest Web App Projects</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="webapp-portfolio-box">
                        <img src={portfolioimg4} alt="image" />
                        {/* <div className="webapp-portfolio-txtbox">
                            <h5>Our Latest Web App Projects</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WebAppPortfolio