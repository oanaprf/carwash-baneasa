"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Location, LOCATIONS, NAV_KEYS } from "../types";

interface NavbarProps {
  selected: Location;
  setSelected: (loc: Location) => void;
}

export default function Navbar({ selected, setSelected }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-[#0d0d0d]/95 to-[#0d0d0d]/80"
          : "bg-gradient-to-b from-[#0d0d0d]/75 to-[#0d0d0d]/10"
      }`}
    >
      <div className="relative mx-auto flex h-[80px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex flex-shrink-0 items-center">
          <img src="/logo.png" alt="Carwash Băneasa" className="h-14 w-auto" />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {NAV_KEYS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-xs font-light tracking-[0.18em] text-white transition-colors duration-200 hover:text-[#e7cd67]"
            >
              {t(`nav.${key}`).toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Mobile: location dropdown + hamburger */}
        <div className="ml-auto flex items-center gap-3 lg:hidden">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value as Location)}
            className="cursor-pointer appearance-none rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-white focus:ring-1 focus:ring-[#e7cd67]/50 focus:outline-none"
          >
            {(Object.keys(LOCATIONS) as Location[]).map((key) => (
              <option key={key} value={key} className="bg-[#212121] text-white">
                {key === "baneasa" ? "BĂNEASA" : key === "pipera" ? "PIPERA" : "LEMON"}
              </option>
            ))}
          </select>
          <button
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 cursor-pointer flex-col items-center justify-center gap-[5px]"
          >
            <span className={`block h-px w-5 bg-white transition-all duration-200 ${mobileMenuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-white transition-all duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-white transition-all duration-200 ${mobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Desktop: pill buttons */}
        <div className="ml-auto hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/8 p-1 lg:flex">
          {(Object.keys(LOCATIONS) as Location[]).map((key) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] whitespace-nowrap transition-all duration-200 ${
                selected === key ? "bg-[#e7cd67] text-[#212121] shadow-sm" : "text-white/50 hover:text-white"
              }`}
            >
              {key === "baneasa" ? "BĂNEASA" : key === "pipera" ? "PIPERA" : "LEMON"}
            </button>
          ))}
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-white/10 bg-gradient-to-b from-[#0d0d0d]/95 to-[#0d0d0d]/80 backdrop-blur-md lg:hidden">
          {NAV_KEYS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="block border-b border-white/5 px-6 py-4 text-xs font-light tracking-[0.18em] text-white/80 transition-colors duration-150 hover:text-[#e7cd67]"
            >
              {t(`nav.${key}`).toUpperCase()}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
