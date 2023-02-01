import { component$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "@/components/markup";
import { ThemeContextProvider } from "@/context/theme";
import globalStyles from "@/global.css?inline";

export default component$(() => {
  useStyles$(globalStyles);

  return (
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
  );
});
