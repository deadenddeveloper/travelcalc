import { component$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { FaIcon, ThemeSwitcher } from "@/components/ui";
import { Link } from "@builder.io/qwik-city";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export const Footer = component$(() => {
  return (
    <footer>
      <div class="container px-2 md:px-0 py-2 mx-auto flex justify-between items-center">
        <div>
          <Link href="/settings">
            <FaIcon
              icon={faCog}
              class="h-6 w-6 hover:text-skin-brand hover:animate-spin"
            />
          </Link>
        </div>
        <div
          class="text-center text-sm md:text-base"
          dangerouslySetInnerHTML={t("Made for people by Roman Meyer")}
        ></div>
        <ThemeSwitcher />
      </div>
    </footer>
  );
});
