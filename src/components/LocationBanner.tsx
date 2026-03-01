"use client";

import { useTranslation } from "react-i18next";
import { Location, LocationInfo } from "../types";

interface LocationBannerProps {
  selected: Location;
  loc: LocationInfo;
}

export default function LocationBanner({ selected, loc }: LocationBannerProps) {
  const { t } = useTranslation();

  return (
    <div id="locatii" className="bg-[#e7cd67]">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-8">
          <p className="font-display flex-shrink-0 text-sm tracking-[0.28em] whitespace-nowrap text-[#212121]">
            {loc.name.toUpperCase()}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium text-[#212121]/70">
            <span className="flex items-center gap-1.5">
              <span>📍</span> {loc.address}
            </span>
            <span className="flex items-center gap-1.5">
              <span>📞</span> {loc.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <span>🕐</span> {t(`locationHours.${selected}`)}
            </span>
          </div>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold whitespace-nowrap text-[#212121] underline underline-offset-2 hover:no-underline sm:ml-auto"
          >
            {t("mapsLink")}
          </a>
        </div>
      </div>
    </div>
  );
}
