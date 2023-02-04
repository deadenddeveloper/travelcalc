import {
  $,
  component$,
  useClientEffect$,
  useResource$,
  useStore,
} from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { convert, getSettings } from "@/lib/calc";
import { getCurrencyByCountry } from "@/lib/countries";
import { ICurrency } from "@/lib/currencies";

export const Calculator = component$(() => {
  const state = useStore({
    amount: 0,
    calculated: 0,
    myCurrency: {} as ICurrency | undefined,
    foreignCurrency: {} as ICurrency | undefined,
  });

  useClientEffect$(() => {
    const settings = getSettings();
    state.myCurrency = getCurrencyByCountry(settings.myCountry);
    state.foreignCurrency = getCurrencyByCountry(settings.whereAmI);
  });

  useResource$(({ track }) => {
    track(() => state.amount);
    state.calculated = convert(
      state.amount,
      state.foreignCurrency?.code as string,
      state.myCurrency?.code as string
    );
  });

  const handleChange = $((event: InputEvent) => {
    state.amount = +(event.target as HTMLInputElement).value;
  });

  return (
    <div class="mx-auto md:w-1/2 space-y-8">
      <div class="form-block">
        <label for="value">
          {t("app.amount_in@@Amount in ")} {state.foreignCurrency?.code}
        </label>
        <input
          id="value"
          className="input"
          type="number"
          value={state.amount}
          onInput$={handleChange}
        />
      </div>
      <div class="form-block text-center text-4xl space-x-2">
        <span>=</span>
        <span>{state.calculated}</span>
        <span>{state.myCurrency?.code}</span>
      </div>
    </div>
  );
});
