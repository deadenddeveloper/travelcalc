import { component$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { FaIcon, LocaleSwitcher } from "~/components/ui";
import {
  faCalculator,
  faCog,
  faContactBook,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
  return (
    <header>
      <div class="container px-2 md:px-0 py-2 mx-auto flex justify-between items-center">
        <Link href="/" class="flex space-x-2">
          <FaIcon icon={faCalculator} class="h-6 w-6" />
          <span class="hidden sm:inline">TRAVELCALC</span>
        </Link>

        <nav>
          <ul class="flex space-x-4">
            <li>
              <Link href="/settings" class="flex space-x-1 whitespace-nowrap">
                <FaIcon icon={faCog} class="h-6 w-6" />
                <span>{t("Settings")}</span>
              </Link>
            </li>
            <li>
              <Link href="/contacts" class="flex space-x-1 whitespace-nowrap">
                <FaIcon icon={faContactBook} class="h-6 w-6" />
                <span>{t("Contacts")}</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
});
