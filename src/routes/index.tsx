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

  if (null === ready.value) {
    return (
      <div style="margin:0 auto;">
        <Loader />
      </div>
    );
  }

  const content = true === ready.value ? <Calculator /> : <Intro />;

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
