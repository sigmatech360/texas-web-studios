import React from 'react'
import service1 from "../../assets/images/services/webdesign/service1.webp";
import service2 from "../../assets/images/services/webdesign/service2.webp";
import service3 from "../../assets/images/services/webdesign/service3.webp";
import service4 from "../../assets/images/services/webdesign/service4.webp";
import service5 from "../../assets/images/services/webdesign/service5.webp";
import service6 from "../../assets/images/services/webdesign/service6.webp";

const NewWebDesignServices = () => {
  return (
    <section className='webdesign-services-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="webdesign-service-head">
                        <h6 className='shorttop-head text-white'>More of Our Services </h6>
                        <h2 className='mainhead text-white'>More Design Power For Your Brand</h2>
                        <p>Explore our powerful solutions that package and prep your brand for the digital era in all ways.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="webdesign-service-cards">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="webdesign-service-card">
                                    <img src={service1} alt="img" />
                                    <div className="webdesign-service-cardtxt">
                                        <h4>Landing Page Design</h4>
                                        <p>Crafted for instant clarity and strong conversions. Every section leads users deeper, guiding them from curiosity to action with minimal friction and maximum confidence. Built to convert even skimmers.</p>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-6 col-md-6">
                                <div className="webdesign-service-card">
                                    <img src={service2} alt="img" />
                                    <div className="webdesign-service-cardtxt">
                                        <h4>Logo Design</h4>
                                        <p>A visual identity that represents your brand at first glance. We create logos with personality, structure, and meaning so your brand feels recognizable, memorable, and timeless across every touchpoint.</p>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-6 col-md-6">
                                <div className="webdesign-service-card">
                                    <img src={service3} alt="img" />
                                    <div className="webdesign-service-cardtxt">
                                        <h4>Video Animations</h4>
                                        <p>Motion that makes your brand unforgettable. From explainer videos to branded loops, we design animations that simplify big ideas, enhance engagement, and boost your digital presence instantly.</p>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-6 col-md-6">
                                <div className="webdesign-service-card">
                                    <img src={service4} alt="img" />
                                    <div className="webdesign-service-cardtxt">
                                        <h4>Creative Ads</h4>
                                        <p>Ads that stand out instead of blending into the feed. We combine attention-grabbing visuals, sharp copy, and data insights to design creative assets that spark clicks without feeling pushy.</p>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-6 col-md-6">
                                <div className="webdesign-service-card">
                                    <img src={service5} alt="img" />
                                    <div className="webdesign-service-cardtxt">
                                        <h4>Newsletter Design</h4>
                                        <p>Clean, scroll-worthy email layouts built for engagement. We craft newsletters that balance storytelling with sleek visuals, helping you build trust, nurture customers, and keep your brand top of inbox.</p>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-6 col-md-6">
                                <div className="webdesign-service-card">
                                    <img src={service6} alt="img" />
                                    <div className="webdesign-service-cardtxt">
                                        <h4>Product Packaging Design</h4>
                                        <p>Packaging that sells your product before anyone even touches it. We design for emotion, shelf appeal, and strong brand consistency, making your product irresistible in a crowded marketplace.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewWebDesignServices