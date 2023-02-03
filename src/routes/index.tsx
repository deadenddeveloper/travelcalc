import { component$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="container mx-auto">
      <h1 class="text-4xl text-red-300">{t("Hello")}</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "pages.main.title@@Main",
  meta: [
    {
      name: "description",
      content: "pages.main.description@@Currency converter for travelers",
    },
  ],
};
