import { $translate as t } from "qwik-speak";
import { component$ } from "@builder.io/qwik";
import { FaIcon } from "@/components/ui/fa-icon";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

interface INoticeProps {
  notice: string;
}

export const Notice = component$((props: INoticeProps) => {
  return (
    <FaIcon
      icon={faInfoCircle}
      class="h-3 w-3 text-sky-300 cursor-help"
      tooltip={t(props.notice)}
    />
  );
});
