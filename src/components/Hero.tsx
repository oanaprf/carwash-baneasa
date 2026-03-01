"use client";

import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pt-16"
      style={{
        backgroundImage: `
          linear-gradient(to top, #212121 0%, #212121 8%, rgba(33,33,33,0.92) 28%, rgba(33,33,33,0.55) 55%, rgba(33,33,33,0.15) 100%),
          linear-gradient(to right, rgba(33,33,33,0.75) 0%, transparent 65%),
          url('/carwash-baneasa/hero-car.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center 0%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-[350px] w-[700px] opacity-25 blur-[100px]"
        style={{ background: "radial-gradient(ellipse, #e7cd67 0%, transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute top-0 right-0 h-2/3 w-1/2 opacity-10"
        style={{ background: "radial-gradient(ellipse at 80% 40%, #e7cd67, transparent 55%)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h1 className="font-display hero-animate-1 mb-6 text-[44px] leading-[1.0] text-white sm:text-[60px] lg:text-[84px] xl:text-[100px]">
          {t("hero.line1")}
          <br />
          <span className="text-[#e7cd67]">{t("hero.line2_highlight")}</span>
          {t("hero.line2_rest")}
          <br />
          {t("hero.line3")}
        </h1>

        <div className="hero-animate-2 mb-16 flex flex-col gap-8 sm:flex-row sm:items-end">
          <p className="max-w-sm text-base leading-relaxed text-white/45 sm:text-lg">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-3 sm:ml-auto sm:flex-shrink-0">
            <a
              href="#servicii"
              className="inline-flex items-center gap-2 rounded-full bg-[#e7cd67] px-7 py-4 text-sm font-bold tracking-wide text-[#212121] shadow-lg shadow-[#e7cd67]/20 transition-all duration-200 hover:brightness-110 active:scale-95"
            >
              {t("hero.cta_primary")} <span className="text-base">→</span>
            </a>
            <a
              href="#preturi"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-medium tracking-wide text-white/70 transition-all duration-200 hover:border-white/40 hover:bg-white/5"
            >
              {t("hero.cta_secondary")}
            </a>
          </div>
        </div>

        <div className="hero-animate-3 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-white/10 pt-8 sm:grid-cols-4">
          {[
            { n: t("hero.stat_years_n"), label: t("hero.stat_years_label") },
            { n: t("hero.stat_clients_n"), label: t("hero.stat_clients_label") },
            { n: t("hero.stat_locations_n"), label: t("hero.stat_locations_label") },
            { n: t("hero.stat_rating_n"), label: t("hero.stat_rating_label"), star: true },
          ].map(({ n, label, star }) => (
            <div key={label}>
              <p className="font-display text-5xl leading-none text-[#e7cd67]">
                {n}
                {star && <span className="ml-0.5 align-middle text-2xl">★</span>}
              </p>
              <p className="mt-1.5 text-xs tracking-wide text-white/35 uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
