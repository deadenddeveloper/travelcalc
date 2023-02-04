import type { DocumentHead } from "@builder.io/qwik-city";
import type { ISettings } from "@/lib/calc";

import { $, component$, useClientEffect$, useStore } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { CountrySelect } from "@/components/calc";
import { FaIcon, Notice } from "@/components/ui";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { getSettings, saveSettings } from "@/lib/calc";
import { success } from "@/lib/toast";

export default component$(() => {
  const settings = useStore<ISettings>({
    myCountry: "",
    whereAmI: "",
  });

  useClientEffect$(() => {
    const { myCountry, whereAmI } = getSettings();

    settings.myCountry = myCountry;
    settings.whereAmI = whereAmI;
  });

  const scsMsg = t("app.settings_saved@@Settings saved");

  const canSave = settings.myCountry && settings.whereAmI;

  const saveHandler = $(() => {
    saveSettings(settings);
    success(scsMsg);
  });

  return (
    <div class="container mx-auto px-2 md:px-0 py-8 space-y-8">
      <div class="mx-auto w-full md:w-1/2 flex flex-col space-y-4">
        <div class="form-block">
          <label class="label flex space-x-2" for="myCountry">
            <span>{t("app.my_country@@My country")}</span>
            <Notice notice={t("app.my_country_notice")} />
          </label>
          <CountrySelect
            id="myCountry"
            value={settings.myCountry}
            onChange$={(value) => (settings.myCountry = value)}
          />
        </div>
        <div class="form-block">
          <label class="label flex space-x-2" for="whereAmI">
            <span>{t("app.where_am_i@@Where am I")}</span>
            <Notice notice={t("app.where_am_i_notice")} />
          </label>
          <CountrySelect
            id="whereAmI"
            value={settings.whereAmI}
            onChange$={(value) => (settings.whereAmI = value)}
          />
        </div>
        <div class="text-center">
          <button class="btn" disabled={!canSave} onclick$={saveHandler}>
            <FaIcon icon={faSave} class="h-4 w-4" />
            <span>{t("app.save@@Save")}</span>
          </button>
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
