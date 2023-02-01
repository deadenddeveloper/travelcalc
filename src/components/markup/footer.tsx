import { component$ } from "@builder.io/qwik";
import { FaIcon, ThemeSwitcher } from "@/components/ui";
import { Link } from "@builder.io/qwik-city";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export const Footer = component$(() => {
  return (
    <footer>
      <div class="container mx-auto flex justify-between py-2">
        <div>
          <Link href="/settings">
            <FaIcon icon={faCog} class="h-6 w-6" />
          </Link>
        </div>
        <div>COPYRIGHT</div>
        <ThemeSwitcher />
      </div>
    </footer>
  );
});
