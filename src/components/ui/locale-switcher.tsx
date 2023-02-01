import { changeLocale, SpeakLocale, useSpeakContext } from "qwik-speak";
import { $, component$, useClientEffect$ } from "@builder.io/qwik";

export const LocaleSwitcher = component$(() => {
  const ctx = useSpeakContext();

  useClientEffect$(async () => {
    const stored = localStorage.getItem("locale");
    const locale = ctx.config.supportedLocales.find((l) => l.lang === stored);
    if (locale) {
      await changeLocale(locale, ctx);
    }
  });

  const changeLocaleHandler = $(async (locale: SpeakLocale) => {
    await changeLocale(locale, ctx);
    localStorage.setItem("locale", locale.lang);
  });

  return (
    <div class="flex space-x-2">
      {ctx.config.supportedLocales.map((locale) => (
        <button
          onClick$={() => changeLocaleHandler(locale)}
          class={`uppercase ${
            ctx.locale.lang === locale.lang ? "underline" : ""
          }`}
        >
          {locale.lang.split("-")[0]}
        </button>
      ))}
    </div>
  );
});
