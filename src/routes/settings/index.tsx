import type { DocumentHead } from "@builder.io/qwik-city";
import type { ISettings } from "@/lib/calc";

import { $, component$, useClientEffect$, useStore } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { FaIcon, Notice, Locator } from "@/components/ui";
import { faCalculator, faSave } from "@fortawesome/free-solid-svg-icons";
import { defaultSettings, getSettings, saveSettings } from "@/lib/calc";
import { failure, success } from "@/lib/toast";
import { useTooltips } from "@/lib/tooltip";
import { CountrySelect } from "@/integrations/react/headless";
import { getCountries } from "@/lib/countries";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const settings = useStore<ISettings>(defaultSettings);
  const countries = getCountries();

  useClientEffect$(() => {
    const { myCountry, whereAmI, calcHours, hourRate } = getSettings();

    settings.myCountry = myCountry;
    settings.whereAmI = whereAmI;
    settings.calcHours = calcHours;
    settings.hourRate = hourRate;
  });

  useTooltips();

  const settingsSavedMsg = t("app.settings_saved@@Settings saved");

  const canSave =
    settings.myCountry &&
    settings.whereAmI &&
    (!settings.calcHours || (settings.calcHours && settings.hourRate > 0));

  const saveHandler = $((event: MouseEvent) => {
    if (!(event.target as Element)?.closest("button")?.disabled) {
      saveSettings(settings);
      success(settingsSavedMsg);
    }
  });

  return (
    <div class="container mx-auto px-2 md:px-0 py-8 space-y-8">
      <div class="mx-auto w-full md:w-1/2 flex flex-col space-y-4">
        <div class="form-block">
          <label class="label flex space-x-2" for="myCountry">
            <span>{t("app.my_country@@My country")}</span>
            <Notice notice={t("app.my_country_notice")} />
          </label>

          <div class="flex space-x-2 items-end">
            <div class="flex-grow">
              <CountrySelect
                client:load
                id="myCountry"
                countries={countries}
                value={settings.myCountry}
                placeholder={t("app.select_country@@Select country")}
                nothing={t("app.nothing_found@@Nothing found")}
                onChange$={(value) => (settings.myCountry = value)}
                displayValue={settings.myCountry && t(settings.myCountry)}
              />
            </div>
            <Locator
              onSuccess$={(code) => {
                settings.myCountry = code;
              }}
            />
          </div>
        </div>

        <div class="form-block">
          <label class="label flex space-x-2" for="whereAmI">
            <span>{t("app.where_am_i@@Where am I")}</span>
            <Notice notice={t("app.where_am_i_notice")} />
          </label>

          <div class="flex space-x-2 items-end">
            <div class="flex-grow">
              <CountrySelect
                client:load
                id="whereAmI"
                countries={countries}
                value={settings.whereAmI}
                placeholder={t("app.select_country@@Select country")}
                nothing={t("app.nothing_found@@Nothing found")}
                onChange$={(value) => (settings.whereAmI = value)}
                displayValue={settings.whereAmI && t(settings.whereAmI)}
              />
            </div>
            <Locator
              onSuccess$={(code) => {
                settings.whereAmI = code;
              }}
            />
          </div>
        </div>

        <div class="form-block">
          <label class="label flex items-center space-x-2" for="calcHours">
            <input
              id="calcHours"
              type="checkbox"
              checked={settings.calcHours}
              onChange$={() => (settings.calcHours = !settings.calcHours)}
            />
            <span>{t("app.calc_hours@@Show hours of work")}</span>
            <Notice notice={t("app.calc_hours_notice")} />
          </label>
        </div>

        <div>
          <label class="label flex space-x-2" for="hourRate">
            <span>{t("app.hour_rate@@Hour rate")}</span>
            <Notice notice={t("app.hour_rate_notice")} />
          </label>
          <input
            id="hourRate"
            class="input"
            type="number"
            disabled={!settings.calcHours}
            value={settings.hourRate}
            onInput$={(event) =>
              (settings.hourRate = +(event.target as HTMLInputElement).value)
            }
          />
        </div>

        <div class="flex justify-between">
          <button class="btn" disabled={!canSave} onclick$={saveHandler}>
            <FaIcon icon={faSave} class="h-4 w-4" />
            <span>{t("app.save@@Save")}</span>
          </button>
          <Link href="/" class="btn btn-secondary">
            <FaIcon icon={faCalculator} class="h-4 w-4" />
            <span>{t("app.back_to_main@@Back to main")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "pages.settings.title@@Settings",
  meta: [
    {
      name: "description",
      content: "pages.settings.description@@Currency converter for travelers",
    },
  ],
};
