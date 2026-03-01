"use client";

import { useTranslation } from "react-i18next";
import { WhyFeature } from "../types";

export default function WhyUs() {
  const { t } = useTranslation();
  const whyFeatures = t("why.features", { returnObjects: true }) as WhyFeature[];

  return (
    <section className="bg-[#181818] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.45em] text-[#e7cd67]/40">
              — {t("why.eyebrow")}
            </p>
            <h2 className="font-display mb-6 text-[32px] leading-none text-white sm:text-[46px] lg:text-[56px]">
              {t("why.heading1")}
              <br />
              {t("why.heading2")}
              <br />
              <span className="text-[#e7cd67]">{t("why.heading3")}</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-white/35">{t("why.desc")}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "10+", unit: t("why.stat_years_unit"), label: t("why.stat_years_label") },
              { n: "50K+", unit: "", label: t("why.stat_clients_label") },
              { n: "~15", unit: t("why.stat_time_unit"), label: t("why.stat_time_label") },
              { n: "3", unit: "", label: t("why.stat_locations_label") },
            ].map(({ n, unit, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/8 bg-[#212121] p-6 transition-colors duration-200 hover:border-[#e7cd67]/30"
              >
                <p className="font-display text-[44px] leading-none text-white sm:text-[52px]">
                  {n}
                  <span className="text-[#e7cd67]">{unit}</span>
                </p>
                <p className="mt-2 text-sm text-white/35">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyFeatures.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/8 bg-[#212121] p-6 transition-all duration-300 hover:border-[#e7cd67]/30 hover:bg-[#252525]"
            >
              <div className="mb-4 text-3xl transition-transform duration-200 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="mb-2 text-sm font-semibold text-white/90">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/35">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
