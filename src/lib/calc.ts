const OPTIONS_KEY = "tc_options";

export interface ISettings {
  myCountry: string;
  whereAmI: string;
}

export const isAppReady = () => {
  return null !== localStorage.getItem(OPTIONS_KEY);
  // TODO check options
  // TODO invalidate if errors
};

export const saveSettings = (settings: ISettings) => {
  localStorage.setItem(OPTIONS_KEY, JSON.stringify(settings));
};

export const getSettings = () => {
  const stored = localStorage.getItem(OPTIONS_KEY);

  // TODO validate / sanitize

  return JSON.parse(stored as string);
};

export const convert = (value: number, from: string, to: string) => {
  return value * 3;
  // TODO get currencies
  // TODO calculate
  // TODO round and return
};
