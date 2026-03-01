"use client";

import { useTranslation } from "react-i18next";
import { TestimonialItem } from "../types";

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = t("testimonials.items", { returnObjects: true }) as TestimonialItem[];

  return (
    <section className="bg-[#212121] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.45em] text-[#e7cd67]/40">
            — {t("testimonials.eyebrow")}
          </p>
          <h2 className="font-display text-[32px] leading-none text-white sm:text-[46px] lg:text-[60px]">
            {t("testimonials.heading1")}
            <br />
            <span className="text-[#e7cd67]">{t("testimonials.heading2")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-[#181818] p-7 transition-all duration-300 hover:border-[#e7cd67]/20"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-sm leading-none text-[#e7cd67]">★</span>
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-white/45 italic">"{item.text}"</p>
              <div className="flex items-end justify-between border-t border-white/8 pt-4">
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="mt-0.5 text-xs text-[#e7cd67]">{item.location}</p>
                </div>
                <p className="text-xs text-white/20">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
