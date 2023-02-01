import {
  Slot,
  component$,
  createContext,
  useStore,
  useContextProvider,
  $,
  QRL,
} from "@builder.io/qwik";

export type ITheme = typeof availableThemes[number];
export const availableThemes = ["light", "dark"] as const;
export const defaultTheme = availableThemes[0] as ITheme;

export interface IThemeContext {
  current: ITheme;
  toggle: null | QRL;
}

export const ThemeContext = createContext<IThemeContext>("theme.context");

export const ThemeContextProvider = component$(() => {
  const store = useStore<IThemeContext>({
    current: defaultTheme,
    toggle: $((s: IThemeContext) => {
      s.current = "dark" === s.current ? "light" : "dark";
      localStorage.setItem("theme", s.current);
    }),
  });

  useContextProvider(ThemeContext, store);

  return <Slot />;
});
