import React from 'react'
import process1 from "../../assets/images/services/smm/process1.webp";
import process2 from "../../assets/images/services/smm/process2.webp";
import process3 from "../../assets/images/services/smm/process3.webp";
import process4 from "../../assets/images/services/smm/process4.webp";
import process5 from "../../assets/images/services/smm/process5.webp";


const SMMServices = () => {
  return (
    <section className='smm-services-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="smm-services-head text-center">
                        <h6 className='shorttop-head'>The Process</h6>
                        <h2 className='mainhead text-white'>The Process Behind Social Media Expertise</h2>
                        <p>Discover how we complete your social media marketing in Texas projects and campaigns. </p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="smm-services-box">
                        <img src={process1} alt="image" />
                        <div className="smm-service-boxtxt">
                            <h5>Brand Understanding and Audience Insight</h5>
                            <p>We begin by studying your brand, your goals, and your audience’s behavior. This helps us understand where your customers spend time, what captures their interest, and how your social presence can deliver value and visibility.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-services-box">
                        <img src={process2} alt="image" />
                        <div className="smm-service-boxtxt">
                            <h5>Strategic Planning and Content Layouts</h5>
                            <p>Next, we create a structured plan that maps out your content types, posting schedule, platform selection, and engagement strategy. Every detail supports a consistent and unified presence across your social media channels.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-services-box">
                        <img src={process3} alt="image" />
                        <div className="smm-service-boxtxt">
                            <h5>Creative Development and Messaging</h5>
                            <p>We design visuals, craft copy, and prepare content that speaks clearly to your audience. Each piece is made with purpose: to connect, inspire action, and reinforce your brand personality across platforms.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-services-box">
                        <img src={process4} alt="image" />
                        <div className="smm-service-boxtxt">
                            <h5>Execution and Human Engagement</h5>
                            <p>We post content at optimal times and monitor audience reactions to keep conversations flowing. Engagement is always natural, warm, and prompt, so your brand feels approachable and trustworthy.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-services-box">
                        <img src={process5} alt="image" />
                        <div className="smm-service-boxtxt">
                            <h5>Tracking, Analysis, and Optimization</h5>
                            <p>We monitor performance through insights and analytics. With these results, we refine strategies and enhance your campaigns, ensuring your social media presence continues to improve and aligns with your goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SMMServices
