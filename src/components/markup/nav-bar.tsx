import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { FaIcon } from "@/components/ui";
import { faCog, faContactBook } from "@fortawesome/free-solid-svg-icons";
import { $translate as t } from "qwik-speak";

export const menu = [
  { icon: faCog, title: "Settings", link: "/settings" },
  { icon: faContactBook, title: "Contacts", link: "/contacts" },
];

export const NavBar = component$(() => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul class="flex space-x-4">
        {menu.map((item) => (
          <li>
            <Link
              href={item.link}
              class={`flex items-center space-x-1 whitespace-nowrap hover:text-skin-brand ${
                pathname.startsWith(item.link) ? "font-bold" : ""
              }`}
            >
              <FaIcon icon={item.icon} class="h-4 w-4" />
              <span>{t(item.title)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});
