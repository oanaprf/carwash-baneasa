"use client";

import { useTranslation } from "react-i18next";
import { LocationInfo } from "../types";

interface CtaBannerProps {
  loc: LocationInfo;
}

export default function CtaBanner({ loc }: CtaBannerProps) {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#e7cd67] py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 20px, #212121 20px, #212121 21px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display mb-2 text-[28px] leading-none text-[#212121] sm:text-[40px] lg:text-[52px]">
              {t("cta.heading1")}
              <br />
              {t("cta.heading2")}
            </h2>
            <p className="text-sm text-[#212121]/55">{t("cta.desc")}</p>
          </div>
          <a
            href={`tel:${loc.phone.replace(/\s/g, "")}`}
            className="inline-flex flex-shrink-0 items-center gap-3 rounded-full bg-[#212121] px-8 py-4 text-sm font-bold tracking-wide text-white transition-all duration-200 hover:scale-105 hover:bg-[#333333] active:scale-95"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            {t("cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
}
