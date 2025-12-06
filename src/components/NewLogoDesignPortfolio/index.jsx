import React from 'react'
import portfolio1 from "../../assets/images/services/logodesign/portfolio1.webp";
import portfolio2 from "../../assets/images/services/logodesign/portfolio2.webp";
import portfolio3 from "../../assets/images/services/logodesign/portfolio3.webp";
import portfolio4 from "../../assets/images/services/logodesign/portfolio4.webp";
import portfolio5 from "../../assets/images/services/logodesign/portfolio5.webp";
import portfolio6 from "../../assets/images/services/logodesign/portfolio6.webp";
import { Link } from 'react-router-dom';


const NewLogoDesignPortfolio = () => {
  return (
    <section className='logodesign-portfolio-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="logodesign-portfolio-head">
                        <h6 className='shorttop-head'>Our Portfolio</h6>
                        <h2 className='mainhead'>A Showcase of Creativity</h2>
                        <p>We build visual identities that hit the sweet spot between artistic flair and strategic thinking. Every project highlights our ability to turn ideas into clean, powerful, recognizable brand marks.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="logodesign-portfolio-img">
                        <img src={portfolio1} alt="img" />
                        <h5>Logo Design</h5>
                    </div>
                    <div className="logodesign-portfolio-img">
                        <img src={portfolio4} alt="img" />
                        <h5>Logo Design</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="logodesign-portfolio-btn">
                        <Link to="/portfolio">View Full Logo Portfolio</Link>
                    </div>
                     <div className="logodesign-portfolio-img">
                        <img src={portfolio2} alt="img" />
                        <h5>Logo Design</h5>
                    </div>
                    <div className="logodesign-portfolio-img">
                        <img src={portfolio5} alt="img" />
                        <h5>Logo Design</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="logodesign-portfolio-img">
                        <img src={portfolio3} alt="img" />
                        <h5>Logo Design</h5>
                    </div>
                    <div className="logodesign-portfolio-img">
                        <img src={portfolio6} alt="img" />
                        <h5>Logo Design</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewLogoDesignPortfolio