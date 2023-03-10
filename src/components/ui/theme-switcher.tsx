import { component$, useContext } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { ThemeContext } from "@/context/theme";
import { FaIcon } from "@/components/ui";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";

export const ThemeSwitcher = component$(() => {
  const theme = useContext(ThemeContext);

  return (
    <button
      class="hover:text-skin-brand"
      onClick$={() => theme.toggle && theme.toggle(theme)}
      data-tooltip
      title={t("app.switch_theme@@Switch theme")}
    >
      <FaIcon
        icon={"dark" === theme.current ? faLightbulb : faMoon}
        class="h-6 w-6"
      />
    </button>
  );
});
