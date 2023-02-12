import type { ICurrency } from "@/lib/currencies";

import {
  $,
  component$,
  useClientEffect$,
  useResource$,
  useSignal,
  useStore,
} from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { convert, getSettings } from "@/lib/calc";
import { getCurrencyByCountry } from "@/lib/countries";
import { Loader } from "@/components/ui";
import { WorkTime } from "@/components/calc";

export const Calculator = component$(() => {
  const showWorkTime = useSignal(false);
  const state = useStore({
    amount: 0,
    calculated: 0,
    workTime: 0,
    hourRate: 0,
    myCurrency: {} as ICurrency | undefined,
    foreignCurrency: {} as ICurrency | undefined,
  });

  const inputRef = useSignal<HTMLInputElement>();

  useClientEffect$(() => {
    const settings = getSettings();
    state.myCurrency = getCurrencyByCountry(settings.myCountry);
    state.foreignCurrency = getCurrencyByCountry(settings.whereAmI);
    state.hourRate = settings.hourRate;
    showWorkTime.value = settings.calcHours;

    inputRef.value?.focus();
  });

  const resource = useResource$(async ({ track }) => {
    track(() => state.amount);
    state.calculated =
      (await convert(
        state.amount,
        state.foreignCurrency?.code as string,
        state.myCurrency?.code as string
      )) || 0;
    state.workTime = state.hourRate ? state.calculated / state.hourRate : 0;
  });

  const handleChange = $((event: InputEvent) => {
    state.amount = Math.abs(+(event.target as HTMLInputElement).value);
  });

  const calculated = (
    <div className="form-block text-center text-4xl space-x-2">
      <span>=</span>
      <span>
        {state.calculated.toFixed(state.myCurrency?.decimal_digits || 2)}
      </span>
      <span>{state.myCurrency?.symbol || state.myCurrency?.code}</span>
    </div>
  );

  return (
    <div class="mx-auto md:w-1/2 space-y-8">
      <div class="form-block">
        <label for="value">
          {t("app.amount_in@@Amount in")} {state.foreignCurrency?.code}
        </label>
        <input
          id="value"
          class="input"
          type="number"
          ref={inputRef}
          value={state.amount}
          onInput$={handleChange}
        />
      </div>

      {resource.loading ? (
        <div class="text-center">
          <Loader />
        </div>
      ) : (
        <>
          {calculated}
          {showWorkTime.value && <WorkTime hours={state.workTime} />}
        </>
      )}
    </div>
  );
});
