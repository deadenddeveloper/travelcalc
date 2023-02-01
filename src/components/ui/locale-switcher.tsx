import { changeLocale, $translate as t, useSpeakContext } from "qwik-speak";
import { component$ } from "@builder.io/qwik";

export const LocaleSwitcher = component$(() => {
  const ctx = useSpeakContext();

  return (
    <div>
      <div>{t("app.changeLocale@@Change locale")}</div>
      {ctx.config.supportedLocales.map((locale) => (
        <button onClick$={async () => await changeLocale(locale, ctx)}>
          {locale.lang}
        </button>
      ))}
    </div>
  );
});
