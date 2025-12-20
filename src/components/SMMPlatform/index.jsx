import React from 'react'
import platform1 from "../../assets/images/services/smm/facebook.webp";
import platform2 from "../../assets/images/services/smm/instagram.webp";
import platform3 from "../../assets/images/services/smm/linkedin.webp";
import platform4 from "../../assets/images/services/smm/twitter.webp";
import platform5 from "../../assets/images/services/smm/youtube.webp";
import platform6 from "../../assets/images/services/smm/pinterest.webp";
import platform7 from "../../assets/images/services/smm/tiktok.webp";
import platform8 from "../../assets/images/services/smm/snapchat.webp";
import platform9 from "../../assets/images/services/smm/thread.webp";


const SMMPlatform = () => {
  return (
    <section className='smm-platform-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="smm-platform-head text-center">
                        <h6 className='shorttop-head'>Our Reach</h6>
                        <h2 className='mainhead'>Platforms We Grow Your Reach On</h2>
                        <p>Every platform offers a unique opportunity. We help your brand grow across the channels where your audience spends time and connects most.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="smm-platform-box">
                        <img src={platform1} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>Facebook Marketing</h5>
                            <p>We create engaging posts and ads that build community, strengthen recognition, and keep your audience connected through meaningful interactions and targeted campaigns.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-platform-box">
                        <img src={platform2} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>Instagram Marketing</h5>
                            <p>We produce aesthetic visuals, stories, and reels designed to highlight your brand personality and deepen audience connection through immersive visual experiences.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-platform-box">
                        <img src={platform3} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>LinkedIn Marketing</h5>
                            <p>We build your professional presence with thought leadership, company updates, and content that appeals directly to decision makers and industry networks.</p>
                        </div> 
                    </div>
                </div>
                <div className="col-lg-4"> 
                    <div className="smm-platform-box">
                        <img src={platform4} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>X (Twitter) Marketing</h5>
                            <p>We create sharp, timely updates that spark conversations and keep your brand relevant in trending discussions and real-time interactions.</p>
                        </div>  
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-platform-box">
                        <img src={platform5} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>YouTube Marketing</h5>
                            <p>We guide long-form content strategies that help you educate, inspire, and build authority with videos your audience returns to again and again.</p>
                        </div>  
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-platform-box">
                        <img src={platform6} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>Pinterest Marketing</h5>
                            <p>We design pins that attract long-term visibility and inspire audiences to save, explore, and engage with your ideas and offerings</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-platform-box">
                        <img src={platform7} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>TikTok Marketing</h5>
                            <p>We develop creative short-form content that captures attention quickly and encourages shares, boosting visibility through trends and platform energy.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-platform-box">
                        <img src={platform8} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>Snapchat Marketing</h5>
                            <p>We create bite-sized content that engages younger audiences and supports instant brand visibility through fun, interactive posts.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-platform-box">
                        <img src={platform9} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>Threads Marketing</h5>
                            <p>We create simple, conversational posts that help your brand stay relatable and active in real-time discussions.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-lg-12">
                    <div className="smm-platform-btn">
                        <button className='theme-btn'>Get A Custom Social Media Plan</button>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default SMMPlatform
