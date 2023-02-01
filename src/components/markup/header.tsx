import { component$ } from "@builder.io/qwik";
import { FaIcon, LocaleSwitcher } from "~/components/ui";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
  return (
    <header>
      <div class="container mx-auto flex justify-between py-2">
        <Link href="/" class="flex space-x-2">
          <FaIcon icon={faCalculator} class="h-6 w-6" />
          <span>TRAVELCALC</span>
        </Link>

        <div>NAVBAR</div>

        <div>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
});
