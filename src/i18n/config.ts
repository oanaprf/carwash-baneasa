import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "../../public/locales/en/common.json";
import roCommon from "../../public/locales/ro/common.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { common: enCommon },
      ro: { common: roCommon },
    },
    lng: "ro",
    fallbackLng: "en",
    defaultNS: "common",
    interpolation: { escapeValue: false },
  });
}

export default i18n;
