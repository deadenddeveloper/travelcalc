import { component$, Slot } from "@builder.io/qwik";
import { Footer, Header } from "@/components/markup";

export default component$(() => {
  return (
    <>
      <main class="flex flex-col min-h-screen">
        <Header />
        <section class="flex-grow">
          <Slot />
        </section>
        <Footer />
      </main>
    </>
  );
});
