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

  if (null === stored) {
    return defaultSettings;
  }

  // TODO check options
  // TODO invalidate if errors

  return JSON.parse(stored as string);
};

// TODO only server
const loadRates = async (date = "") => {
  if (!date) {
    date = new Date().toISOString().split("T")[0];
  }

  const apiLayerKey = import.meta.env["VITE_API_LAYER_KEY"];
  const apiLayerUrl = import.meta.env["VITE_API_LAYER_URL"];
  const response = await fetch(`${apiLayerUrl}${date}?symbols=&base=EUR`, {
    headers: {
      "Content-Type": "text/json",
      apikey: apiLayerKey,
    },
  });
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

  if (rates.date && today === rates.date) {
    return rates; // TODO validate rates object
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
