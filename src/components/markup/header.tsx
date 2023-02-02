import { component$ } from "@builder.io/qwik";
import { FaIcon, LocaleSwitcher } from "~/components/ui";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@builder.io/qwik-city";
import { NavBar } from "@/components/markup";

export const Header = component$(() => {
  return (
    <header>
      <div class="container px-2 md:px-0 py-2 mx-auto flex justify-between items-center">
        <Link href="/" class="flex space-x-2 hover:text-skin-brand">
          <FaIcon icon={faCalculator} class="h-6 w-6 text-skin-brand" />
          <span class="hidden sm:inline">TRAVELCALC</span>
        </Link>

        <NavBar />

        <div>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
});
