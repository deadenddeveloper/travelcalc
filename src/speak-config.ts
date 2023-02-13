import { $ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import type { LoadTranslationFn, SpeakConfig, TranslationFn } from "qwik-speak";

export const config: SpeakConfig = {
  defaultLocale: {
    lang: "en-GB",
    currency: "GBP",
    timeZone: "Europe/London",
  },
  supportedLocales: [
    { lang: "en-GB", currency: "GBP", timeZone: "Europe/London" },
    { lang: "de-DE", currency: "EUR", timeZone: "Europe/Berlin" },
    { lang: "ru-RU", currency: "RUB", timeZone: "Europe/Minsk" },
  ],
  assets: ["app", "validation", "country", "runtime"],
};

export const loadTranslation$: LoadTranslationFn = $(
  async (lang: string, asset: string, origin?: string) => {
    if (
      import.meta.env.DEV ||
      asset === "validation" ||
      asset === "runtime" ||
      asset === "country"
    ) {
      let url = "";
      // Absolute urls on server
      if (isServer && origin) {
        url = origin;
      }
      url += `/i18n/${lang}/${asset}.json`;
      const data = await fetch(url);
      return data.json();
    }
  }
);

export const translationFn: TranslationFn = {
  loadTranslation$: loadTranslation$,
};
