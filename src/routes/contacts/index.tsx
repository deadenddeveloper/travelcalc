import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Form, Links } from "@/components/contacts";

export default component$(() => {
  return (
    <div class="container mx-auto px-2 md:px-0 py-8 space-y-8">
      <Form />
      <Links />
    </div>
  );
});

export const head: DocumentHead = {
  title: "pages.contacts.title@@Contacts",
  meta: [
    {
      name: "description",
      content: "pages.contacts.description@@Currency converter for travelers",
    },
  ],
};
