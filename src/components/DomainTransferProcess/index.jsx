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
                            <h6 className='shorttop-head'>How we do i</h6>
                            <h2 className='mainhead'>Process to Get a New Address</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="our-process-text phaseone pe-5">
                            <h4>Secure Your New Address</h4>
                            <p>There are two ways we start the domain name transfer process in Texas. First, we buy the required domain for the client, which is the one with their business name and the desired extension (e.g., .co, .us, .com). If the business already has its new domain, we simply shift to process two, and for those who don’t have the required domain, we got you!</p>
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
                            <h4>Verify the Domain</h4>
                            <p>Once we secure the right domain from the right provider, we move into the validation process. Our team verifies the domain ownership, gathers authorization codes, and initiates the domain transfer process in Texas with full compliance. Every detail is carefully checked, including permissions, credentials, DNS settings, verifications, and webmail integration, ensuring a smooth, fast, easy, and downtime-free transfer. </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="our-process-text phasethree pe-5">
                            <h4>Move to a New Provider</h4>
                            <p>After verification and approval, we reconfigure your DNS records, map subdomains, test email routing, and sync your hosting environment. During this stage, we move your domain to a new provider in Texas with zero downtime, ensuring your website stays live, your inbox stays active, and every digital connection remains intact throughout the transition.</p>
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
                            <h4>Your Site Goes Live</h4>
                            <p>This is where everything goes live. In simple words, we check if all systems, including your webmail, website code, and everything else, are in sync. We then secure your SSL, test redirects, and confirm performance before completing your domain migration in Texas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default DomainTransferProcess