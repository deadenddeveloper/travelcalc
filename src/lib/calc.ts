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
  const settings = localStorage.getItem(OPTIONS_KEY);

  // TODO validate / sanitize

  return JSON.parse(settings as string);
};
