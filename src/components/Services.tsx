"use client";

import { useTranslation } from "react-i18next";
import { ServiceItem } from "../types";
import { SERVICE_ICONS } from "./icons";

export default function Services() {
  const { t } = useTranslation();
  const serviceItems = t("services.items", { returnObjects: true }) as ServiceItem[];
  const services = SERVICE_ICONS.map((icon, i) => ({ icon, ...serviceItems[i] }));

  return (
    <section id="servicii" className="bg-[#181818] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="mb-4 text-xs font-semibold tracking-[0.45em] text-[#e7cd67]/40">
            — {t("services.eyebrow")}
          </p>
          <h2 className="font-display text-[32px] leading-none text-white sm:text-[46px] lg:text-[60px]">
            {t("services.heading1")}
            <br />
            <span className="text-[#e7cd67]">{t("services.heading2")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`group relative bg-[#181818] p-7 transition-all duration-300 hover:bg-[#212121] ${
                i === 0 ? "rounded-tl-2xl" : ""
              } ${i === 2 ? "rounded-tr-2xl sm:rounded-tr-2xl lg:rounded-tr-2xl" : ""}`}
            >
              {s.badge && (
                <span className="absolute top-5 right-5 rounded-full bg-[#e7cd67] px-2.5 py-1 text-[9px] font-bold tracking-[0.15em] text-[#212121]">
                  {s.badge.toUpperCase()}
                </span>
              )}
              <div className="mb-5 w-fit text-[#e7cd67] transition-transform duration-200 group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/35">{s.desc}</p>
              <div className="mt-5 flex items-center gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="h-px w-5 bg-[#e7cd67]" />
                <p className="text-xs font-bold tracking-wider text-[#e7cd67]">
                  {t("services.details")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
