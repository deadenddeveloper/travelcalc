import type { ICurrency } from "@/lib/currencies";
import { IImageData } from "@/lib/image";

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
import {
  NumPad,
  WorkTime,
  ImageUploader,
  ImageViewer,
} from "@/components/calc";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { setInputFilter } from "@/lib/dom";
import { Link } from "@builder.io/qwik-city";

export const Calculator = component$(() => {
  const showWorkTime = useSignal(false);
  const state = useStore({
    showNumPad: false,
    amount: "",
    calculated: 0,
    workTime: 0,
    hourRate: 0,
    myCurrency: {} as ICurrency | undefined,
    foreignCurrency: {} as ICurrency | undefined,
    imageData: null as IImageData | null,
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
      <Link href="/settings" class="border-b border-dashed border-skin-brand">
        {state.myCurrency?.symbol || state.myCurrency?.code}
      </Link>
    </div>
  );

  return (
    <div class="mx-auto md:w-1/2 space-y-8">
      <div class="form-block">
        <label for="value" class="flex space-x-1">
          <span>{t("app.amount_in@@Amount in")}</span>
          <Link
            href="/settings"
            class="border-b border-dashed border-skin-brand"
          >
            {state.foreignCurrency?.code}
          </Link>
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

          <ImageUploader
            onSuccess$={(data) => {
              state.imageData = data;
            }}
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

      {state.imageData && (
        <ImageViewer
          data={state.imageData}
          myCurrency={state.myCurrency as ICurrency}
          foreignCurrency={state.foreignCurrency as ICurrency}
          onClose$={() => {
            state.imageData = null;
          }}
        />
      )}
    </div>
  );
});
