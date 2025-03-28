import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import faTranslation from "./locales/fa/translation.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  fa: {
    translation: faTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: languageFromLocalStorage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })
  .then();

function languageFromLocalStorage(): string {
  const item = localStorage.getItem("language");

  return item === "fa" ? item : "en";
}

languageChang(i18n.language);
i18n.on("languageChanged", languageChang);

function languageChang(language: string) {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "fa" ? "rtl" : "ltr";

  localStorage.setItem('language' , language )
}

export default i18n;
