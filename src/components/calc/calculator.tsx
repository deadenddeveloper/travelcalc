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
import { FaIcon, Loader } from "@/components/ui";
import { NumPad, WorkTime } from "@/components/calc";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { setInputFilter } from "@/lib/dom";
import { useTooltips } from "@/lib/tooltip";

export const Calculator = component$(() => {
  useTooltips();

  const showWorkTime = useSignal(false);
  const state = useStore({
    showNumPad: false,
    amount: "",
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

    setInputFilter(inputRef.value as Element, function (value) {
      return /^\d*\.?\d*$/.test(value);
    });
    inputRef.value?.focus();
  });

  const resource = useResource$(async ({ track }) => {
    track(() => state.amount);
    state.calculated =
      (await convert(
        Math.abs(+state.amount),
        state.foreignCurrency?.code as string,
        state.myCurrency?.code as string
      )) || 0;
    state.workTime = state.hourRate ? state.calculated / state.hourRate : 0;
  });

  const handleChange = $(() => {
    state.amount = (inputRef.value as HTMLInputElement).value;
  });

  const calculated = (
    <div class="form-block text-center text-4xl space-x-2">
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
        <div class="flex space-x-2">
          <input
            id="value"
            class="input"
            type="text"
            maxLength={10}
            ref={inputRef}
            value={state.amount}
            onInput$={handleChange}
          />

          <button
            class="btn btn-icon"
            onClick$={() => (state.showNumPad = !state.showNumPad)}
            data-tooltip
            title={t("app.toggle_numpad@@Show / hide numpad")}
          >
            <FaIcon icon={faCalculator} class="w-4 h-4" />
          </button>
        </div>
      </div>

      {state.showNumPad && inputRef.value && (
        <NumPad
          value={state.amount}
          controls={inputRef.value}
          onInput$={handleChange}
        />
      )}

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
