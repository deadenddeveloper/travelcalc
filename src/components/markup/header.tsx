import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  return (
    <header>
      <div class="container mx-auto flex justify-between py-2">
        <div>LOGO</div>
        <div>NAVBAR</div>
        <div>LANG</div>
      </div>
    </header>
  );
});
