import { $, component$, PropFunction, QwikChangeEvent } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { countries } from "@/lib/countries";

interface ICountrySelectProps {
  id: string;
  value: string;
  onChange$: PropFunction<(value: string) => string>;
}

export const CountrySelect = component$((props: ICountrySelectProps) => {
  const handleChange = $(async (event: QwikChangeEvent) => {
    await props.onChange$((event.target as HTMLSelectElement).value);
  });

  return (
    <select
      id={props.id}
      value={props.value}
      onChange$={handleChange}
      class="input"
    >
      <option value="" selected disabled>
        {t("app.select_country@@Select country")}
      </option>
      {countries.map((c) => (
        <option value={c.code}>{`${c.name} / ${c.currency}`}</option>
      ))}
    </select>
  );
});
