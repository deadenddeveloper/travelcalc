import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1 class="text-4xl text-red-300">hello</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Travel Calculator",
  meta: [
    {
      name: "description",
      content: "Currency converter for travelers",
    },
  ],
};
