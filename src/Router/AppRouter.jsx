import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "../screens/Home";
import About from "../screens/About";
import Pricing from "../screens/Pricing";
import Portfolio from "../screens/Portfolio";
import Blog from "../screens/Blog";
import Contact from "../screens/Contact";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import TermsAndCondition from "../screens/TermsAndCondition";

// Services Pages
import WebDevelopment from "../screens/Services/WebDevelopment";
import DigitalMediaMarketing from "../screens/Services/DigitalMediaMarketing";
import CMSDevelopment from "../screens/Services/CMSDevelopment";
import SMM from "../screens/Services/SMM";
import SEO from "../screens/Services/SEO";
import CustomWebDev from "../screens/Services/CustomWebDev";
import LogoDesign from "../screens/Services/LogoDesign";
import MobileAppDev from "../screens/Services/MobileAppDev";
import BlogDetail from "../screens/Blog/BlogDetail";

import ScrollToTop from "../components/ScrollToTop";
import NotFound from "../screens/NotFound/NotFound";
import AppDevelopmentTD from "../screens/locationpages/AppDevelopmentTD";
import WordpressDevelopmentTD from "../screens/locationpages/WordpressDevelopmentTD";
import EcommerceDevelopment from "../screens/Services/EcommerceDevelopment";
import FrontendDevelopment from "../screens/Services/FrontendDevelopment";
import BackendDevelopment from "../screens/Services/BackendDevelopment";
import DomainRegisteration from "../screens/Services/DomainRegisteration";
import DomainTransfer from "../screens/Services/DomainTransfer";
import WordpressDevelopment from "../screens/Services/WordpressDevelopment";
import ReactDevelopmentTD from "../screens/locationpages/ReactDevelopmentTD";
import WebAppDevelopment from "../screens/Services/WebAppDevelopment";
import BrandStrategy from "../screens/Services/BrandStrategy";
import BrandVoice from "../screens/Services/BrandVoice";

const AppRouter = () => {
  return (
    // <Router basename="/texas-web-studios">
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/*Not Meta Title Description Provided*/}
        <Route path="/contact" element={<Contact />} />{" "}

        {/* Privacy Policy and Terms and Condition */}
        {/*Not Meta Title Description Provided*/}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />

        {/* Blogs */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />

        {/* Services Pages */}
        <Route path="/logo-design" element={<LogoDesign />} />
        <Route path="/web-development" element={<WebDevelopment />} />


          {/* CMS Development & Inner Pages */}
        <Route path="/cms-development" element={<CMSDevelopment />} />
        <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />
        <Route path="/wordpress-development" element={<WordpressDevelopment />} />


            {/* Digital Marketing & Inner Pages */}
        <Route path="/digital-media-marketing" element={<DigitalMediaMarketing />}/>
        <Route path="/social-media-marketing" element={<SMM />} />
        <Route path="/search-engine-optimization" element={<SEO />} />


            {/* Custom Web Develpment & Inner Pages */}
        <Route path="/custom-web-development" element={<CustomWebDev />} />
        <Route path="/frontend-development" element={<FrontendDevelopment />} />
        <Route path="/backend-development" element={<BackendDevelopment />} />


            {/* Custom Web Develpment & Inner Pages */}
        <Route path="/mobile-app-development" element={<MobileAppDev />} />
        <Route path="/web-app-development" element={<WebAppDevelopment />} />


          {/* Hosting & Domain Inner Pages */}
        <Route path="/domain-registeration" element={<DomainRegisteration />} />
        <Route path="/domain-transfer" element={<DomainTransfer />} />
        
          {/* Brand Identity Inner Pages */}
        <Route path="/brand-strategy" element={<BrandStrategy />} />
        <Route path="/brand-voice" element={<BrandVoice />} />

        {/* Location Pages */}
        <Route path="/app-development-dallas" element={<AppDevelopmentTD />} />
        <Route path="/wordpress-development-dallas" element={<WordpressDevelopmentTD />} />
        <Route path="/react-development-dallas" element={<ReactDevelopmentTD />} />


      </Routes>
    </Router>
  );
};

export default AppRouter;
