import React from 'react'
import process1 from "../../assets/images/services/domaintransfer/process-1.webp";
import process2 from "../../assets/images/services/domaintransfer/process-2.webp";
import process3 from "../../assets/images/services/domaintransfer/process-3.webp";
import process4 from "../../assets/images/services/domaintransfer/process-4.webp";


const DomainTransferProcess = () => {
  return (
       <section className='our-process-sec'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="our-process-head">
                            <h6 className='shorttop-head'>How it Works</h6>
                            <h2 className='mainhead'>Your Store, Built With Precision</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="our-process-text phaseone pe-5">
                            <h4>Discovery & Strategy</h4>
                            <p>We start by understanding your business’s audience and goals in depth. Then, our team researches your competitors and customer behaviors to outline a clear e-commerce website development strategy designed to improve visibility on the internet, web performance, and conversions, while aligning perfectly with your long-term brand vision.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="our-process-img ps-5">
                            <img src={process1} alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="our-process-img phaseoneimg pe-5">
                            <img src={process2} alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="our-process-text phasetwo ps-5">
                            <h4>Design & Wireframing</h4>
                            <p>Our design process begins with user experience in mind. According to user behavior, we create layouts that highlight your products, simplify navigation, and strengthen brand identity. Then, for the wireframe, we ensure an intuitive customer journey that feels natural, enjoyable, and ultimately encourages users to stay longer and buy more.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="our-process-text phasethree pe-5">
                            <h4>Development & Integration</h4>
                            <p>This is where your vision finally comes to life. Based on design and wireframes, we use the latest technologies to code a high-performing, mobile-friendly store that’s fast and SEO-ready. Finally, we integrate secure payment gateways, inventory systems, and marketing tools to streamline operations and ensure every feature works flawlessly.</p>
                        </div>
                    </div>
                     <div className="col-lg-6">
                        <div className="our-process-img ps-5">
                            <img src={process3} alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="our-process-img phaseoneimg pe-5">
                            <img src={process4} alt="img" />
                        </div>
                    </div>
                     <div className="col-lg-6">
                        <div className="our-process-text phasefour ps-5">
                            <h4>Content & Product Setup</h4>
                            <p>We organize your product listings, descriptions, and categories for easy discovery and smooth browsing. Our team ensures every page is optimized with clear visuals, persuasive content, and strong CTAs, making your E-Commerce Website Development project both user-centered and search engine–friendly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default DomainTransferProcess