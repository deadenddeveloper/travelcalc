import type { PropFunction } from "@builder.io/qwik";

import { $, component$ } from "@builder.io/qwik";
import { FaIcon } from "@/components/ui";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { $translate as t } from "qwik-speak";
import { timezones } from "@/lib/timezones";
import { failure } from "@/lib/toast";

interface ILocatorProps {
  onFail$?: PropFunction<() => void>;
  onSuccess$: PropFunction<(code: string) => void>;
}

export const Locator = component$((props: ILocatorProps) => {
  const errMsg = t("app.country_error@@Failed to receive data");

  const handleClick = $(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (!tz) {
      return props.onFail$ ? props.onFail$() : failure(errMsg);
    }

    const countryCode = timezones[tz]?.c?.[0];

    if (!countryCode) {
      return props.onFail$ ? props.onFail$() : failure(errMsg);
    }

    return props.onSuccess$(countryCode);
  });

  return (
    <button
      class="btn btn-icon"
      data-tooltip
      title={t("app.find_by_geolocation@@Find my location")}
      onClick$={handleClick}
    >
      <FaIcon icon={faLocationCrosshairs} class="w-4 h-4" />
    </button>
  );
});
