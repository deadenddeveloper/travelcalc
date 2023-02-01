import { component$, useContext } from "@builder.io/qwik";
import { ThemeContext } from "@/context/theme";
import { FaIcon } from "~/components/ui/fa-icon";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";

export const ThemeSwitcher = component$(() => {
  const theme = useContext(ThemeContext);

  return (
    <button onClick$={() => theme.toggle && theme.toggle(theme)} title={`test`}>
      <FaIcon
        icon={"dark" === theme.current ? faLightbulb : faMoon}
        class="h-6 w-6"
      />
    </button>
  );
});
