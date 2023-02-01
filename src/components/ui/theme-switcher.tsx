import { component$, useClientEffect$, useContext } from "@builder.io/qwik";
import {
  availableThemes,
  defaultTheme,
  ITheme,
  ThemeContext,
} from "@/context/theme";

export const ThemeSwitcher = component$(() => {
  const theme = useContext(ThemeContext);

  useClientEffect$(
    () => {
      const stored = localStorage.getItem("theme") || defaultTheme;
      if (availableThemes.indexOf(stored as ITheme)) {
        theme.current = stored as ITheme;
      }
    },
    { eagerness: "load" }
  );

  return (
    <button onClick$={() => theme.toggle && theme.toggle(theme)}>
      {theme.current}
    </button>
  );
});
