import { component$ } from "@builder.io/qwik";
import { $translate as t, Speak } from "qwik-speak";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <Speak assets={["app"]}>
      <div class="container mx-auto">
        <h1 class="text-4xl text-red-300">{t("Contacts")}</h1>
      </div>
    </Speak>
  );
});

export const head: DocumentHead = {
  title: "Contacts",
  meta: [
    {
      name: "description",
      content: "Currency converter for travelers",
    },
  ],
};
