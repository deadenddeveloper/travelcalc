import type { DocumentHead } from "@builder.io/qwik-city";

import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";
import { Intro } from "@/components/markup";
import { Calculator } from "@/components/calc";
import { Loader } from "@/components/ui";
import { isAppReady } from "@/lib/calc";

export default component$(() => {
  const ready = useSignal<boolean | null>(null);

  useClientEffect$(() => {
    ready.value = isAppReady();
  });

  const content =
    null === ready.value ? (
      <div class="text-center">
        <Loader />
      </div>
    ) : ready.value ? (
      <Calculator />
    ) : (
      <Intro />
    );

  return (
    <div class="container mx-auto px-2 md:px-0 py-8 space-y-8">{content}</div>
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
