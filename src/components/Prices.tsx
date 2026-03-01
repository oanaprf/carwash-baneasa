"use client";

import { useTranslation } from "react-i18next";
import { LocationInfo } from "../types";
import { CheckIcon, CrossIcon } from "./icons";

interface PricesProps {
  loc: LocationInfo;
}

export default function Prices({ loc }: PricesProps) {
  const { t } = useTranslation();

  const basicIn = t("prices.basic.features_included", { returnObjects: true }) as string[];
  const basicEx = t("prices.basic.features_excluded", { returnObjects: true }) as string[];
  const standardIn = t("prices.standard.features_included", { returnObjects: true }) as string[];
  const standardEx = t("prices.standard.features_excluded", { returnObjects: true }) as string[];
  const premiumIn = t("prices.premium.features_included", { returnObjects: true }) as string[];

  return (
    <section id="preturi" className="bg-[#212121] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.45em] text-[#e7cd67]/40">
            — {t("prices.eyebrow")}
          </p>
          <h2 className="font-display text-[32px] leading-none text-white sm:text-[46px] lg:text-[60px]">
            {t("prices.heading1")}
            <br />
            <span className="text-[#e7cd67]">{t("prices.heading2")}</span>
          </h2>
          <p className="mt-4 text-sm text-white/30">
            {t("prices.location_note_pre")}{" "}
            <span className="font-semibold text-white/60">{loc.name}</span>
            {t("prices.location_note_post")}
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-3">
          {/* BASIC */}
          <div className="rounded-2xl border border-white/8 bg-[#181818] p-8 transition-all duration-200 hover:border-white/15">
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-white/25">{t("prices.basic.name")}</p>
            <div className="mb-6 flex items-baseline gap-1.5">
              <span className="font-display text-7xl leading-none text-white">{loc.prices.basic}</span>
              <span className="text-sm font-medium text-white/30">{t("prices.currency")}</span>
            </div>
            <ul className="mb-8 space-y-2.5">
              {basicIn.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                  <CheckIcon /> {item}
                </li>
              ))}
              {basicEx.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/20">
                  <CrossIcon /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full cursor-pointer rounded-xl border border-white/15 py-3.5 text-sm font-semibold text-white/60 transition-all duration-200 hover:border-[#e7cd67]/50 hover:text-white">
              {t("prices.basic.cta")}
            </button>
          </div>

          {/* STANDARD — highlighted */}
          <div className="relative rounded-2xl border-2 border-[#e7cd67] bg-[#181818] p-8 shadow-2xl shadow-[#e7cd67]/10 md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#e7cd67] px-5 py-1.5 text-[9px] font-bold tracking-[0.2em] whitespace-nowrap text-[#212121]">
              {t("prices.standard.badge")}
            </div>
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#e7cd67]">{t("prices.standard.name")}</p>
            <div className="mb-6 flex items-baseline gap-1.5">
              <span className="font-display text-7xl leading-none text-white">{loc.prices.standard}</span>
              <span className="text-sm font-medium text-white/30">{t("prices.currency")}</span>
            </div>
            <ul className="mb-8 space-y-2.5">
              {standardIn.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/65">
                  <CheckIcon /> {item}
                </li>
              ))}
              {standardEx.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/20">
                  <CrossIcon /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full cursor-pointer rounded-xl bg-[#e7cd67] py-3.5 text-sm font-bold text-[#212121] transition-all duration-200 hover:brightness-105">
              {t("prices.standard.cta")}
            </button>
          </div>

          {/* PREMIUM */}
          <div className="rounded-2xl border border-white/8 bg-[#0f0f0f] p-8 transition-all duration-200 hover:border-[#e7cd67]/20">
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#e7cd67]">{t("prices.premium.name")}</p>
            <div className="mb-6 flex items-baseline gap-1.5">
              <span className="font-display text-7xl leading-none text-white">{loc.prices.premium}</span>
              <span className="text-sm font-medium text-white/30">{t("prices.currency")}</span>
            </div>
            <ul className="mb-8 space-y-2.5">
              {premiumIn.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                  <CheckIcon /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full cursor-pointer rounded-xl bg-[#e7cd67] py-3.5 text-sm font-bold text-[#212121] transition-all duration-200 hover:brightness-105">
              {t("prices.premium.cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
