import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import About from "./components/about/about";
import Contactus from "./components/contact/contactus";
// import NotFound from './components/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/contactus" element={<Contactus />} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
