import { component$ } from "@builder.io/qwik";
import { FaIcon } from "@/components/ui";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Loader = component$(() => {
  return (
    <FaIcon icon={faSpinner} class="h-10 w-10 text-skin-brand animate-spin" />
  );
});
