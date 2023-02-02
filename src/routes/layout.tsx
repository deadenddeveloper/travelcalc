import { component$, Slot } from "@builder.io/qwik";
import { Footer, Header } from "@/components/markup";
import { RequestHandler } from "@builder.io/qwik-city";
import { config } from "@/speak-config";
import { Speak } from "qwik-speak";

export default component$(() => {
  return (
    <Speak assets={["app"]}>
      <main class="flex flex-col min-h-screen">
        <Header />
        <section class="flex flex-grow items-center">
          <Slot />
        </section>
        <Footer />
      </main>
    </Speak>
  );
});

export const onRequest: RequestHandler = ({ request, response }) => {
  const acceptLanguage = request.headers?.get("accept-language");

  let lang: string | null = null;
  // Try to use user language
  if (acceptLanguage) {
    lang = acceptLanguage.split(";")[0]?.split(",")[0];
  }

  // Set locale in response
  response.locale = lang || config.defaultLocale.lang;
};
