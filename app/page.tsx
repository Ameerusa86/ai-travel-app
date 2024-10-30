"use client";

import Hero from "@/components/Helper/Hero";
import MobileNav from "@/components/Helper/MobileNav";
import Navbar from "@/components/Helper/Navbar";
import TopDestination from "@/components/Helper/TopDestination";
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
    </div>
  );
};

export default HomePage;
