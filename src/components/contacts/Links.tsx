import { component$ } from "@builder.io/qwik";
import { FaIcon } from "~/components/ui";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
  faStackOverflow,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export const links = [
  {
    name: "Facebook",
    icon: faFacebookF,
    url: "https://www.facebook.com/roman.v.meyer",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com/the_stupid_dick/",
  },
  {
    name: "Telegram",
    icon: faTelegram,
    url: "https://t.me/romanmeyer",
  },
  {
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/deadenddeveloper",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/roman-meyer-19a9a6160/",
  },
  {
    name: "Stack Overflow",
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/2132773/roman-meyer",
  },
];

export const Links = component$(() => {
  return (
    <ul class="mx-auto flex justify-between w-full sm:w-1/2">
      {links.map((link) => (
        <li>
          <a
            href={link.url}
            title={link.name}
            class="opacity-75 hover:opacity-100 hover:text-skin-brand hover:animate-pulse"
            data-tooltip
            target="_blank"
          >
            <FaIcon icon={link.icon} class="h-8 w-8" />
          </a>
        </li>
      ))}
    </ul>
  );
});
