import { component$, useClientEffect$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "@/components/markup";
import { ThemeContextProvider } from "@/context/theme";
import { QwikSpeak } from "qwik-speak";
import { config, translationFn } from "@/speak-config";
import tippy from "tippy.js";

import globalStyles from "@/global.css?inline";

export default component$(() => {
  useStyles$(globalStyles);

  useClientEffect$(() => {
    tippy("[data-tooltip]", {
      content: (reference) => reference.getAttribute("title") as string,
    });
  });

  return (
    <QwikSpeak config={config} translationFn={translationFn}>
      <QwikCityProvider>
        <head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <RouterHead />
        </head>
        <ThemeContextProvider>
          <RouterOutlet />
          <ServiceWorkerRegister />
        </ThemeContextProvider>
      </QwikCityProvider>
    </QwikSpeak>
  );
});
