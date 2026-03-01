"use client";

import { useTranslation } from "react-i18next";
import { Location, LOCATIONS, LocationInfo } from "../types";
import { CarIcon } from "./icons";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const footerServicesList = t("footer.services_list", { returnObjects: true }) as string[];

  return (
    <footer id="contact" className="border-t border-white/5 bg-[#0f0f0f] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#e7cd67]">
                <CarIcon />
              </div>
              <span className="font-display text-base tracking-[0.15em] text-white">CARWASH BĂNEASA</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/25">{t("footer.tagline")}</p>
            <div className="flex gap-3">
              <a href="https://facebook.com/carwashbaneasa" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/5 text-white/40 transition-all duration-200 hover:border-[#e7cd67] hover:bg-[#e7cd67] hover:text-[#212121]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://instagram.com/carwashbaneasa" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/5 text-white/40 transition-all duration-200 hover:border-[#e7cd67] hover:bg-[#e7cd67] hover:text-[#212121]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.3em] text-white/30">{t("footer.services_heading")}</h4>
            <ul className="space-y-2.5">
              {footerServicesList.map((s) => (
                <li key={s}>
                  <a href="#servicii" className="text-sm text-white/30 transition-colors duration-150 hover:text-[#e7cd67]">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.3em] text-white/30">{t("footer.locations_heading")}</h4>
            <ul className="space-y-5">
              {(Object.entries(LOCATIONS) as [Location, LocationInfo][]).map(([key, l]) => (
                <li key={l.name}>
                  <p className="mb-0.5 text-sm font-medium text-white/60">{l.name}</p>
                  <p className="text-xs leading-relaxed text-white/25">{l.address}</p>
                  <p className="text-xs text-white/25">{t(`locationHours.${key}`)}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.3em] text-white/30">{t("footer.contact_heading")}</h4>
            <ul className="space-y-4">
              {Object.values(LOCATIONS).map((l) => (
                <li key={l.name}>
                  <p className="mb-0.5 text-xs text-white/25">{l.name}</p>
                  <a href={`tel:${l.phone.replace(/\s/g, "")}`} className="text-sm text-white/50 transition-colors hover:text-[#e7cd67]">
                    {l.phone}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <p className="mb-0.5 text-xs text-white/25">{t("footer.email_label")}</p>
                <a href="mailto:contact@carwashbaneasa.ro" className="text-sm text-white/50 transition-colors hover:text-[#e7cd67]">
                  contact@carwashbaneasa.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/15">{t("footer.copyright")}</p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/20">{t("footer.language")}:</span>
            <div className="flex gap-1">
              {(["ro", "en"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                  className={`cursor-pointer rounded-md px-2.5 py-1 text-xs font-bold tracking-wider transition-all duration-200 ${
                    i18n.language === lang ? "bg-[#e7cd67]/15 text-[#e7cd67]" : "text-white/25 hover:text-white/50"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <p className="text-xs text-white/15">{t("footer.subtitle")}</p>
        </div>
      </div>
    </footer>
  );
}
