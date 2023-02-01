import { component$ } from "@builder.io/qwik";
import { LocaleSwitcher } from "~/components/ui";

export const Header = component$(() => {
  return (
    <header>
      <div class="container mx-auto flex justify-between py-2">
        <div>LOGO</div>
        <div>NAVBAR</div>
        <div>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
});
