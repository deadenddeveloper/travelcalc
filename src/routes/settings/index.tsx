import { component$ } from "@builder.io/qwik";
import { $translate as t, Speak } from "qwik-speak";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <Speak assets={["app"]}>
      <div class="container mx-auto">
        <h1 class="text-4xl text-red-300">{t("app.settings@@Settings")}</h1>
      </div>
    </Speak>
  );
});

export const head: DocumentHead = {
  title: "pages.settings.title@@Settings",
  meta: [
    {
      name: "description",
      content: "pages.settings.description@@Currency converter for travelers",
    },
  ],
};
