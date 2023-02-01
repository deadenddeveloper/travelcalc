import { component$, Slot, useContext } from "@builder.io/qwik";
import { ThemeContext } from "@/context/theme";

export const Body = component$(() => {
  const theme = useContext(ThemeContext);

  return (
    <body class={theme.current}>
      <Slot />
    </body>
  );
});
