import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import About from "./components/about/about";
import Contactus from "./components/contact/contactus";
import Webdevelopment from "./components/services/webdevelopment";
import MobileApp from "./components/services/mobileapp";
import CRM from "./components/services/crm";
import DigitalMarketing from "./components/services/digitalmarketing";
import Webdesign1 from "./components/services/webdesignmain";
import Portfolio from "./components/portfolio/portfolio";
// import NotFound from './components/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/web-design" element={<Webdesign1 />} />
      <Route path="/web-development" element={<Webdevelopment />} />
      <Route path="/mobile-app-development" element={<MobileApp />} />
      <Route path="/crm" element={<CRM />} />
      <Route path="/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/portfolio" element={<Portfolio />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
