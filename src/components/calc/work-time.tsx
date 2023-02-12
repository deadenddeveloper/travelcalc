import { component$ } from "@builder.io/qwik";
import { $translate as t, $plural as p } from "qwik-speak";

interface IWorkTimeProps {
  hours: number;
}

export const WorkTime = component$((props: IWorkTimeProps) => {
  const days = Math.floor(props.hours / 8);
  const hours = Math.floor(props.hours) - 8 * days;
  const minutes = Math.floor((props.hours - Math.floor(props.hours)) * 60);

  if (!props.hours) {
    return <div class="text-center">{t("app.start_type@@Start type")}</div>;
  }

  return (
    <div class="form-block text-center text-xl space-x-2">
      <div>{t("app.work_hours@@")}</div>

      {!days && !hours && !minutes ? (
        <span>{t("app.less_than_minute@@less than minute")}</span>
      ) : (
        <div class="flex justify-center space-x-1">
          {!!days && (
            <span class="whitespace-nowrap">
              <strong>{days}</strong> {p(days, "app.days")}
            </span>
          )}
          {!!hours && (
            <span class="whitespace-nowrap">
              <strong>{hours}</strong> {p(hours, "app.hours")}
            </span>
          )}
          {!!minutes && (
            <span class="whitespace-nowrap">
              <strong>{minutes}</strong> {p(minutes, "app.minutes")}
            </span>
          )}
        </div>
      )}
    </div>
  );
});
