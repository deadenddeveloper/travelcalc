import { component$, useContext } from "@builder.io/qwik";
import { ThemeContext } from "@/context/theme";

export const ThemeSwitcher = component$(() => {
  const theme = useContext(ThemeContext);

  return (
    <button onClick$={() => theme.toggle && theme.toggle(theme)}>
      {theme.current}
    </button>
  );
});
