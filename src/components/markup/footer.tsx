import { component$ } from "@builder.io/qwik";
import { ThemeSwitcher } from "@/components/ui";

export const Footer = component$(() => {
  return (
    <footer>
      <div class="container mx-auto flex justify-between py-2">
        <div>COG</div>
        <div>COPYRIGHT</div>
        <ThemeSwitcher />
      </div>
    </footer>
  );
});
