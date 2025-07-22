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

const AppRouter = () => {
  return (
    <Router basename="/texas-web-studios">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />

        {/* Blogs */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />

        {/* Services Pages */}
        <Route path="/logo-design" element={<LogoDesign />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/cms-development" element={<CMSDevelopment />} />
        <Route
          path="/digital-media-marketing"
          element={<DigitalMediaMarketing />}
        />
        <Route path="/social-media-marketing" element={<SMM />} />
        <Route path="/search-engine-optimization" element={<SEO />} />
        <Route path="/custom-web-development" element={<CustomWebDev />} />
        <Route path="/mobile-app-development" element={<MobileAppDev />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
