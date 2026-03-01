"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../i18n/config";
import { Location, LOCATIONS } from "../types";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LocationBanner from "../components/LocationBanner";
import Services from "../components/Services";
import Prices from "../components/Prices";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";

export default function Home() {
  const [selected, setSelected] = useState<Location>("baneasa");
  const loc = LOCATIONS[selected];
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="font-body bg-[#212121] text-white">
      <Navbar selected={selected} setSelected={setSelected} />
      <Hero />
      <LocationBanner selected={selected} loc={loc} />
      <Services />
      <Prices loc={loc} />
      <WhyUs />
      <Testimonials />
      <CtaBanner loc={loc} />
      <Footer />
    </div>
  );
}
