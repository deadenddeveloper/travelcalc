const OPTIONS_KEY = "tc_options";
const RATES_KEY = "tc_rates";

export interface ISettings {
  myCountry: string;
  whereAmI: string;
  calcHours: boolean;
  hourRate: number;
}

export const defaultSettings = <ISettings>{
  myCountry: "",
  whereAmI: "",
  calcHours: false,
  hourRate: 0,
};

export const isAppReady = () => {
  return null !== localStorage.getItem(OPTIONS_KEY);
};

export const saveSettings = (settings: ISettings) => {
  localStorage.setItem(OPTIONS_KEY, JSON.stringify(settings));
};

export const getSettings = () => {
  const stored = localStorage.getItem(OPTIONS_KEY);

  try {
    const settings = JSON.parse(stored as string);
    return { ...defaultSettings, ...settings };
  } catch (e) {
    return defaultSettings;
  }
};

const loadRates = async () => {
  const response = await fetch("/api/rates");
  const rates = await response.json();

  localStorage.setItem(RATES_KEY, JSON.stringify(rates));

  return rates;
};

const getRates = async () => {
  const stored = localStorage.getItem(RATES_KEY);

  if (null === stored) {
    return await loadRates();
  }

  const today = new Date().toISOString().split("T")[0];
  const rates = JSON.parse(stored);

  if (rates.date && today === rates.date && rates.rates) {
    return rates;
  }

  return await loadRates();
};

export const convert = async (value: number, from: string, to: string) => {
  const rates = await getRates();

  if (to === rates.base) {
    return (1 / rates.rates[from]) * value;
  } else if (from === rates.base) {
    return rates.rates[to] * value;
  }

  return (rates.rates[to] / rates.rates[from]) * value;
};
