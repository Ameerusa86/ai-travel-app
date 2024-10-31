"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hotels from "@/components/Hotels";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import TopDestination from "@/components/TopDestination";
import React, { useState } from "react";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  const openNav = () => setShowNav(true);
  const closeNav = () => setShowNav(false);

  return (
    <div className="overflow-x-hidden">
      <MobileNav showNav={showNav} closeNav={closeNav} />
      <Navbar openNav={openNav} />
      {/* Hero Section */}
      <Hero />
      {/* Top Destinations */}
      <TopDestination />
      {/* Hotels */}
      <Hotels />
      {/* Reviews */}
      <Reviews />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
