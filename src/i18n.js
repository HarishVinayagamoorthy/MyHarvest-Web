import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import commonTranslationEN from "@src/assets/locales/en/common.json";
import commonTranslationEN from "../src/assets/locales/en/common.json";

import commonTranslationTA from "../src/assets/locales/ta/common.json";

const resources = {
  ta: {
    common: commonTranslationTA,
  },
  en: {
    common: commonTranslationEN,
  },
};
let currentLanguage = localStorage.getItem("current_language");

i18n.use(initReactI18next).init({
  resources,
  lng: currentLanguage || "en",
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export const change_language = (lang) => {
  localStorage.setItem("current_language", lang);
  i18n.changeLanguage(lang);
};

export default i18n;
