import React from 'react'
import { Link } from 'react-router-dom'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { useModal } from '../../context/ModalContext';

const FrontendServices = () => {
    const { setShowModal } = useModal();
  return (
    <section className='frontend-services-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="frontend-services-head">
                        <h6 className='shorttop-head text-white'>Services We Offer</h6>
                        <h2 className='mainhead text-white'>Creating Visual Brilliance through Expert Coding</h2>
                        <p>We treat front-end web development in Texas as both an art and a science. From responsive web design to JavaScript framework engineering, every project we deliver is built for performance, adaptability, and elegance.</p>
                    </div>
                </div>
            </div>
            <Tabs>
            <div className="row">
                <div className="col-lg-6">
                    <div className="frontend-service-tabs">
                    <TabList>
                        <Tab>CMS Front-End Development</Tab>
                        <Tab>Performance Optimization</Tab>
                        <Tab>Front-End Maintenance & Support</Tab>
                        <Tab>Progressive Web App (PWA) Development</Tab>
                        <Tab>React Front-End Development</Tab>
                        <Tab>Vue.js Front-End Development</Tab>
                    </TabList>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="frontend-tab-content">
                    <TabPanel>
                        <p>Seamlessly connect powerful front ends with WordPress, Shopify, or custom CMS platforms to simplify management without sacrificing performance.</p>
                    </TabPanel>
                      <TabPanel>
                        <p>Because speed converts, we fine-tune load times, minimize code weight, and enhance SEO, AEO, and GEO readiness to maintain your site's ranking on Google, as well as on LLMs, and ensure it runs at peak performance.</p>
                    </TabPanel>
                      <TabPanel>
                        <p>Technology evolves, and so should your site. We provide ongoing updates, performance audits, and proactive improvements to keep your website ahead of the curve.</p>
                    </TabPanel>
                      <TabPanel>
                        <p>Experience the best of web and mobile combined; fast, installable, and offline-ready front ends that work anywhere, anytime.</p>
                    </TabPanel>
                      <TabPanel>
                        <p>Lightning-fast, dynamic, and modular, that’s React frontend development in Texas done right. We specialize in building high-performing single-page applications and enterprise-level platforms that grow with your business.</p>
                    </TabPanel>
                      <TabPanel>
                        <p>Simplicity meets power. Vue.js development in Texas enables us to create smooth, interactive interfaces that are lightweight, flexible, and incredibly intuitive for both users and developers.</p>
                    </TabPanel>
                    </div>
                    <div className="frontend-services-btn">
                  <button onClick={() => setShowModal(true)} className='theme-btn'>Let’s Start Your Project</button>
                </div>
                </div>
            </div>
            </Tabs>
            <div className="row">
              <div className="col-lg-12">
                
              </div>
            </div>
        </div>
    </section>
  )
}

export default FrontendServices